// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserWafLogStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where WAF logs are stored. Valid values:
   * 
   * *   **cn-hangzhou**: China (Hangzhou).
   * *   **cn-beijing**: China (Beijing).
   * *   **cn-hongkong**: China (Hong Kong).
   * *   **ap-southeast-1**: Singapore.
   * *   **ap-southeast-3**: Malaysia (Kuala Lumpur).
   * *   **ap-southeast-5**: Indonesia (Jakarta).
   * *   **ap-southeast-6**: Philippines (Manila).
   * *   **ap-southeast-7**: Thailand (Bangkok).
   * *   **me-east-1**: UAE (Dubai).
   * *   **eu-central-1**: Germany (Frankfurt).
   * *   **us-east-1**: US (Virginia).
   * *   **us-west-1**: US (Silicon Valley).
   * *   **ap-northeast-1**: Japan (Tokyo).
   * *   **ap-northeast-2**: South Korea (Seoul).
   * *   **eu-west-1**: UK (London).
   * *   **cn-hangzhou-finance**: China East 1 Finance.
   * *   **cn-shanghai-finance-1**: China East 2 Finance.
   * *   **cn-shenzhen-finance**: China South 1 Finance.
   * 
   * >  The China East 1 Finance, China East 2 Finance, and China South 1 Finance regions are available only for Alibaba Finance Cloud users. Alibaba Finance Cloud users are also limited to storing logs within these specific regions.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The status of WAF logs.
   * 
   * *   **initializing**
   * *   **initialize_failed**
   * *   **normal**
   * *   **releasing**
   * *   **release_failed**
   * 
   * @example
   * normal
   */
  logStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D****
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the log status was modified. Unit: milliseconds.
   * 
   * @example
   * 1706771796859
   */
  statusUpdateTime?: number;
  static names(): { [key: string]: string } {
    return {
      logRegionId: 'LogRegionId',
      logStatus: 'LogStatus',
      requestId: 'RequestId',
      statusUpdateTime: 'StatusUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRegionId: 'string',
      logStatus: 'string',
      requestId: 'string',
      statusUpdateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

