// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterHealthStatusResponseBodyWorker extends $dara.Model {
  /**
   * @remarks
   * The number of healthy storage node groups.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of storage node groups.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky storage node groups.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of storage node groups. Valid values:
   * 
   * *   **RISK**: risky
   * *   **NORMAL**: healthy
   * *   **UNAVAILABLE**: unavailable
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable storage node groups.
   * 
   * @example
   * 0
   */
  unavailableCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      expectedCount: 'ExpectedCount',
      riskCount: 'RiskCount',
      status: 'Status',
      unavailableCount: 'UnavailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      expectedCount: 'number',
      riskCount: 'number',
      status: 'string',
      unavailableCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

