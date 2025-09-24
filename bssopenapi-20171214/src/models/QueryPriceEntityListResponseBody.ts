// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPriceEntityListResponseBodyDataPriceEntityInfoListPriceFactorList extends $dara.Model {
  /**
   * @remarks
   * The code of the factor.
   * 
   * @example
   * vm_region_no
   */
  priceFactorCode?: string;
  /**
   * @remarks
   * The name of the factor.
   * 
   * @example
   * Region
   */
  priceFactorName?: string;
  /**
   * @remarks
   * The values of the factor.
   */
  priceFactorValueList?: string[];
  static names(): { [key: string]: string } {
    return {
      priceFactorCode: 'PriceFactorCode',
      priceFactorName: 'PriceFactorName',
      priceFactorValueList: 'PriceFactorValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceFactorCode: 'string',
      priceFactorName: 'string',
      priceFactorValueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.priceFactorValueList)) {
      $dara.Model.validateArray(this.priceFactorValueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponseBodyDataPriceEntityInfoList extends $dara.Model {
  /**
   * @remarks
   * The code of the billable item.
   * 
   * @example
   * instance_type
   */
  priceEntityCode?: string;
  /**
   * @remarks
   * The name of the billable item.
   * 
   * @example
   * Elastic Compute Service (ECS) instance
   */
  priceEntityName?: string;
  /**
   * @remarks
   * The factors of the billable item.
   */
  priceFactorList?: QueryPriceEntityListResponseBodyDataPriceEntityInfoListPriceFactorList[];
  static names(): { [key: string]: string } {
    return {
      priceEntityCode: 'PriceEntityCode',
      priceEntityName: 'PriceEntityName',
      priceFactorList: 'PriceFactorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceEntityCode: 'string',
      priceEntityName: 'string',
      priceFactorList: { 'type': 'array', 'itemType': QueryPriceEntityListResponseBodyDataPriceEntityInfoListPriceFactorList },
    };
  }

  validate() {
    if(Array.isArray(this.priceFactorList)) {
      $dara.Model.validateArray(this.priceFactorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the billable items.
   */
  priceEntityInfoList?: QueryPriceEntityListResponseBodyDataPriceEntityInfoList[];
  static names(): { [key: string]: string } {
    return {
      priceEntityInfoList: 'PriceEntityInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceEntityInfoList: { 'type': 'array', 'itemType': QueryPriceEntityListResponseBodyDataPriceEntityInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.priceEntityInfoList)) {
      $dara.Model.validateArray(this.priceEntityInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: QueryPriceEntityListResponseBodyData;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPriceEntityListResponseBodyData,
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

