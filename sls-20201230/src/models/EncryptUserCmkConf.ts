// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptUserCmkConf extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cmkKeyId?: string;
  /**
   * @remarks
   * This parameter is required.
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

