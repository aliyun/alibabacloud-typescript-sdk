// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsSignResponseBodyAuditInfo extends $dara.Model {
  /**
   * @remarks
   * 审核时间。
   * 
   * @example
   * 2024-06-03 12:02:34
   */
  auditDate?: string;
  /**
   * @remarks
   * 审批未通过的原因。
   * 
   * @example
   * 通过资质信息，不能判断是否可以申请此签名。
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

export class GetSmsSignResponseBodySignIspRegisterDetailListRegisterStatusReasons extends $dara.Model {
  /**
   * @remarks
   * 报备状态原因码。取值：
   * - **UNBINDING_QUA**：签名未关联资质；
   * - **BINDING_INCOMPLETE_QUA**：关联资质信息不全；
   * - **NON_REGISTER**：未发起报备；
   * - **REGISTERING**：签名报备中；
   * - **DETECTING**：未发起探测或探测中；
   * - **DETECT_SUCCESS**：报备成功；
   * - **QUALIFICATION_ERROR**：资质原因；
   * - **SIGNATURE_ERROR**：签名原因；
   * - **SIGNATURE_QUALIFICATION_ERROR**：签名与资质关系不符；
   * - **ONE_CODE_MULTIPLE_SIGN**：扩展码原因；
   * - **OTHERS_ERROR**：其他原因；
   * - **REGISTER_TIMEOUT**：报备超时；
   * - **NO_SEND_RECORD**：签名超过6个月无发送记录；
   * - **EXT_CODE_RECYCLE**：扩展码收回。
   * - **SUBPORT_RECYCLE**：子端口被运营商治理。
   * 
   * @example
   * REGISTER_TIMEOUT
   */
  reasonCode?: string;
  /**
   * @remarks
   * 原因说明列表。可能返回0个或者多个原因说明，返回原因码不一定会返回原因说明。
   */
  reasonDescList?: string[];
  static names(): { [key: string]: string } {
    return {
      reasonCode: 'ReasonCode',
      reasonDescList: 'ReasonDescList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonCode: 'string',
      reasonDescList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reasonDescList)) {
      $dara.Model.validateArray(this.reasonDescList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsSignResponseBodySignIspRegisterDetailList extends $dara.Model {
  /**
   * @remarks
   * 运营商类型。取值：
   * - **mobile**：中国移动；
   * - **unicom**：中国联通；
   * - **telecom**：中国电信。
   * 
   * @example
   * telecom
   */
  operatorCode?: string;
  /**
   * @remarks
   * 运营商反馈时间，格式为yyyy-MM-dd HH:mm:ss。
   * 
   * @example
   * 2025-06-13 15:55:26
   */
  operatorCompleteTime?: string;
  /**
   * @remarks
   * 报备状态。取值：
   * 
   * - **0**：报备失败，原因可能为资质信息与工信注册信息不一致或运营商侧无法支持等。建议您登录[短信服务控制台](https://dysms.console.aliyun.com/domestic/text/sign)查看具体失败原因，并依据提示进行操作；
   * - **1**：已报备待验证，当前至少有一个子端口号运营商已返回报备通过，建议您少量多次向不同运营商手机号发送验证码、通知短信进行验证；
   * - **2**：报备失效，签名超过 6 个月无发送记录时，报备结果失效。如您需要重新启用该签名，请在[短信服务控制台](https://dysms.console.aliyun.com/domestic/text/sign)重新发起报备；
   * - **3**：报备成功，当前至少有一个子端口号运营商已返回报备通过，经验证短信发送成功率符合预期，建议您持续关注发送成功率；
   * - **-1**：报备中，当前尚未收到运营商反馈的报备结果，建议您等待签名报备状态变更为“已报备待验证”后再批量发送，当前可少量多次尝试使用该签名发送，观察短信发送效果；
   * - **-2**：未报备，原因可能为当前签名未关联实名资质或关联资质信息不全，建议您修改当前资质或编辑签名绑定其他资质以重新发起报备。
   * 
   * 建议您单击查看[更多签名实名制报备内容及建议操作](https://help.aliyun.com/document_detail/2873145.html)。
   * 
   * @example
   * 0
   */
  registerStatus?: number;
  /**
   * @remarks
   * 报备状态原因列表。
   */
  registerStatusReasons?: GetSmsSignResponseBodySignIspRegisterDetailListRegisterStatusReasons[];
  static names(): { [key: string]: string } {
    return {
      operatorCode: 'OperatorCode',
      operatorCompleteTime: 'OperatorCompleteTime',
      registerStatus: 'RegisterStatus',
      registerStatusReasons: 'RegisterStatusReasons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorCode: 'string',
      operatorCompleteTime: 'string',
      registerStatus: 'number',
      registerStatusReasons: { 'type': 'array', 'itemType': GetSmsSignResponseBodySignIspRegisterDetailListRegisterStatusReasons },
    };
  }

  validate() {
    if(Array.isArray(this.registerStatusReasons)) {
      $dara.Model.validateArray(this.registerStatusReasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * APP-ICP备案实体id。
   * 
   * @example
   * 1000009***123
   */
  appIcpRecordId?: number;
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
  auditInfo?: GetSmsSignResponseBodyAuditInfo;
  /**
   * @remarks
   * 委托授权书审核状态。取值：
   * - true：审核通过。
   * - false：审核未通过（包含审核通过外的其他所有状态）。
   * 
   * @example
   * true
   */
  authorizationLetterAuditPass?: boolean;
  /**
   * @remarks
   * 委托授权书ID。
   * 
   * @example
   * 1000********1234
   */
  authorizationLetterId?: number;
  /**
   * @remarks
   * 请求状态码。取值：
   * 
   * - OK：代表请求成功。
   * - 其他错误码，请参见[API错误码](https://help.aliyun.com/document_detail/101346.html)。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 短信签名的创建日期和时间。
   * 
   * @example
   * 2024-06-03 10:02:34
   */
  createDate?: string;
  /**
   * @remarks
   * 更多资料信息，补充上传业务证明文件或业务截图文件列表。
   */
  fileUrlList?: string[];
  /**
   * @remarks
   * 状态码的描述。
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * 工单号。
   * 
   * 审核人员查询审核时会用到此参数。您需要审核加急时需要提供此工单号。
   * 
   * @example
   * 20044156924
   */
  orderId?: string;
  /**
   * @remarks
   * 资质ID。申请签名时关联的资质ID。
   * 
   * @example
   * 2004393****
   */
  qualificationId?: number;
  /**
   * @remarks
   * **已废弃，请使用`SignIspRegisterDetailList`查看各运营商实名报备结果。**
   * 
   * 签名实名制报备结果。取值：
   * - 0：报备失败。
   * - 1：报备成功。
   * - 2：报备失效。
   * - -1：无状态。
   * 
   * 建议您单击查看[更多签名实名制报备内容及建议操作](https://help.aliyun.com/document_detail/2873145.html)。
   * 
   * @example
   * 1
   */
  registerResult?: number;
  /**
   * @remarks
   * 短信签名场景说明，长度不超过200个字符。
   * 
   * @example
   * 登录场景验证码
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
  /**
   * @remarks
   * 短信签名Code。
   * 
   * @example
   * SIGN_100000077042023_17174665*****_ZM2kG
   */
  signCode?: string;
  /**
   * @remarks
   * 运营商报备状态列表。获取此参数返回数据需要[更新SDK](https://api.aliyun.com/api-tools/sdk/Dysmsapi?version=2017-05-25&language=java-tea&tab=primer-doc)至4.1.2版本或以上。
   */
  signIspRegisterDetailList?: GetSmsSignResponseBodySignIspRegisterDetailList[];
  /**
   * @remarks
   * 短信签名名称。
   * 
   * @example
   * 登录验证
   */
  signName?: string;
  /**
   * @remarks
   * 签名审核状态。取值：
   * 
   * - **0**：审核中。
   * - **1**：审核通过。
   * - **2**：审核失败，请在返回参数`AuditInfo.RejectInfo`中查看审核失败原因。
   * - **10**：取消审核。
   * 
   * @example
   * 2
   */
  signStatus?: number;
  /**
   * @remarks
   * 签名标识。取值：
   * 
   * - 2：用户自定义创建签名。
   * - 3：系统赠送签名。
   * - 4：测试签名。
   * - 5：试用签名。
   * 
   * @example
   * 2
   */
  signTag?: string;
  /**
   * @remarks
   * 签名使用场景。
   * 
   * @example
   * 已注册商标名称。
   */
  signUsage?: string;
  /**
   * @remarks
   * 签名为自用或他用。
   * 
   * - false：自用（默认值）。
   * 
   * - true：他用。
   * 
   * @example
   * false
   */
  thirdParty?: boolean;
  /**
   * @remarks
   * 商标实体id。
   * 
   * @example
   * 1000009081***
   */
  trademarkId?: number;
  static names(): { [key: string]: string } {
    return {
      appIcpRecordId: 'AppIcpRecordId',
      applyScene: 'ApplyScene',
      auditInfo: 'AuditInfo',
      authorizationLetterAuditPass: 'AuthorizationLetterAuditPass',
      authorizationLetterId: 'AuthorizationLetterId',
      code: 'Code',
      createDate: 'CreateDate',
      fileUrlList: 'FileUrlList',
      message: 'Message',
      orderId: 'OrderId',
      qualificationId: 'QualificationId',
      registerResult: 'RegisterResult',
      remark: 'Remark',
      requestId: 'RequestId',
      signCode: 'SignCode',
      signIspRegisterDetailList: 'SignIspRegisterDetailList',
      signName: 'SignName',
      signStatus: 'SignStatus',
      signTag: 'SignTag',
      signUsage: 'SignUsage',
      thirdParty: 'ThirdParty',
      trademarkId: 'TrademarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcpRecordId: 'number',
      applyScene: 'string',
      auditInfo: GetSmsSignResponseBodyAuditInfo,
      authorizationLetterAuditPass: 'boolean',
      authorizationLetterId: 'number',
      code: 'string',
      createDate: 'string',
      fileUrlList: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      orderId: 'string',
      qualificationId: 'number',
      registerResult: 'number',
      remark: 'string',
      requestId: 'string',
      signCode: 'string',
      signIspRegisterDetailList: { 'type': 'array', 'itemType': GetSmsSignResponseBodySignIspRegisterDetailList },
      signName: 'string',
      signStatus: 'number',
      signTag: 'string',
      signUsage: 'string',
      thirdParty: 'boolean',
      trademarkId: 'number',
    };
  }

  validate() {
    if(this.auditInfo && typeof (this.auditInfo as any).validate === 'function') {
      (this.auditInfo as any).validate();
    }
    if(Array.isArray(this.fileUrlList)) {
      $dara.Model.validateArray(this.fileUrlList);
    }
    if(Array.isArray(this.signIspRegisterDetailList)) {
      $dara.Model.validateArray(this.signIspRegisterDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

