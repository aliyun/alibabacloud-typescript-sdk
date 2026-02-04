// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomFieldRequestFieldDataConfigItems extends $dara.Model {
  /**
   * @remarks
   * 配置项展示名
   * 
   * @example
   * string
   */
  displayName?: string;
  /**
   * @remarks
   * 配置项状态，枚举值，enabled、disabled
   * 
   * @example
   * string
   */
  status?: string;
  /**
   * @remarks
   * 配置项展示值
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
   * 字段值配置项，必须与数据类型一致，只能新增数据项，不可删除，项字段：displayName、value、status
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
   * 字段默认值，必须与数据类型一致
   * 
   * @example
   * string
   */
  defaultValue?: string;
  /**
   * @remarks
   * 对字段的描述信息
   * 
   * @example
   * 字段测试
   */
  description?: string;
  /**
   * @remarks
   * 是否加密，默认false
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * 字段归属实体。实体包括账户、组、组织
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  entityType?: string;
  /**
   * @remarks
   * 字段值配置项，必须与数据类型一致
   */
  fieldDataConfig?: CreateCustomFieldRequestFieldDataConfig;
  /**
   * @remarks
   * 数据类型，枚举值：string、number、boolean
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  fieldDataType?: string;
  /**
   * @remarks
   * 字段展示名，长度不超过128字符
   * 
   * This parameter is required.
   * 
   * @example
   * name_001
   */
  fieldDisplayName?: string;
  /**
   * @remarks
   * 字段展示类型，枚举值，select、checkbox、input
   * 
   * This parameter is required.
   * 
   * @example
   * input
   */
  fieldDisplayType?: string;
  /**
   * @remarks
   * 字段标识，英文字母、下划线
   * 
   * This parameter is required.
   * 
   * @example
   * field_001
   */
  fieldName?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 是否必填，默认false
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * 是否唯一，默认false
   * 
   * @example
   * false
   */
  unique?: boolean;
  /**
   * @remarks
   * 用户端(portal侧)权限，hide、read_only、read_write，默认read_only
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

