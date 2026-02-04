// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomFieldResponseBodyCustomFieldFieldDataConfigItems extends $dara.Model {
  /**
   * @remarks
   * 配置项展示名
   * 
   * @example
   * hobby
   */
  displayName?: string;
  /**
   * @remarks
   * 配置项状态, 枚举值，enabled、disabled
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 配置项值
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
   * 字段配置项列表，displayName、value、status
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
   * 扩展字段创建时间，Unix时间戳格式，单位为毫秒
   * 
   * @example
   * 17642960730
   */
  createTime?: number;
  /**
   * @remarks
   * 字段默认值
   * 
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @remarks
   * 扩展字段描述
   * 
   * @example
   * test
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
   * 字段所属实体类型
   * 
   * @example
   * user
   */
  entityType?: string;
  /**
   * @remarks
   * 字段值配置项
   */
  fieldDataConfig?: GetCustomFieldResponseBodyCustomFieldFieldDataConfig;
  /**
   * @remarks
   * 数据类型，枚举值：string、number、boolean
   * 
   * @example
   * string
   */
  fieldDataType?: string;
  /**
   * @remarks
   * 字段展示名
   * 
   * @example
   * userId
   */
  fieldDisplayName?: string;
  /**
   * @remarks
   * 字段展示类型，枚举值，select、checkbox、input、number
   * 
   * @example
   * input
   */
  fieldDisplayType?: string;
  /**
   * @remarks
   * 字段ID
   * 
   * @example
   * ufd_ncvy5trszg3zajaal5iofauy2q
   */
  fieldId?: string;
  /**
   * @remarks
   * 字段标识
   * 
   * @example
   * userId
   */
  fieldName?: string;
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * idaas_z4pwq7v5ankdimdelzo2zbmzo4
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
   * 扩展字段状态, 枚举类型：enabled，disabled
   * 
   * @example
   * enabled
   */
  status?: string;
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
   * 扩展字段最近一次更新时间, Unix时间戳格式，单位为毫秒
   * 
   * @example
   * 17642960730
   */
  updateTime?: number;
  /**
   * @remarks
   * 用户端(portal侧)权限，hide、read_only、read_write，默认read_only
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
  customField?: GetCustomFieldResponseBodyCustomField;
  /**
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

