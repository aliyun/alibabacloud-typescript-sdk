// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRCSSignatureResponseBodyDataRegisterResultListRegisterStatusReasons extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  reasonCode?: string;
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

export class GetRCSSignatureResponseBodyDataRegisterResultList extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  operatorCode?: string;
  /**
   * @example
   * 46
   */
  productType?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  registerCompleteTime?: string;
  /**
   * @example
   * 72
   */
  registerStatus?: number;
  registerStatusReasons?: GetRCSSignatureResponseBodyDataRegisterResultListRegisterStatusReasons[];
  static names(): { [key: string]: string } {
    return {
      operatorCode: 'OperatorCode',
      productType: 'ProductType',
      registerCompleteTime: 'RegisterCompleteTime',
      registerStatus: 'RegisterStatus',
      registerStatusReasons: 'RegisterStatusReasons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorCode: 'string',
      productType: 'number',
      registerCompleteTime: 'string',
      registerStatus: 'number',
      registerStatusReasons: { 'type': 'array', 'itemType': GetRCSSignatureResponseBodyDataRegisterResultListRegisterStatusReasons },
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

export class GetRCSSignatureResponseBodyDataShelfResultListShelfStatusReasons extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  reasonCode?: string;
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

export class GetRCSSignatureResponseBodyDataShelfResultList extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  operatorCode?: string;
  /**
   * @example
   * 81
   */
  productType?: number;
  /**
   * @example
   * 51
   */
  shelfStatus?: number;
  shelfStatusReasons?: GetRCSSignatureResponseBodyDataShelfResultListShelfStatusReasons[];
  static names(): { [key: string]: string } {
    return {
      operatorCode: 'OperatorCode',
      productType: 'ProductType',
      shelfStatus: 'ShelfStatus',
      shelfStatusReasons: 'ShelfStatusReasons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorCode: 'string',
      productType: 'number',
      shelfStatus: 'number',
      shelfStatusReasons: { 'type': 'array', 'itemType': GetRCSSignatureResponseBodyDataShelfResultListShelfStatusReasons },
    };
  }

  validate() {
    if(Array.isArray(this.shelfStatusReasons)) {
      $dara.Model.validateArray(this.shelfStatusReasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRCSSignatureResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  backgroundImage?: string;
  /**
   * @example
   * 示例值
   */
  bubbleColor?: string;
  /**
   * @example
   * 90
   */
  category?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  chatbotCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  chatbotName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  description?: string;
  /**
   * @example
   * 示例值示例值
   */
  latitude?: string;
  /**
   * @example
   * 示例值示例值
   */
  logo?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  longitude?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  officeAddress?: string;
  registerResultList?: GetRCSSignatureResponseBodyDataRegisterResultList[];
  /**
   * @example
   * 示例值
   */
  serviceEmail?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  servicePhone?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  serviceTerms?: string;
  /**
   * @example
   * 示例值示例值
   */
  serviceWebsite?: string;
  shelfResultList?: GetRCSSignatureResponseBodyDataShelfResultList[];
  /**
   * @example
   * 32
   */
  signId?: number;
  /**
   * @example
   * 示例值示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundImage: 'BackgroundImage',
      bubbleColor: 'BubbleColor',
      category: 'Category',
      chatbotCode: 'ChatbotCode',
      chatbotName: 'ChatbotName',
      description: 'Description',
      latitude: 'Latitude',
      logo: 'Logo',
      longitude: 'Longitude',
      officeAddress: 'OfficeAddress',
      registerResultList: 'RegisterResultList',
      serviceEmail: 'ServiceEmail',
      servicePhone: 'ServicePhone',
      serviceTerms: 'ServiceTerms',
      serviceWebsite: 'ServiceWebsite',
      shelfResultList: 'ShelfResultList',
      signId: 'SignId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundImage: 'string',
      bubbleColor: 'string',
      category: 'number',
      chatbotCode: 'string',
      chatbotName: 'string',
      description: 'string',
      latitude: 'string',
      logo: 'string',
      longitude: 'string',
      officeAddress: 'string',
      registerResultList: { 'type': 'array', 'itemType': GetRCSSignatureResponseBodyDataRegisterResultList },
      serviceEmail: 'string',
      servicePhone: 'string',
      serviceTerms: 'string',
      serviceWebsite: 'string',
      shelfResultList: { 'type': 'array', 'itemType': GetRCSSignatureResponseBodyDataShelfResultList },
      signId: 'number',
      signName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.registerResultList)) {
      $dara.Model.validateArray(this.registerResultList);
    }
    if(Array.isArray(this.shelfResultList)) {
      $dara.Model.validateArray(this.shelfResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRCSSignatureResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  data?: GetRCSSignatureResponseBodyData;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
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
      data: GetRCSSignatureResponseBodyData,
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

