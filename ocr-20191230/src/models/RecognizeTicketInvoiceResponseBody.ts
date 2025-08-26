// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeTicketInvoiceResponseBodyDataResultsContent extends $dara.Model {
  /**
   * @example
   * 81931914902643039780
   */
  antiFakeCode?: string;
  /**
   * @example
   * 044031860107
   */
  invoiceCode?: string;
  /**
   * @example
   * 2018-09-20
   */
  invoiceDate?: string;
  /**
   * @example
   * 09267581
   */
  invoiceNumber?: string;
  payeeName?: string;
  /**
   * @example
   * 914403002794492693
   */
  payeeRegisterNo?: string;
  payerName?: string;
  /**
   * @example
   * 91440300MA5EXWHW6F
   */
  payerRegisterNo?: string;
  /**
   * @example
   * ￥220.00
   */
  sumAmount?: string;
  static names(): { [key: string]: string } {
    return {
      antiFakeCode: 'AntiFakeCode',
      invoiceCode: 'InvoiceCode',
      invoiceDate: 'InvoiceDate',
      invoiceNumber: 'InvoiceNumber',
      payeeName: 'PayeeName',
      payeeRegisterNo: 'PayeeRegisterNo',
      payerName: 'PayerName',
      payerRegisterNo: 'PayerRegisterNo',
      sumAmount: 'SumAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiFakeCode: 'string',
      invoiceCode: 'string',
      invoiceDate: 'string',
      invoiceNumber: 'string',
      payeeName: 'string',
      payeeRegisterNo: 'string',
      payerName: 'string',
      payerRegisterNo: 'string',
      sumAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfosValuePositions extends $dara.Model {
  /**
   * @example
   * 586
   */
  x?: number;
  /**
   * @example
   * 16
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfos extends $dara.Model {
  key?: string;
  /**
   * @example
   * 044031860107
   */
  value?: string;
  valuePositions?: RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfosValuePositions[];
  /**
   * @example
   * 100
   */
  valueScore?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valuePositions: 'ValuePositions',
      valueScore: 'ValueScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valuePositions: { 'type': 'array', 'itemType': RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfosValuePositions },
      valueScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.valuePositions)) {
      $dara.Model.validateArray(this.valuePositions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBodyDataResultsSliceRectangle extends $dara.Model {
  /**
   * @example
   * 586
   */
  x?: number;
  /**
   * @example
   * 16
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBodyDataResults extends $dara.Model {
  content?: RecognizeTicketInvoiceResponseBodyDataResultsContent;
  /**
   * @example
   * 1
   */
  index?: number;
  keyValueInfos?: RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfos[];
  sliceRectangle?: RecognizeTicketInvoiceResponseBodyDataResultsSliceRectangle[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      index: 'Index',
      keyValueInfos: 'KeyValueInfos',
      sliceRectangle: 'SliceRectangle',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: RecognizeTicketInvoiceResponseBodyDataResultsContent,
      index: 'number',
      keyValueInfos: { 'type': 'array', 'itemType': RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfos },
      sliceRectangle: { 'type': 'array', 'itemType': RecognizeTicketInvoiceResponseBodyDataResultsSliceRectangle },
      type: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    if(Array.isArray(this.keyValueInfos)) {
      $dara.Model.validateArray(this.keyValueInfos);
    }
    if(Array.isArray(this.sliceRectangle)) {
      $dara.Model.validateArray(this.sliceRectangle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * 594
   */
  height?: number;
  /**
   * @example
   * 1417
   */
  orgHeight?: number;
  /**
   * @example
   * 1417
   */
  orgWidth?: number;
  results?: RecognizeTicketInvoiceResponseBodyDataResults[];
  /**
   * @example
   * 594
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      height: 'Height',
      orgHeight: 'OrgHeight',
      orgWidth: 'OrgWidth',
      results: 'Results',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      height: 'number',
      orgHeight: 'number',
      orgWidth: 'number',
      results: { 'type': 'array', 'itemType': RecognizeTicketInvoiceResponseBodyDataResults },
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBody extends $dara.Model {
  data?: RecognizeTicketInvoiceResponseBodyData;
  /**
   * @example
   * 063C0178-7EA3-4754-96FB-C0C9AE6B9AAE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeTicketInvoiceResponseBodyData,
      requestId: 'string',
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

