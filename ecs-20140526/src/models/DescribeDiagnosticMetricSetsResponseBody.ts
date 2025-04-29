// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosticMetricSetsResponseBodyMetricSets } from "./DescribeDiagnosticMetricSetsResponseBodyMetricSets";


export class DescribeDiagnosticMetricSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostic metric sets.
   */
  metricSets?: DescribeDiagnosticMetricSetsResponseBodyMetricSets[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricSets: 'MetricSets',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricSets: { 'type': 'array', 'itemType': DescribeDiagnosticMetricSetsResponseBodyMetricSets },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricSets)) {
      $dara.Model.validateArray(this.metricSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

