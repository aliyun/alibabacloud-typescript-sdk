// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendVerifyCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The information required to send the verification code, in JSON format. When verifying a CEN instance, provide the CEN instance ID and the Alibaba Cloud account ID to which the CEN instance belongs.
   * - CenId: the CEN instance ID. 
   * - CenOwnerId: the Alibaba Cloud account ID to which the CEN instance belongs. 
   * 
   * > If the specified CenId belongs to the current Alibaba Cloud account, this parameter is not required. If the specified CenId belongs to a different Alibaba Cloud account, specify the Alibaba Cloud account ID of the owner.
   * 
   * @example
   * {"cenOwnerId": 1234567890******,"cenId": "cen-3weq30r6t0s7t4****"}
   */
  extraInfo?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The action associated with the verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * eds_cenID_securityverification
   */
  verifyCodeAction?: string;
  static names(): { [key: string]: string } {
    return {
      extraInfo: 'ExtraInfo',
      regionId: 'RegionId',
      verifyCodeAction: 'VerifyCodeAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraInfo: 'string',
      regionId: 'string',
      verifyCodeAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

