export const COMMON_TABLE_SCHEMA = {
  name: 'commons',
  fields: [
    { name: 'field1', id: '1', isSystem: false },
    { name: 'field2', id: '2', isSystem: false },
    { name: 'field3', id: '3', isSystem: false },
  ],
};

export const TABLE_SCHEMA_WITH_RELATION = {
  name: 'Relation',
  fields: [
    { name: 'field1', isSystem: false, id: '1', fieldType: 'RELATION' },
    { name: 'field2', isSystem: false, id: '2' },
    { name: 'field3', isSystem: false, id: '3' },
    { name: 'field4', isSystem: false, id: '4', fieldType: 'RELATION', isList: true },
  ],
};

export const TABLE_SCHEMA_WITH_FILES = {
  name: 'Files',
  fields: [
    {
      id: '1',
      name: 'file',
      displayName: 'File',
      description: null,
      fieldType: 'FILE',
      fieldTypeAttributes: {
        format: 'FILE',
        showTitle: null,
        showUrl: null,
        maxSize: null,
        typeRestrictions: null,
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      id: '2',
      name: 'fileList',
      displayName: 'File List',
      description: null,
      fieldType: 'FILE',
      fieldTypeAttributes: {
        format: 'FILE',
        showTitle: null,
        showUrl: null,
        maxSize: null,
        typeRestrictions: null,
      },
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
  ],
};

export const TABLE_SCHEMA_WITH_CUSTOM_FIELDS = {
  name: 'CustomFields',
  fields: [
    {
      id: '5bac9e032cb41016073279c1',
      name: 'id',
      displayName: 'ID',
      description: null,
      fieldType: 'ID',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: true,
      isUnique: true,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: '5bac9e032cb410aaae3279c2',
      name: 'createdAt',
      displayName: 'Created At',
      description: null,
      fieldType: 'DATE',
      fieldTypeAttributes: {
        id: '5bac9e032cb41071903279c3',
        format: 'DATETIME',
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: '5bac9e032cb4101d9e3279c4',
      name: 'updatedAt',
      displayName: 'Updated At',
      description: null,
      fieldType: 'DATE',
      fieldTypeAttributes: {
        id: '5bac9e032cb41038203279c5',
        format: 'DATETIME',
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: '5bac9e032cb41050d33279c8',
      name: 'createdBy',
      displayName: 'Created By',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: {
        id: '5bac9e032cb410d7643279c9',
        refFieldName: null,
        refFieldDisplayName: null,
        relationTableName: 'Users',
        relationFieldName: null,
        refTable: {
          id: '5bac9daf2cb4100073327873',
          name: 'Users',
        },
        refFieldIsList: null,
        refFieldIsRequired: null,
      },
    },
    {
      id: '5bac9eaf2cb4101ef2327a37',
      name: 'phone',
      displayName: 'Phone',
      description: null,
      fieldType: 'CUSTOM',
      fieldTypeAttributes: {
        id: '5bac9eaf2cb4106c25327a38',
        innerFields: [
          {
            name: 'code',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 4,
            },
          },
          {
            name: 'number',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 8,
            },
          },
        ],
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      id: '5bac9eb02cb4107af8327a4e',
      name: 'address',
      displayName: 'Address',
      description: null,
      fieldType: 'CUSTOM',
      fieldTypeAttributes: {
        id: '5bac9eb02cb41046bd327a4f',
        innerFields: [
          {
            name: 'street1',
            displayName: 'Street 1',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'street2',
            displayName: 'Street 2',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'zip',
            displayName: 'Zip',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'city',
            displayName: 'City',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'state',
            displayName: 'State',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
        ],
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      id: '5bac1eaf2cb4101ef2327a37',
      name: 'phoneList',
      displayName: 'Phone List',
      description: null,
      fieldType: 'CUSTOM',
      fieldTypeAttributes: {
        id: '5bac9eaf2cb4106c25327a38',
        innerFields: [
          {
            name: 'code',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 4,
            },
          },
          {
            name: 'number',
            displayName: null,
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 8,
            },
          },
        ],
      },
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
  ],
};

export const TABLE_SCHEMA_WITHOUT_USER_FIELDS = {
  name: 'TableWithoutUserFields',
  fields: [
    {
      id: '5bac9e032cb41016073279c1',
      name: 'id',
      displayName: 'ID',
      description: null,
      fieldType: 'ID',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: true,
      isUnique: true,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: '5bac9e032cb410aaae3279c2',
      name: 'createdAt',
      displayName: 'Created At',
      description: null,
      fieldType: 'DATE',
      fieldTypeAttributes: {
        id: '5bac9e032cb41071903279c3',
        format: 'DATETIME',
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: '5bac9e032cb4101d9e3279c4',
      name: 'updatedAt',
      displayName: 'Updated At',
      description: null,
      fieldType: 'DATE',
      fieldTypeAttributes: {
        id: '5bac9e032cb41038203279c5',
        format: 'DATETIME',
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: null,
    },
    {
      id: '5bac9e032cb41050d33279c8',
      name: 'createdBy',
      displayName: 'Created By',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: true,
      isMeta: true,
      relation: {
        id: '5bac9e032cb410d7643279c9',
        refFieldName: null,
        refFieldDisplayName: null,
        relationTableName: 'Users',
        relationFieldName: null,
        refTable: {
          id: '5bac9daf2cb4100073327873',
          name: 'Users',
        },
        refFieldIsList: null,
        refFieldIsRequired: null,
      },
    },
  ],
};
