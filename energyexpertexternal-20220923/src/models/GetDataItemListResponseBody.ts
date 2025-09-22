// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataItemListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The identifier of the data item.
   * 
   * @example
   * demo_api_code
   */
  code?: string;
  /**
   * @remarks
   * The name of the data item.
   * 
   * @example
   * name_bbb
   */
  name?: string;
  /**
   * @remarks
   * Data filling method, 1: monthly value 2: annual value.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The data item unit.
   * 
   * @example
   * kg
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      period: 'period',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      period: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataItemListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response parameters.
   */
  data?: GetDataItemListResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDataItemListResponseBodyData },
      requestId: 'string',
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

