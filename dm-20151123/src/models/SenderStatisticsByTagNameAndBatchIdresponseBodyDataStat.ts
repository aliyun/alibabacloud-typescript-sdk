// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SenderStatisticsByTagNameAndBatchIDResponseBodyDataStat extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2021-07-02
   */
  createTime?: string;
  /**
   * @remarks
   * Failure count
   * 
   * @example
   * 0
   */
  faildCount?: string;
  /**
   * @remarks
   * Request count
   * 
   * @example
   * 4
   */
  requestCount?: string;
  /**
   * @remarks
   * Success rate
   * 
   * @example
   * 100.00%
   */
  succeededPercent?: string;
  /**
   * @remarks
   * Success count
   * 
   * @example
   * 4
   */
  successCount?: string;
  /**
   * @remarks
   * Invalid count
   * 
   * @example
   * 0
   */
  unavailableCount?: string;
  /**
   * @remarks
   * Unavailability rate
   * 
   * @example
   * 0%
   */
  unavailablePercent?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      faildCount: 'faildCount',
      requestCount: 'requestCount',
      succeededPercent: 'succeededPercent',
      successCount: 'successCount',
      unavailableCount: 'unavailableCount',
      unavailablePercent: 'unavailablePercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      faildCount: 'string',
      requestCount: 'string',
      succeededPercent: 'string',
      successCount: 'string',
      unavailableCount: 'string',
      unavailablePercent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

