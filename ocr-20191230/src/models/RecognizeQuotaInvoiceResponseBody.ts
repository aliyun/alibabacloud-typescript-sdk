// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeQuotaInvoiceResponseBodyDataContent extends $dara.Model {
  /**
   * @example
   * 10
   */
  invoiceAmount?: string;
  /**
   * @example
   * 144031800103
   */
  invoiceCode?: string;
  invoiceDetails?: string;
  /**
   * @example
   * 40637706
   */
  invoiceNo?: string;
  sumAmount?: string;
  static names(): { [key: string]: string } {
    return {
      invoiceAmount: 'InvoiceAmount',
      invoiceCode: 'InvoiceCode',
      invoiceDetails: 'InvoiceDetails',
      invoiceNo: 'InvoiceNo',
      sumAmount: 'SumAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceAmount: 'string',
      invoiceCode: 'string',
      invoiceDetails: 'string',
      invoiceNo: 'string',
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

export class RecognizeQuotaInvoiceResponseBodyDataKeyValueInfosValuePositions extends $dara.Model {
  /**
   * @example
   * 544
   */
  x?: number;
  /**
   * @example
   * 387
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

export class RecognizeQuotaInvoiceResponseBodyDataKeyValueInfos extends $dara.Model {
  key?: string;
  value?: string;
  valuePositions?: RecognizeQuotaInvoiceResponseBodyDataKeyValueInfosValuePositions[];
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
      valuePositions: { 'type': 'array', 'itemType': RecognizeQuotaInvoiceResponseBodyDataKeyValueInfosValuePositions },
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

export class RecognizeQuotaInvoiceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  angle?: number;
  content?: RecognizeQuotaInvoiceResponseBodyDataContent;
  /**
   * @example
   * 624
   */
  height?: number;
  keyValueInfos?: RecognizeQuotaInvoiceResponseBodyDataKeyValueInfos[];
  /**
   * @example
   * 610
   */
  orgHeight?: number;
  /**
   * @example
   * 855
   */
  orgWidth?: number;
  /**
   * @example
   * 865
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      content: 'Content',
      height: 'Height',
      keyValueInfos: 'KeyValueInfos',
      orgHeight: 'OrgHeight',
      orgWidth: 'OrgWidth',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      content: RecognizeQuotaInvoiceResponseBodyDataContent,
      height: 'number',
      keyValueInfos: { 'type': 'array', 'itemType': RecognizeQuotaInvoiceResponseBodyDataKeyValueInfos },
      orgHeight: 'number',
      orgWidth: 'number',
      width: 'number',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    if(Array.isArray(this.keyValueInfos)) {
      $dara.Model.validateArray(this.keyValueInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponseBody extends $dara.Model {
  data?: RecognizeQuotaInvoiceResponseBodyData;
  /**
   * @example
   * BC4C12D0-7FD3-419A-B997-A91212DF6D82
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
      data: RecognizeQuotaInvoiceResponseBodyData,
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

