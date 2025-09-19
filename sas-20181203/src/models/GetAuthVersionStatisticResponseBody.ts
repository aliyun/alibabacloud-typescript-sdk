// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthVersionStatisticResponseBodyStatistics extends $dara.Model {
  /**
   * @remarks
   * The edition of Security Center. Valid values:
   * 
   * *   **1**: Basic edition (Unauthorized)
   * *   **6**: Anti-virus edition
   * *   **5**: Advanced edition
   * *   **3**: Enterprise edition
   * *   **7**: Ultimate edition
   * *   **10**: Value-added Plan edition
   * 
   * @example
   * 6
   */
  authVersion?: number;
  /**
   * @remarks
   * The number of authorized servers.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      authVersion: 'AuthVersion',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authVersion: 'number',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthVersionStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CA2BDF6-F3BD-51A4-BAAC-30B02F7A3FBB
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics about the numbers of assets protected by each edition of Security Center.
   */
  statistics?: GetAuthVersionStatisticResponseBodyStatistics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': GetAuthVersionStatisticResponseBodyStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

