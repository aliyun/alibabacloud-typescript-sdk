// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveWhiteListSettingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the whitelists to delete in batch.
   */
  idsShrink?: string;
  /**
   * @remarks
   * The ServiceCode of the ID Verification service. Set this parameter to **antcloudauth**.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      idsShrink: 'Ids',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idsShrink: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

