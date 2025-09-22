// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEpdSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Emissions. The result is maintained up to 31 decimal places for precise intermediate calculation and subsequently truncated for display. It is advised to pair the emissions figure with the unit of the environmental impact result for a comprehensive understanding.
   * 
   * @example
   * 1009.976265540000000000000000000000
   */
  carbonEmission?: number;
  /**
   * @remarks
   * The evaluation index adopted for the environmental impact
   * 
   * @example
   * GWP100a
   */
  indicator?: string;
  /**
   * @remarks
   * The category key. The environmental impact category. Currently, a maximum of 19 categories are supported. Enumeration refers to [Carbon Footprint Appendices](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * gwp
   */
  key?: string;
  /**
   * @remarks
   * Calculation method standard
   * 
   * @example
   * CML v4.8 2016
   */
  method?: string;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * climate change
   */
  name?: string;
  /**
   * @remarks
   * Category num: the unique serial number of the environmental impact category. A maximum of 19 categories are supported. Enumeration refers to [Carbon Footprint Appendices](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * 1
   */
  num?: number;
  /**
   * @remarks
   * Environmental impact result Value Unit.
   * 
   * @example
   * kg CO2-Eq
   */
  preUnit?: string;
  /**
   * @remarks
   * The data status. 1 indicates that the calculation is accurate, 2 indicates that the default data is used, and 3 indicates that the missing factor uses the value of 0.
   * 
   * @example
   * 1
   */
  state?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      indicator: 'indicator',
      key: 'key',
      method: 'method',
      name: 'name',
      num: 'num',
      preUnit: 'preUnit',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      indicator: 'string',
      key: 'string',
      method: 'string',
      name: 'string',
      num: 'number',
      preUnit: 'string',
      state: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEpdSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response parameters
   */
  data?: GetEpdSummaryResponseBodyData[];
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * B91B5559-065A-55C3-8D75-DA218EBFD1DC
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
      data: { 'type': 'array', 'itemType': GetEpdSummaryResponseBodyData },
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

