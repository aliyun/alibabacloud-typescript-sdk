// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNavigationByFormTypeResponseBodyResultTitle extends $dara.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  /**
   * @example
   * 未知
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'NameInChinese',
      nameInEnglish: 'NameInEnglish',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNavigationByFormTypeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * FORM-EF6Yxxx
   */
  formUuid?: string;
  /**
   * @example
   * TPROC--X1Gxxx
   */
  processCode?: string;
  title?: ListNavigationByFormTypeResponseBodyResultTitle;
  static names(): { [key: string]: string } {
    return {
      formUuid: 'FormUuid',
      processCode: 'ProcessCode',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formUuid: 'string',
      processCode: 'string',
      title: ListNavigationByFormTypeResponseBodyResultTitle,
    };
  }

  validate() {
    if(this.title && typeof (this.title as any).validate === 'function') {
      (this.title as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNavigationByFormTypeResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: ListNavigationByFormTypeResponseBodyResult[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListNavigationByFormTypeResponseBodyResult },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

