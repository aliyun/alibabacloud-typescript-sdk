// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachCenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the CEN instance belongs.
   * 
   * *   If you own the CEN instance, you can skip this parameter.
   * *   If you do not own the CEN instance, you must specify the ID of the account that owns the CEN instance.
   * 
   * @example
   * 102681951715****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
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
   * The verification code. If you do not own the CEN instance, you must call the [SendVerifyCode](https://help.aliyun.com/document_detail/436847.html) operation to obtain a verification code.
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

