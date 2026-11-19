// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomFieldRequestFieldDataConfigItems extends $dara.Model {
  /**
   * @remarks
   * The display name of the configuration item. The maximum length is 128 characters.
   * 
   * @example
   * string
   */
  displayName?: string;
  /**
   * @remarks
   * The status of the configuration item. Valid values:
   * - enabled: enabled.
   * - disabled: disabled.
   * 
   * If a configuration item is disabled, it is unavailable when you create or update the field value of the entity.
   * 
   * @example
   * string
   */
  status?: string;
  /**
   * @remarks
   * The value of the configuration item. The maximum length is 64 characters.
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
   * The list of field configuration items. The maximum number of items is 100.
   * 
   * @example
   * [{"DisplayName":"Option 1","Value":"option1","Status":"enabled"}]
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
   * The default value of the field. If the data type has configuration items, the default value must be one of the enabled configuration items. The maximum length is 1,024 characters.
   * 
   * @example
   * string
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the field. The maximum length is 512 characters.
   * 
   * @example
   * Test field
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the field is encrypted. If you set this parameter to true, the underlying system encrypts and stores the data value.
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
   * The configuration items for the field value.
   */
  fieldDataConfig?: CreateCustomFieldRequestFieldDataConfig;
  /**
   * @remarks
   * The data type of the field. Valid values:
   * - string: string.
   * - number: number. The maximum length is 32 characters. Positive integers and decimals are supported.
   * - boolean: Boolean value.
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  fieldDataType?: string;
  /**
   * @remarks
   * The field display name. The maximum length is 64 characters.
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
   * - input: text box. The supported data types are string and number.
   * - select: drop-down list. The supported data types are string and boolean.
   * - checkbox: check box. The supported data type is string.
   * 
   * This parameter is required.
   * 
   * @example
   * input
   */
  fieldDisplayType?: string;
  /**
   * @remarks
   * The field identifier. The maximum length is 40 characters. The value can contain lowercase English letters and underscores, and cannot start with an underscore.
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
   * Specifies whether the field value is unique. If you set this parameter to true, the value of this field must be unique within the corresponding entity type and cannot be duplicated.
   * 
   * @example
   * false
   */
  unique?: boolean;
  /**
   * @remarks
   * The field permissions on the user portal. Valid values:
   * - hide: invisible on the user portal
   * - read_only: visible but not editable on the user portal
   * - read_write: visible and editable on the user portal
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

