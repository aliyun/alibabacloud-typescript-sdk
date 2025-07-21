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

export class SenderStatisticsByTagNameAndBatchIDResponseBodyData extends $dara.Model {
  stat?: SenderStatisticsByTagNameAndBatchIDResponseBodyDataStat[];
  static names(): { [key: string]: string } {
    return {
      stat: 'stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stat: { 'type': 'array', 'itemType': SenderStatisticsByTagNameAndBatchIDResponseBodyDataStat },
    };
  }

  validate() {
    if(Array.isArray(this.stat)) {
      $dara.Model.validateArray(this.stat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsByTagNameAndBatchIDResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * Data records
   */
  data?: SenderStatisticsByTagNameAndBatchIDResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      data: SenderStatisticsByTagNameAndBatchIDResponseBodyData,
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

