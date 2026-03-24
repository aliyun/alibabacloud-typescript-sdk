// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackEventDashboardResponseBodyDataAttackInstanceTopCount extends $dara.Model {
  /**
   * @remarks
   * The count of the statistics value.
   * 
   * @example
   * 18
   */
  statisticsCount?: number;
  /**
   * @remarks
   * Statistical value.
   * 
   * @example
   * {\\"internetIp\\":\\"101.37.86.**\\",\\"instanceName\\":\\"na**me\\",\\"intranetIp\\":\\"10.1.0.*\\"}
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

export class GetAttackEventDashboardResponseBodyDataAttackTypeTopCount extends $dara.Model {
  /**
   * @remarks
   * Count of statistical values.
   * 
   * @example
   * 5
   */
  statisticsCount?: number;
  /**
   * @remarks
   * Statistical value.
   * 
   * @example
   * PHP Webshell Upload
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

export class GetAttackEventDashboardResponseBodyDataLatestTimeHourCount extends $dara.Model {
  /**
   * @remarks
   * Count of statistical values.
   * 
   * @example
   * 1
   */
  statisticsCount?: number;
  /**
   * @remarks
   * Statistical value.
   * 
   * @example
   * 1752642000000
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

export class GetAttackEventDashboardResponseBodyDataSrcIpTopCount extends $dara.Model {
  /**
   * @remarks
   * Count of statistical values.
   * 
   * @example
   * 17
   */
  statisticsCount?: number;
  /**
   * @remarks
   * Statistical value.
   * 
   * @example
   * 140.205.11.**
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

export class GetAttackEventDashboardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of attacks.
   * 
   * @example
   * 18
   */
  attackAllCount?: number;
  /**
   * @remarks
   * List of attack counts by attacked asset.
   */
  attackInstanceTopCount?: GetAttackEventDashboardResponseBodyDataAttackInstanceTopCount[];
  /**
   * @remarks
   * List of attack counts by attack type.
   */
  attackTypeTopCount?: GetAttackEventDashboardResponseBodyDataAttackTypeTopCount[];
  /**
   * @remarks
   * List of attack counts by hour.
   */
  latestTimeHourCount?: GetAttackEventDashboardResponseBodyDataLatestTimeHourCount[];
  /**
   * @remarks
   * List of attack counts by source IP.
   */
  srcIpTopCount?: GetAttackEventDashboardResponseBodyDataSrcIpTopCount[];
  static names(): { [key: string]: string } {
    return {
      attackAllCount: 'AttackAllCount',
      attackInstanceTopCount: 'AttackInstanceTopCount',
      attackTypeTopCount: 'AttackTypeTopCount',
      latestTimeHourCount: 'LatestTimeHourCount',
      srcIpTopCount: 'SrcIpTopCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackAllCount: 'number',
      attackInstanceTopCount: { 'type': 'array', 'itemType': GetAttackEventDashboardResponseBodyDataAttackInstanceTopCount },
      attackTypeTopCount: { 'type': 'array', 'itemType': GetAttackEventDashboardResponseBodyDataAttackTypeTopCount },
      latestTimeHourCount: { 'type': 'array', 'itemType': GetAttackEventDashboardResponseBodyDataLatestTimeHourCount },
      srcIpTopCount: { 'type': 'array', 'itemType': GetAttackEventDashboardResponseBodyDataSrcIpTopCount },
    };
  }

  validate() {
    if(Array.isArray(this.attackInstanceTopCount)) {
      $dara.Model.validateArray(this.attackInstanceTopCount);
    }
    if(Array.isArray(this.attackTypeTopCount)) {
      $dara.Model.validateArray(this.attackTypeTopCount);
    }
    if(Array.isArray(this.latestTimeHourCount)) {
      $dara.Model.validateArray(this.latestTimeHourCount);
    }
    if(Array.isArray(this.srcIpTopCount)) {
      $dara.Model.validateArray(this.srcIpTopCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackEventDashboardResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code, **200** indicates success, any other value indicates failure. The caller can use this field to determine the reason for the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetAttackEventDashboardResponseBodyData;
  /**
   * @remarks
   * The HTTP response status code, 200 indicates that the request was sent successfully.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned by the API request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting and problem localization.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Values:
   * - **true**: Success
   * - **false**: Failure
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
      data: GetAttackEventDashboardResponseBodyData,
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

