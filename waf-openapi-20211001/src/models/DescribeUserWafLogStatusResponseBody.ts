// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserWafLogStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where logs are stored. Valid values:
   * 
   * - **cn-hangzhou**: indicates China East 1 (Hangzhou).
   * 
   * - **cn-beijing**: indicates China North 2 (Beijing).
   * 
   * - **cn-hongkong**: indicates China (Hong Kong).
   * 
   * - **ap-southeast-1**: indicates Singapore.
   * 
   * - **ap-southeast-3**: indicates Malaysia (Kuala Lumpur).
   * 
   * - **ap-southeast-5**: indicates Indonesia (Jakarta).
   * 
   * - **ap-southeast-6**: indicates Philippines (Manila).
   * 
   * - **ap-southeast-7**: indicates Thailand (Bangkok).
   * 
   * - **me-east-1**: indicates UAE (Dubai).
   * 
   * - **eu-central-1**: indicates Germany (Frankfurt).
   * 
   * - **us-east-1**: indicates US (Virginia).
   * 
   * - **us-west-1**: indicates US (Silicon Valley).
   * 
   * - **ap-northeast-1**: indicates Japan (Tokyo).
   * 
   * - **ap-northeast-2**: indicates South Korea (Seoul).
   * 
   * - **eu-west-1**: indicates UK (London).
   * 
   * - **cn-hangzhou-finance**: indicates China East 1 Hangzhou Finance Cloud.
   * 
   * - **cn-shanghai-finance-1**: indicates China East 2 Shanghai Finance Cloud.
   * 
   * - **cn-shenzhen-finance**: indicates China South 1 Shenzhen Finance Cloud.
   * 
   * > The Finance Cloud regions are available only to Finance Cloud users, and Finance Cloud users can obtain only these regions.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The status of WAF logs.
   * 
   * - **initializing**: The logs are being initialized.
   * 
   * - **initialize_failed**: The initialization failed.
   * 
   * - **normal**: The logs are running properly.
   * 
   * - **releasing**: The logs are being released.
   * 
   * - **release_failed**: The release failed.
   * 
   * @example
   * normal
   */
  logStatus?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
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

