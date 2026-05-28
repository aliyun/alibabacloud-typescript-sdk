// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptUserCmkConf extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::13234:role/logsource
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) if you use the bring-your-own-key (BYOK) key.
   * 
   * This parameter is required.
   * 
   * @example
   * f5136b95-2420-ab31-xxxxxxxxx
   */
  cmkKeyId?: string;
  /**
   * @remarks
   * The ID of the region where the CMK resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'arn',
      cmkKeyId: 'cmk_key_id',
      regionId: 'region_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      cmkKeyId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

