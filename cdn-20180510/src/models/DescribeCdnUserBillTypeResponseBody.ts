// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem extends $dara.Model {
  billType?: string;
  billingCycle?: string;
  dimension?: string;
  endTime?: string;
  product?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      billType: 'BillType',
      billingCycle: 'BillingCycle',
      dimension: 'Dimension',
      endTime: 'EndTime',
      product: 'Product',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billType: 'string',
      billingCycle: 'string',
      dimension: 'string',
      endTime: 'string',
      product: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeResponseBodyBillTypeData extends $dara.Model {
  billTypeDataItem?: DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem[];
  static names(): { [key: string]: string } {
    return {
      billTypeDataItem: 'BillTypeDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.billTypeDataItem)) {
      $dara.Model.validateArray(this.billTypeDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeResponseBody extends $dara.Model {
  billTypeData?: DescribeCdnUserBillTypeResponseBodyBillTypeData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billTypeData: 'BillTypeData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeData: DescribeCdnUserBillTypeResponseBodyBillTypeData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.billTypeData && typeof (this.billTypeData as any).validate === 'function') {
      (this.billTypeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

