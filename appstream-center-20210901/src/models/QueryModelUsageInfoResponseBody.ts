// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModelUsageInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of distinct models that have been called at least once within the query range. Unit: models. The value is deduplicated by model code. It may not be equal to `TotalCount` in the model usage list, because the latter may also include models that have not been called within the current query range.
   * 
   * @example
   * 10
   */
  activeModelCount?: number;
  /**
   * @remarks
   * The total number of model calls within the query range. Unit: calls. This includes both successful and failed calls.
   * 
   * @example
   * 13280
   */
  callCount?: number;
  /**
   * @remarks
   * The actual points consumed within the query range. Unit: points. The returned value can be displayed directly without further conversion.
   * 
   * @example
   * 120
   */
  pointsConsumption?: number;
  static names(): { [key: string]: string } {
    return {
      activeModelCount: 'ActiveModelCount',
      callCount: 'CallCount',
      pointsConsumption: 'PointsConsumption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeModelCount: 'number',
      callCount: 'number',
      pointsConsumption: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModelUsageInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The model usage summary corresponding to the selected business, statistical window, and model type. If no statistical results are available for `24h` or `1d` queries without specified start and end dates, each metric returns 0. If no statistical results are available for other windows or custom date ranges, no valid metric values are provided. In this case, do not treat it as zero usage.
   * 
   * @example
   * {"ActiveModelCount":10,"CallCount":13280,"PointsConsumption":120}
   */
  data?: QueryModelUsageInfoResponseBodyData;
  /**
   * @remarks
   * The unique identifier of the current request, which is used to locate and troubleshoot request issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
      data: QueryModelUsageInfoResponseBodyData,
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

