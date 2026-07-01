// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsTemplateResponseBodyAuditInfo extends $dara.Model {
  /**
   * @remarks
   * 审核时间。
   * 
   * @example
   * 2024-06-03 11:20:34
   */
  auditDate?: string;
  /**
   * @remarks
   * 审核未通过的原因。
   * 
   * @example
   * 模板内容中包含错别字。
   */
  rejectInfo?: string;
  static names(): { [key: string]: string } {
    return {
      auditDate: 'AuditDate',
      rejectInfo: 'RejectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditDate: 'string',
      rejectInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateResponseBodyFileUrlList extends $dara.Model {
  fileUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fileUrl)) {
      $dara.Model.validateArray(this.fileUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateResponseBodyMoreDataFileUrlList extends $dara.Model {
  moreDataFileUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      moreDataFileUrl: 'MoreDataFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moreDataFileUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.moreDataFileUrl)) {
      $dara.Model.validateArray(this.moreDataFileUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateResponseBodySignList extends $dara.Model {
  signList?: string[];
  static names(): { [key: string]: string } {
    return {
      signList: 'SignList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.signList)) {
      $dara.Model.validateArray(this.signList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * 应用场景内容。
   * 
   * @example
   * http://www.aliyun.com/
   */
  applyScene?: string;
  /**
   * @remarks
   * 审核信息。
   */
  auditInfo?: GetSmsTemplateResponseBodyAuditInfo;
  /**
   * @remarks
   * 请求状态码。取值：
   * 
   * * OK：代表请求成功。
   * * 其他错误码，请参见[API错误码](https://help.aliyun.com/document_detail/101346.html)。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 创建短信模板的时间。
   * 
   * @example
   * 2024-06-03 10:02:34
   */
  createDate?: string;
  fileUrlList?: GetSmsTemplateResponseBodyFileUrlList;
  /**
   * @remarks
   * 国际/港澳台模板类型。当**TemplateType**参数返回值为**3**时，此参数取值：
   * - **0**：短信通知。
   * - **1**：推广短信。
   * - **2**：验证码。
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * 状态码的描述。
   * 
   * @example
   * OK
   */
  message?: string;
  moreDataFileUrlList?: GetSmsTemplateResponseBodyMoreDataFileUrlList;
  /**
   * @remarks
   * 工单号。
   * 
   * 审核人员查询审核时会用到此参数。您需要审核加急时需要提供此工单号。
   * 
   * @example
   * 2003019****
   */
  orderId?: string;
  /**
   * @remarks
   * 申请模板时，关联的短信签名。
   * 
   * @example
   * 阿里云
   */
  relatedSignName?: string;
  /**
   * @remarks
   * 短信模板申请说明，是模板审核的参考信息之一。
   * 
   * @example
   * 申请验证码模板
   */
  remark?: string;
  /**
   * @remarks
   * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  signList?: GetSmsTemplateResponseBodySignList;
  /**
   * @remarks
   * 短信模板Code。
   * 
   * @example
   * SMS_20375****
   */
  templateCode?: string;
  /**
   * @remarks
   * 短信模板内容。
   * 
   * @example
   * 您正在申请手机注册，验证码为：${code}，5分钟内有效！
   */
  templateContent?: string;
  /**
   * @remarks
   * 短信模板名称。
   * 
   * @example
   * 验证码
   */
  templateName?: string;
  /**
   * @remarks
   * 模板审核状态。返回值：
   * 
   * - **0**：审核中。
   * - **1**：通过审核。
   * - **2**：未通过审核，会返回审核失败的原因，请参考[短信审核失败的处理建议](https://www.alibabacloud.com/help/en/sms/user-guide/causes-of-application-failures-and-suggestions)，调用[UpdateSmsTemplate](https://www.alibabacloud.com/help/en/sms/developer-reference/api-dysmsapi-2017-05-25-updatesmstemplate)接口或在[模板管理](https://dysms.console.aliyun.com/domestic/text/template)页面修改短信模板。
   * - **10**：取消审核。
   * 
   * @example
   * 2
   */
  templateStatus?: string;
  /**
   * @remarks
   * 模板标识。取值：
   * 
   * - 2：用户自定义创建模板。
   * 
   * - 3：系统赠送模板。
   * 
   * - 4：测试模板。
   * 
   * @example
   * 2
   */
  templateTag?: number;
  /**
   * @remarks
   * 短信类型。取值：
   * 
   * - **0**：验证码。
   * - **1**：短信通知。
   * - **2**：推广短信。
   * - **3**：国际/港澳台消息。
   * 
   * > 仅支持企业认证用户申请推广短信和国际/港澳台消息。个人用户与企业用户权益区别详情请参见[使用须知](https://www.alibabacloud.com/help/en/sms/user-guide/usage-notes)。
   * 
   * @example
   * 0
   */
  templateType?: string;
  /**
   * @remarks
   * 模板变量规则。
   * 
   * 模板变量规则详情，请参见[示例文档](https://www.alibabacloud.com/help/en/sms/templaterule-template-variable-parameter-filling-example)。
   * 
   * @example
   * {"code":"characterWithNumber"}
   */
  variableAttribute?: string;
  /**
   * @remarks
   * 各运营商审核状态，仅数字短信会返回该参数。
   * 
   * 
   * key代表运营商。取值：
   * 
   * - MOBILE_VENDOR：中国移动。
   * 
   * - TELECOM_VENDOR：中国电信。
   * 
   * - UNICOM_VENDOR：中国联通。
   * 
   *  value代表审核状态。取值： 
   * 
   * - 0：审核中。
   * 
   * - 1：通过。
   * 
   *  - 2：不通过。
   * 
   *  - 15：已失效。
   * 
   * @example
   * {
   *     "MOBILE_VENDOR": 0,
   *     "TELCOM_VENDOR": 0,
   *     "UNICOM_VENDOR": 0
   *   }
   */
  vendorAuditStatus?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applyScene: 'ApplyScene',
      auditInfo: 'AuditInfo',
      code: 'Code',
      createDate: 'CreateDate',
      fileUrlList: 'FileUrlList',
      intlType: 'IntlType',
      message: 'Message',
      moreDataFileUrlList: 'MoreDataFileUrlList',
      orderId: 'OrderId',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      requestId: 'RequestId',
      signList: 'SignList',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateStatus: 'TemplateStatus',
      templateTag: 'TemplateTag',
      templateType: 'TemplateType',
      variableAttribute: 'VariableAttribute',
      vendorAuditStatus: 'VendorAuditStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyScene: 'string',
      auditInfo: GetSmsTemplateResponseBodyAuditInfo,
      code: 'string',
      createDate: 'string',
      fileUrlList: GetSmsTemplateResponseBodyFileUrlList,
      intlType: 'number',
      message: 'string',
      moreDataFileUrlList: GetSmsTemplateResponseBodyMoreDataFileUrlList,
      orderId: 'string',
      relatedSignName: 'string',
      remark: 'string',
      requestId: 'string',
      signList: GetSmsTemplateResponseBodySignList,
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateStatus: 'string',
      templateTag: 'number',
      templateType: 'string',
      variableAttribute: 'string',
      vendorAuditStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.auditInfo && typeof (this.auditInfo as any).validate === 'function') {
      (this.auditInfo as any).validate();
    }
    if(this.fileUrlList && typeof (this.fileUrlList as any).validate === 'function') {
      (this.fileUrlList as any).validate();
    }
    if(this.moreDataFileUrlList && typeof (this.moreDataFileUrlList as any).validate === 'function') {
      (this.moreDataFileUrlList as any).validate();
    }
    if(this.signList && typeof (this.signList as any).validate === 'function') {
      (this.signList as any).validate();
    }
    if(this.vendorAuditStatus) {
      $dara.Model.validateMap(this.vendorAuditStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

