// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of honeypots.
   * 
   * @example
   * 20
   */
  totalHoneypotCount?: number;
  /**
   * @remarks
   * The health status of the management node. Valid values:
   * 
   * *   1: normal
   * *   2: abnormal
   * 
   * @example
   * 1
   */
  totalNodeStatus?: number;
  /**
   * @remarks
   * The total number of authorized probes.
   * 
   * @example
   * 40
   */
  totalProbeCount?: number;
  /**
   * @remarks
   * The number of deployed honeypots.
   * 
   * @example
   * 7
   */
  usedHoneypotCount?: number;
  /**
   * @remarks
   * The number of deployed host probes.
   * 
   * @example
   * 9
   */
  usedHostProbeCount?: number;
  /**
   * @remarks
   * The number of deployed probes.
   * 
   * @example
   * 15
   */
  usedProbeCount?: number;
  /**
   * @remarks
   * The number of deployed VPC probes.
   * 
   * @example
   * 6
   */
  usedVpcProbeCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalHoneypotCount: 'TotalHoneypotCount',
      totalNodeStatus: 'TotalNodeStatus',
      totalProbeCount: 'TotalProbeCount',
      usedHoneypotCount: 'UsedHoneypotCount',
      usedHostProbeCount: 'UsedHostProbeCount',
      usedProbeCount: 'UsedProbeCount',
      usedVpcProbeCount: 'UsedVpcProbeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalHoneypotCount: 'number',
      totalNodeStatus: 'number',
      totalProbeCount: 'number',
      usedHoneypotCount: 'number',
      usedHostProbeCount: 'number',
      usedProbeCount: 'number',
      usedVpcProbeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotStatisticsResponseBody extends $dara.Model {
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
   * The honeypot usage statistics.
   */
  data?: GetHoneypotStatisticsResponseBodyData;
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
   * EB7181CB-32F3-5189-A935-4E24DD1A****
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
      data: GetHoneypotStatisticsResponseBodyData,
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

