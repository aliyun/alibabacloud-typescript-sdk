// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendVerifyCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The information that is required to send the verification code, in JSON format. When you verify the CEN instance of another Alibaba Cloud account, you must provide the ID of the CEN instance and the ID of the Alibaba Cloud account to which the instance belongs.
   * 
   * *   CenId: the ID of the CEN instance.
   * *   CenOwnerId: the ID of the Alibaba Cloud account to which the CEN instance belongs.
   * 
   * >  If you own the CEN instance, skip this parameter. If you do not own the CEN instance, specify the ID of the Alibaba Cloud account that owns the CEN instance.
   * 
   * @example
   * {"cenOwnerId": 1234567890******,"cenId": "cen-3weq30r6t0s7t4****"}
   */
  extraInfo?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The action that you want to perform by using the verification code.
   * 
   * Valid value:
   * 
   * *   eds_cenID_securityverification: Use the verification code to verify the CEN instance.
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

