// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeTaxiInvoiceResponseBodyDataInvoicesInvoiceRoi extends $dara.Model {
  /**
   * @example
   * 3625
   */
  h?: number;
  /**
   * @example
   * 1773
   */
  w?: number;
  /**
   * @example
   * 513
   */
  x?: number;
  /**
   * @example
   * 302
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
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

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiCenter extends $dara.Model {
  /**
   * @example
   * 1593
   */
  x?: number;
  /**
   * @example
   * 1360
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

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiSize extends $dara.Model {
  /**
   * @example
   * 81.999984741210938
   */
  h?: number;
  /**
   * @example
   * 887.9998779296875
   */
  w?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoi extends $dara.Model {
  /**
   * @example
   * -90
   */
  angle?: number;
  center?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiCenter;
  size?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiSize;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      center: 'Center',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      center: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiCenter,
      size: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiSize,
    };
  }

  validate() {
    if(this.center && typeof (this.center as any).validate === 'function') {
      (this.center as any).validate();
    }
    if(this.size && typeof (this.size as any).validate === 'function') {
      (this.size as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItems extends $dara.Model {
  itemRoi?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoi;
  /**
   * @example
   * 86655664
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      itemRoi: 'ItemRoi',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemRoi: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoi,
      text: 'string',
    };
  }

  validate() {
    if(this.itemRoi && typeof (this.itemRoi as any).validate === 'function') {
      (this.itemRoi as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoices extends $dara.Model {
  invoiceRoi?: RecognizeTaxiInvoiceResponseBodyDataInvoicesInvoiceRoi;
  items?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItems[];
  /**
   * @example
   * 0
   */
  rotateType?: number;
  static names(): { [key: string]: string } {
    return {
      invoiceRoi: 'InvoiceRoi',
      items: 'Items',
      rotateType: 'RotateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceRoi: RecognizeTaxiInvoiceResponseBodyDataInvoicesInvoiceRoi,
      items: { 'type': 'array', 'itemType': RecognizeTaxiInvoiceResponseBodyDataInvoicesItems },
      rotateType: 'number',
    };
  }

  validate() {
    if(this.invoiceRoi && typeof (this.invoiceRoi as any).validate === 'function') {
      (this.invoiceRoi as any).validate();
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyData extends $dara.Model {
  invoices?: RecognizeTaxiInvoiceResponseBodyDataInvoices[];
  static names(): { [key: string]: string } {
    return {
      invoices: 'Invoices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoices: { 'type': 'array', 'itemType': RecognizeTaxiInvoiceResponseBodyDataInvoices },
    };
  }

  validate() {
    if(Array.isArray(this.invoices)) {
      $dara.Model.validateArray(this.invoices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBody extends $dara.Model {
  data?: RecognizeTaxiInvoiceResponseBodyData;
  /**
   * @example
   * B2BBBD26-1D3E-4CFA-A80B-6A9266B8D125
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
      data: RecognizeTaxiInvoiceResponseBodyData,
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

