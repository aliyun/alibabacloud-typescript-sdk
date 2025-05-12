// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCenRequest extends $dara.Model {
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
   * The IPv4 CIDR block of the associated office network.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.100.XX.XX
   */
  cidrBlock?: string;
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
      cidrBlock: 'CidrBlock',
      regionId: 'RegionId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      cidrBlock: 'string',
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

