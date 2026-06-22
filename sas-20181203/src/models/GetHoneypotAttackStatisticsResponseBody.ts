// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotAttackStatisticsResponseBodyDataHoneypotAttackStatistics extends $dara.Model {
  /**
   * @remarks
   * The count of the statistics value.
   * 
   * @example
   * 10
   */
  statisticsCount?: number;
  /**
   * @remarks
   * The statistics value.
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
   * The number of entries returned on the current page in a paged query.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The list of statistics information.
   */
  honeypotAttackStatistics?: GetHoneypotAttackStatisticsResponseBodyDataHoneypotAttackStatistics[];
  /**
   * @remarks
   * The type of attack source statistics information. Valid values:
   * 
   * - **TOP_ATTACKED_AGENT**: the top 5 probes by number of attacks.
   * - **TOP_ATTACKED_IP**: the top 5 IP addresses by number of attacks.
   * - **ATTACK_EVENT_TYPE**: the intrusion event type.
   * - **ATTACK_HONEYPOT_TYPE**: the type of the compromised honeypot.
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
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The statistics information data.
   */
  data?: GetHoneypotAttackStatisticsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the response.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 3FACC60A-3FE4-5F49-9184-50730C8B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * - **false**: The call failed.
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

