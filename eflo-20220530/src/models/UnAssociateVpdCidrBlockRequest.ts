// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnAssociateVpdCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The additional CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/16
   */
  secondaryCidrBlock?: string;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-aof7dat1
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      secondaryCidrBlock: 'SecondaryCidrBlock',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      secondaryCidrBlock: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

