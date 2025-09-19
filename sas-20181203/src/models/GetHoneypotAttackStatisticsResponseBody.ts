// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotAttackStatisticsResponseBodyDataHoneypotAttackStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of times the value is counted.
   * 
   * @example
   * 10
   */
  statisticsCount?: number;
  /**
   * @remarks
   * The statistical value.
   * 
   * @example
   * 112.168.1.**
   */
  statisticsValue?: string;
  static names(): { [key: string]: string } {
    return {
      statisticsCount: 'StatisticsCount',
      statisticsValue: 'StatisticsValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statisticsCount: 'number',
      statisticsValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotAttackStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The statistics details.
   */
  honeypotAttackStatistics?: GetHoneypotAttackStatisticsResponseBodyDataHoneypotAttackStatistics[];
  /**
   * @remarks
   * The type of the attack source statistics. Valid values:
   * 
   * *   **TOP_ATTACKED_AGENT**: the top five probes that are attacked the most frequently.
   * *   **TOP_ATTACKED_IP**: the top five IP addresses that are attacked the most frequently.
   * *   **ATTACK_EVENT_TYPE**: the type of the intrusion event.
   * *   **ATTACK_HONEYPOT_TYPE**: the type of the attacked honeypot.
   * 
   * @example
   * TOP_ATTACKED_IP
   */
  statisticsType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      honeypotAttackStatistics: 'HoneypotAttackStatistics',
      statisticsType: 'StatisticsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      honeypotAttackStatistics: { 'type': 'array', 'itemType': GetHoneypotAttackStatisticsResponseBodyDataHoneypotAttackStatistics },
      statisticsType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.honeypotAttackStatistics)) {
      $dara.Model.validateArray(this.honeypotAttackStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotAttackStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code that is returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The statistics.
   */
  data?: GetHoneypotAttackStatisticsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FACC60A-3FE4-5F49-9184-50730C8B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHoneypotAttackStatisticsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

