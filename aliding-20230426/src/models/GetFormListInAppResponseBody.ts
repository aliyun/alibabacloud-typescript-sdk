// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFormListInAppResponseBodyDataTitle extends $dara.Model {
  /**
   * @example
   * form
   */
  enUS?: string;
  zhCN?: string;
  static names(): { [key: string]: string } {
    return {
      enUS: 'EnUS',
      zhCN: 'ZhCN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enUS: 'string',
      zhCN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormListInAppResponseBodyData extends $dara.Model {
  /**
   * @example
   * 012345
   */
  creator?: string;
  /**
   * @example
   * receipt
   */
  formType?: string;
  /**
   * @example
   * FORM-BAxxxxx
   */
  formUuid?: string;
  /**
   * @example
   * 2023-02-22 15:27:07
   */
  gmtCreate?: string;
  title?: GetFormListInAppResponseBodyDataTitle;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      formType: 'FormType',
      formUuid: 'FormUuid',
      gmtCreate: 'GmtCreate',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      formType: 'string',
      formUuid: 'string',
      gmtCreate: 'string',
      title: GetFormListInAppResponseBodyDataTitle,
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

export class GetFormListInAppResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: GetFormListInAppResponseBodyData[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 20
   */
  totalCount?: number;
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
      currentPage: 'currentPage',
      data: 'data',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': GetFormListInAppResponseBodyData },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

