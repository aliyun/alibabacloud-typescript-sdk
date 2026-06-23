// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomFieldRequestFieldDataConfigItems extends $dara.Model {
  /**
   * @remarks
   * The display name of the configuration item.
   * Maximum length: 128 characters.
   * 
   * @example
   * string
   */
  displayName?: string;
  /**
   * @remarks
   * The status of the configuration item. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * If a configuration item is disabled, it cannot be used when creating or updating entity field values.
   * 
   * @example
   * string
   */
  status?: string;
  /**
   * @remarks
   * The display value of the configuration item.
   * Maximum length: 64 characters.
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
   * The list of field configuration items. Maximum number of items: 100.
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
   * The default value of the field.
   * If configuration items exist for the type, the default value must be one of the configuration items and must be in the enabled state. Maximum length: 1024 characters.
   * 
   * @example
   * string
   */
  defaultValue?: string;
  /**
   * @remarks
   * The field description.
   * Maximum length: 512 characters.
   * 
   * @example
   * Field test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the field.
   * If this parameter is set to true, the data value is encrypted at the storage layer.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The entity to which the field belongs. Valid values:
   * - user: account.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  entityType?: string;
  /**
   * @remarks
   * The field value configuration items.
   */
  fieldDataConfig?: CreateCustomFieldRequestFieldDataConfig;
  /**
   * @remarks
   * The data type of the field. Valid values:
   * - string: string.
   * - number: number. Maximum length: 32 characters. Positive integers and decimals are supported.
   * - boolean: Boolean.
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  fieldDataType?: string;
  /**
   * @remarks
   * The field display name.
   * Maximum length: 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * name_001
   */
  fieldDisplayName?: string;
  /**
   * @remarks
   * The field display type. Valid values:
   * - input: text input box. Supported data types: string and number.
   * - select: drop-down list. Supported data types: string and boolean.
   * - checkbox: multi-select box. Supported data types: string.
   * 
   * This parameter is required.
   * 
   * @example
   * input
   */
  fieldDisplayType?: string;
  /**
   * @remarks
   * The field identifier.
   * Maximum length: 40 characters. The value can contain lowercase letters and underscores, and cannot start with an underscore.
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
   * Specifies whether the field is required.
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * Specifies whether the field value is unique.
   * If this parameter is set to true, the field value must be unique within the corresponding entity type and cannot be duplicated.
   * 
   * @example
   * false
   */
  unique?: boolean;
  /**
   * @remarks
   * The field permission on the portal side. Valid values:
   * - hide: Not visible on the portal side.
   * - read_only: Visible on the portal side but cannot be edited or updated.
   * - read_write: Visible and editable on the portal side.
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

