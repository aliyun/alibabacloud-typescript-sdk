// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizContact extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * 258
   */
  bizId?: number;
  /**
   * @remarks
   * The city.
   */
  CCity?: string;
  /**
   * @remarks
   * The organization name.
   */
  CCompany?: string;
  /**
   * @remarks
   * The country code.
   * 
   * @example
   * CN
   */
  CCountry?: string;
  /**
   * @remarks
   * The contact name.
   */
  CName?: string;
  /**
   * @remarks
   * The province.
   */
  CProvince?: string;
  /**
   * @remarks
   * The address.
   */
  CVenu?: string;
  /**
   * @remarks
   * The city in English.
   * 
   * @example
   * an shan Shi
   */
  ECity?: string;
  /**
   * @remarks
   * The organization name in English.
   * 
   * @example
   * hebeihuiheguandaozhizaoyouxiangongsi
   */
  ECompany?: string;
  /**
   * @remarks
   * The contact name in English.
   * 
   * @example
   * tong da wei
   */
  EName?: string;
  /**
   * @remarks
   * The province in English.
   * 
   * @example
   * liao ning
   */
  EProvince?: string;
  /**
   * @remarks
   * The address in English.
   * 
   * @example
   * tie xi qu xin kai jie 59-4 hao
   */
  EVenu?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * -
   */
  extend?: string;
  /**
   * @remarks
   * The fax country code.
   * 
   * @example
   * 86
   */
  faxArea?: string;
  /**
   * @remarks
   * The fax extension number.
   * 
   * @example
   * 61284565
   */
  faxExt?: string;
  /**
   * @remarks
   * The fax number with an area code or mobile number.
   * 
   * @example
   * 16604121234
   */
  faxMain?: string;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * 156********
   */
  mobile?: string;
  /**
   * @remarks
   * The zip code.
   * 
   * @example
   * 100000
   */
  postalcode?: string;
  /**
   * @remarks
   * The contact type. Valid values: 1: individual. 2: enterprise.
   * 
   * @example
   * 1
   */
  regType?: number;
  /**
   * @remarks
   * The registrant ID.
   * 
   * @example
   * 121000002****
   */
  registrantId?: string;
  /**
   * @remarks
   * The calling code of the country or region where the domain name contact is located.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @remarks
   * The telephone extension number.
   * 
   * @example
   * 61284565
   */
  telExt?: string;
  /**
   * @remarks
   * The landline number with an area code or mobile number.
   * 
   * @example
   * 16604121234
   */
  telMain?: string;
  /**
   * @remarks
   * The VSP contact ID.
   * 
   * @example
   * 121000001****
   */
  vspContactId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      CCity: 'CCity',
      CCompany: 'CCompany',
      CCountry: 'CCountry',
      CName: 'CName',
      CProvince: 'CProvince',
      CVenu: 'CVenu',
      ECity: 'ECity',
      ECompany: 'ECompany',
      EName: 'EName',
      EProvince: 'EProvince',
      EVenu: 'EVenu',
      email: 'Email',
      extend: 'Extend',
      faxArea: 'FaxArea',
      faxExt: 'FaxExt',
      faxMain: 'FaxMain',
      mobile: 'Mobile',
      postalcode: 'Postalcode',
      regType: 'RegType',
      registrantId: 'RegistrantId',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telMain: 'TelMain',
      vspContactId: 'VspContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      CCity: 'string',
      CCompany: 'string',
      CCountry: 'string',
      CName: 'string',
      CProvince: 'string',
      CVenu: 'string',
      ECity: 'string',
      ECompany: 'string',
      EName: 'string',
      EProvince: 'string',
      EVenu: 'string',
      email: 'string',
      extend: 'string',
      faxArea: 'string',
      faxExt: 'string',
      faxMain: 'string',
      mobile: 'string',
      postalcode: 'string',
      regType: 'number',
      registrantId: 'string',
      telArea: 'string',
      telExt: 'string',
      telMain: 'string',
      vspContactId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizCredentials extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated workflow.
   * 
   * @example
   * T20220831150014000001
   */
  bizId?: number;
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 4111111111111110**
   */
  credentialNo?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * SFZ
   */
  credentialType?: string;
  /**
   * @remarks
   * The certificate URL.
   * 
   * @example
   * http://test.oss-cn-hangzhou.aliyuncs.com/20170522/1219541161213057_070445190.jpg
   */
  credentialUrl?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test003.cn
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether the certificate belongs to the registrant.
   * 
   * @example
   * 1
   */
  holderCert?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * S20172315BJ37809
   */
  saleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      credentialUrl: 'CredentialUrl',
      domainName: 'DomainName',
      holderCert: 'HolderCert',
      saleId: 'SaleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      credentialNo: 'string',
      credentialType: 'string',
      credentialUrl: 'string',
      domainName: 'string',
      holderCert: 'number',
      saleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialOrderResult extends $dara.Model {
  /**
   * @remarks
   * The cost type.
   * 
   * @example
   * activate
   */
  actionType?: string;
  /**
   * @remarks
   * The amount of the order.
   * 
   * @example
   * 0.0
   */
  orderAmount?: number;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  orderCurrency?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * S201601060123456
   */
  orderId?: string;
  /**
   * @remarks
   * The order status.
   * 
   * @example
   * ORDER_WAIT_PAY
   */
  orderStatus?: string;
  /**
   * @remarks
   * The time when the order was placed.
   * 
   * @example
   * 2023-09-19T14:28Z
   */
  orderTime?: string;
  /**
   * @remarks
   * The validity period.
   * 
   * @example
   * 1
   */
  orderYear?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * S201601063418719
   */
  saleId?: string;
  /**
   * @remarks
   * The suborder ID.
   * 
   * @example
   * S201601061234567
   */
  subOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      orderAmount: 'OrderAmount',
      orderCurrency: 'OrderCurrency',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderTime: 'OrderTime',
      orderYear: 'OrderYear',
      saleId: 'SaleId',
      subOrderId: 'SubOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      orderAmount: 'number',
      orderCurrency: 'string',
      orderId: 'string',
      orderStatus: 'string',
      orderTime: 'string',
      orderYear: 'number',
      saleId: 'string',
      subOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizDetailResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The review information.
   */
  auditMsg?: string;
  /**
   * @remarks
   * The business name.
   */
  bizName?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * A83E1D74-E46B-505C-947A-8C6B7E41C012
   */
  bizNo?: string;
  /**
   * @remarks
   * The business status.
   * 
   * @example
   * REGISTRANT_VSP_AUDIT_SUCCESS
   */
  bizStatus?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * govRegister
   */
  bizType?: string;
  /**
   * @remarks
   * The time when the business was created.
   * 
   * @example
   * 2023-01-17 11:31:10
   */
  createTime?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test003.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The contact information.
   */
  domainSpecialBizContact?: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizContact;
  /**
   * @remarks
   * The certificate information.
   */
  domainSpecialBizCredentials?: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizCredentials[];
  /**
   * @remarks
   * The information about the order.
   */
  domainSpecialOrderResult?: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialOrderResult;
  /**
   * @remarks
   * The time when the business was created.
   * 
   * @example
   * 2023-03-21 15:10:04.0
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the business was modified.
   * 
   * @example
   * 2023-03-21 15:10:04.0
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 34083
   */
  id?: number;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 123
   */
  orderId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 1
   */
  productId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * S20172315BJ37809
   */
  saleId?: string;
  /**
   * @remarks
   * The business status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The description of business status.
   */
  statusDesc?: string;
  /**
   * @remarks
   * The time when the business was updated.
   * 
   * @example
   * 2020-11-17 18:11:15
   */
  updateTime?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 121000000****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      auditMsg: 'AuditMsg',
      bizName: 'BizName',
      bizNo: 'BizNo',
      bizStatus: 'BizStatus',
      bizType: 'BizType',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      domainSpecialBizContact: 'DomainSpecialBizContact',
      domainSpecialBizCredentials: 'DomainSpecialBizCredentials',
      domainSpecialOrderResult: 'DomainSpecialOrderResult',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      orderId: 'OrderId',
      productId: 'ProductId',
      saleId: 'SaleId',
      status: 'Status',
      statusDesc: 'StatusDesc',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditMsg: 'string',
      bizName: 'string',
      bizNo: 'string',
      bizStatus: 'string',
      bizType: 'string',
      createTime: 'number',
      domainName: 'string',
      domainSpecialBizContact: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizContact,
      domainSpecialBizCredentials: { 'type': 'array', 'itemType': QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialBizCredentials },
      domainSpecialOrderResult: QueryDomainSpecialBizDetailResponseBodyModuleDomainSpecialOrderResult,
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      orderId: 'string',
      productId: 'string',
      saleId: 'string',
      status: 'number',
      statusDesc: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.domainSpecialBizContact && typeof (this.domainSpecialBizContact as any).validate === 'function') {
      (this.domainSpecialBizContact as any).validate();
    }
    if(Array.isArray(this.domainSpecialBizCredentials)) {
      $dara.Model.validateArray(this.domainSpecialBizCredentials);
    }
    if(this.domainSpecialOrderResult && typeof (this.domainSpecialOrderResult as any).validate === 'function') {
      (this.domainSpecialOrderResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSpecialBizDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application for which the error code is returned.
   * 
   * @example
   * test-com
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * -
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * -
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The array of error parameters that are returned.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The error code.
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 110001
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code that is directly returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned data.
   */
  module?: QueryDomainSpecialBizDetailResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A83E1D74-E46B-505C-947A-8C6B7E41C011
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates whether to perform synchronous processing.
   * 
   * @example
   * true
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: QueryDomainSpecialBizDetailResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

