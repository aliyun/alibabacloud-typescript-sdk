// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachCenRequest extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the account to which the CEN instance belongs.
   * 
   * - If the specified CenId belongs to the current Alibaba Cloud account, you do not need to configure this parameter.
   * 
   * - If the specified CenId belongs to a different Alibaba Cloud account, specify the Alibaba Cloud account ID of that account.
   * 
   * @example
   * 102681951715****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The verification code. If the specified CenId belongs to a different Alibaba Cloud account, call [SendVerifyCode](https://help.aliyun.com/document_detail/436847.html) to obtain the verification code first.
   * 
   * @example
   * 12****
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      officeSiteId: 'string',
      regionId: 'string',
      verifyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

