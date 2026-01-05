// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsTemplateListResponseBodyDataListTemplateTag extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  tagKey?: string;
  /**
   * @example
   * 示例值示例值
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 模板审核状态
   * 
   * @example
   * 88
   */
  auditStatus?: number;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 示例值
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 签名
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  /**
   * @remarks
   * 模板code
   * 
   * @example
   * 示例值示例值示例值
   */
  templateCode?: string;
  /**
   * @remarks
   * 模板名称
   * 
   * @example
   * 示例值
   */
  templateName?: string;
  /**
   * @remarks
   * 模板标签
   */
  templateTag?: GetSmsTemplateListResponseBodyDataListTemplateTag[];
  /**
   * @remarks
   * 模板类型
   * 
   * @example
   * 43
   */
  templateType?: number;
  /**
   * @remarks
   * 模板可用状态
   */
  usableStateList?: string[];
  /**
   * @remarks
   * 工单号
   * 
   * @example
   * 示例值示例值
   */
  workOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      gmtCreate: 'GmtCreate',
      signName: 'SignName',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateTag: 'TemplateTag',
      templateType: 'TemplateType',
      usableStateList: 'UsableStateList',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      gmtCreate: 'string',
      signName: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateTag: { 'type': 'array', 'itemType': GetSmsTemplateListResponseBodyDataListTemplateTag },
      templateType: 'number',
      usableStateList: { 'type': 'array', 'itemType': 'string' },
      workOrderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.templateTag)) {
      $dara.Model.validateArray(this.templateTag);
    }
    if(Array.isArray(this.usableStateList)) {
      $dara.Model.validateArray(this.usableStateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateListResponseBodyData extends $dara.Model {
  list?: GetSmsTemplateListResponseBodyDataList[];
  /**
   * @example
   * 97
   */
  pageNo?: number;
  /**
   * @example
   * 78
   */
  pageSize?: number;
  /**
   * @example
   * 64
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetSmsTemplateListResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateListResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  data?: GetSmsTemplateListResponseBodyData;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetSmsTemplateListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

