// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomFieldResponseBodyCustomFieldFieldDataConfigItems extends $dara.Model {
  /**
   * @remarks
   * The display name of the configuration item.
   * 
   * @example
   * hobby
   */
  displayName?: string;
  /**
   * @remarks
   * The status of the configuration item.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * game
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomFieldResponseBodyCustomFieldFieldDataConfig extends $dara.Model {
  /**
   * @remarks
   * The list of field configuration items.
   */
  items?: GetCustomFieldResponseBodyCustomFieldFieldDataConfigItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetCustomFieldResponseBodyCustomFieldFieldDataConfigItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomFieldResponseBodyCustomField extends $dara.Model {
  /**
   * @remarks
   * The time when the extended field was created, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 17642960730
   */
  createTime?: number;
  /**
   * @remarks
   * The default value of the field.
   * 
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the extended field.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the field is encrypted.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The entity type to which the field belongs.
   * 
   * @example
   * user
   */
  entityType?: string;
  /**
   * @remarks
   * The field value configuration items.
   */
  fieldDataConfig?: GetCustomFieldResponseBodyCustomFieldFieldDataConfig;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * string
   */
  fieldDataType?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * userId
   */
  fieldDisplayName?: string;
  /**
   * @remarks
   * The display type of the field.
   * 
   * @example
   * input
   */
  fieldDisplayType?: string;
  /**
   * @remarks
   * The field ID.
   * 
   * @example
   * ufd_ncvy5trszg3zajaal5iofauy2q
   */
  fieldId?: string;
  /**
   * @remarks
   * The field identifier.
   * 
   * @example
   * userId
   */
  fieldName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_z4pwq7v5ankdimdelzo2zbmzo4
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the field is required.
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * The status of the extended field.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the field is unique.
   * 
   * @example
   * false
   */
  unique?: boolean;
  /**
   * @remarks
   * The time when the extended field was last updated, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 17642960730
   */
  updateTime?: number;
  /**
   * @remarks
   * The user-side (portal-side) permission.
   * 
   * @example
   * read_only
   */
  userPermission?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultValue: 'DefaultValue',
      description: 'Description',
      encrypted: 'Encrypted',
      entityType: 'EntityType',
      fieldDataConfig: 'FieldDataConfig',
      fieldDataType: 'FieldDataType',
      fieldDisplayName: 'FieldDisplayName',
      fieldDisplayType: 'FieldDisplayType',
      fieldId: 'FieldId',
      fieldName: 'FieldName',
      instanceId: 'InstanceId',
      required: 'Required',
      status: 'Status',
      unique: 'Unique',
      updateTime: 'UpdateTime',
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      defaultValue: 'string',
      description: 'string',
      encrypted: 'boolean',
      entityType: 'string',
      fieldDataConfig: GetCustomFieldResponseBodyCustomFieldFieldDataConfig,
      fieldDataType: 'string',
      fieldDisplayName: 'string',
      fieldDisplayType: 'string',
      fieldId: 'string',
      fieldName: 'string',
      instanceId: 'string',
      required: 'boolean',
      status: 'string',
      unique: 'boolean',
      updateTime: 'number',
      userPermission: 'string',
    };
  }

  validate() {
    if(this.fieldDataConfig && typeof (this.fieldDataConfig as any).validate === 'function') {
      (this.fieldDataConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomFieldResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom field information.
   */
  customField?: GetCustomFieldResponseBodyCustomField;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customField: 'CustomField',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customField: GetCustomFieldResponseBodyCustomField,
      requestId: 'string',
    };
  }

  validate() {
    if(this.customField && typeof (this.customField as any).validate === 'function') {
      (this.customField as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

