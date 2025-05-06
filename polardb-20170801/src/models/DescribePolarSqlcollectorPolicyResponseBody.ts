// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarSQLCollectorPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the clusters.
   * 
   * @example
   * pc-bp1s826a1up******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3655211B-4D74-4E13-91E6-FF2AFE******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the SQL Explorer feature is enabled. Valid values:
   * 
   * *   **Enable**
   * *   **Disabled**
   * 
   * @example
   * Enable
   */
  SQLCollectorStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      SQLCollectorStatus: 'SQLCollectorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      SQLCollectorStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

