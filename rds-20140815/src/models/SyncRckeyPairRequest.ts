// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncRCKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * customer_keypairs
   */
  keyPairName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  syncMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      regionId: 'RegionId',
      syncMode: 'SyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      regionId: 'string',
      syncMode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

