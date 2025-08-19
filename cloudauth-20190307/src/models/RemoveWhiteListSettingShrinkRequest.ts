// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveWhiteListSettingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * IDs of the whitelist to be deleted in bulk.
   */
  idsShrink?: string;
  /**
   * @remarks
   * ServiceCode for the real person cloud product, only value: **antcloudauth**.
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

