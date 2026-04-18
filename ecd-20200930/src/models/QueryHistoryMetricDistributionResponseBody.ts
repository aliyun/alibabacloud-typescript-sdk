// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryMetricDistributionResponseBodyDistributionList extends $dara.Model {
  /**
   * @example
   * 40
   */
  count?: number;
  /**
   * @example
   * 2F2BF549-CBD9-1FED-9ABB-086B62D7B293
   */
  label?: string;
  /**
   * @example
   * 20
   */
  max?: number;
  /**
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
  distributionList?: QueryHistoryMetricDistributionResponseBodyDistributionList[];
  /**
   * @example
   * 2F2BF549-CBD9-1FED-9ABB-086B62D7B293
   */
  requestId?: string;
  /**
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

