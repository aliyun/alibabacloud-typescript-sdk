// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryMetricDistributionResponseBodyDistributionList extends $dara.Model {
  /**
   * @remarks
   * The number of data points in this value range.
   * 
   * @example
   * 40
   */
  count?: number;
  /**
   * @remarks
   * The range label that you defined in the request.
   * 
   * @example
   * 2F2BF549-CBD9-1FED-9ABB-086B62D7B293
   */
  label?: string;
  /**
   * @remarks
   * The maximum value of the value range.
   * 
   * @example
   * 20
   */
  max?: number;
  /**
   * @remarks
   * The minimum value of the value range.
   * 
   * @example
   * 0
   */
  min?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
      max: 'number',
      min: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHistoryMetricDistributionResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of objects, each representing the distribution data for a specific value range.
   */
  distributionList?: QueryHistoryMetricDistributionResponseBodyDistributionList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F2BF549-CBD9-1FED-9ABB-086B62D7B293
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data points that match the query.
   * 
   * @example
   * 94
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      distributionList: 'DistributionList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionList: { 'type': 'array', 'itemType': QueryHistoryMetricDistributionResponseBodyDistributionList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.distributionList)) {
      $dara.Model.validateArray(this.distributionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

