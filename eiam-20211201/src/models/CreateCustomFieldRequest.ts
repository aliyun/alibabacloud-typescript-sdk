// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomFieldRequestFieldDataConfigItems extends $dara.Model {
  /**
   * @remarks
   * The display name of the configuration item. The display name can be up to 128 characters in length.
   * 
   * @example
   * string
   */
  displayName?: string;
  /**
   * @remarks
   * The status of the configuration item. Valid values:
   * 
   * - enabled: The configuration item is enabled.
   * 
   * - disabled: The configuration item is disabled.
   * 
   * If a configuration item is disabled, it is unavailable when you create or update the field value for an entity.
   * 
   * @example
   * string
   */
  status?: string;
  /**
   * @remarks
   * The value of the configuration item. The value can be up to 64 characters in length.
   * 
   * @example
   * string
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

export class CreateCustomFieldRequestFieldDataConfig extends $dara.Model {
  /**
   * @remarks
   * A list of field configuration items. The list can contain up to 100 items.
   * 
   * @example
   * string
   */
  items?: CreateCustomFieldRequestFieldDataConfigItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': CreateCustomFieldRequestFieldDataConfigItems },
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

export class CreateCustomFieldRequest extends $dara.Model {
  /**
   * @remarks
   * The default value of the field. If the field has configuration items, the default value must be one of the enabled configuration items. The default value can be up to 1024 characters in length.
   * 
   * @example
   * string
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the field. The description can be up to 512 characters in length.
   * 
   * @example
   * Field test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether to encrypt the field value. If you set this parameter to true, the system encrypts the data value before storing it.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The entity to which the field belongs. Valid value:
   * 
   * - user: an account.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  entityType?: string;
  /**
   * @remarks
   * The configuration items of the field value.
   */
  fieldDataConfig?: CreateCustomFieldRequestFieldDataConfig;
  /**
   * @remarks
   * The data type of the field. Valid values:
   * 
   * - string: a string.
   * 
   * - number: a number. The number can be up to 32 digits in length and can be a positive integer or a decimal.
   * 
   * - boolean: a Boolean value.
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  fieldDataType?: string;
  /**
   * @remarks
   * The display name of the field. The display name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * name_001
   */
  fieldDisplayName?: string;
  /**
   * @remarks
   * The display type of the field. Valid values:
   * 
   * - input: a text box. This display type supports the string and number data types.
   * 
   * - select: a drop-down list. This display type supports the string and Boolean data types.
   * 
   * - checkbox: a check box. This display type supports the string data type.
   * 
   * This parameter is required.
   * 
   * @example
   * input
   */
  fieldDisplayType?: string;
  /**
   * @remarks
   * The name of the field. The name can be up to 40 characters in length and can contain lowercase letters and underscores (_). It cannot start with an underscore (_).
   * 
   * This parameter is required.
   * 
   * @example
   * field_001
   */
  fieldName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
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
   * Indicates whether the field value is unique. If you set this parameter to true, the value of this field must be unique for the specified entity type.
   * 
   * @example
   * false
   */
  unique?: boolean;
  /**
   * @remarks
   * The permission on the field in the portal. Valid values:
   * 
   * - hide: The field is not visible in the portal.
   * 
   * - read_only: The field is visible but cannot be modified in the portal.
   * 
   * - read_write: The field is visible and can be modified in the portal.
   * 
   * @example
   * false
   */
  userPermission?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      encrypted: 'Encrypted',
      entityType: 'EntityType',
      fieldDataConfig: 'FieldDataConfig',
      fieldDataType: 'FieldDataType',
      fieldDisplayName: 'FieldDisplayName',
      fieldDisplayType: 'FieldDisplayType',
      fieldName: 'FieldName',
      instanceId: 'InstanceId',
      required: 'Required',
      unique: 'Unique',
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      encrypted: 'boolean',
      entityType: 'string',
      fieldDataConfig: CreateCustomFieldRequestFieldDataConfig,
      fieldDataType: 'string',
      fieldDisplayName: 'string',
      fieldDisplayType: 'string',
      fieldName: 'string',
      instanceId: 'string',
      required: 'boolean',
      unique: 'boolean',
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

