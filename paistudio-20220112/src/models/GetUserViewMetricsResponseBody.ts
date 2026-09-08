// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserViewMetric } from "./UserViewMetric";


export class GetUserViewMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The user monitoring data.
   */
  summary?: UserViewMetric;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * The metrics aggregated at the user dimension.
   */
  userMetrics?: UserViewMetric[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
      total: 'Total',
      userMetrics: 'UserMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      summary: UserViewMetric,
      total: 'number',
      userMetrics: { 'type': 'array', 'itemType': UserViewMetric },
    };
  }

  validate() {
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    if(Array.isArray(this.userMetrics)) {
      $dara.Model.validateArray(this.userMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

