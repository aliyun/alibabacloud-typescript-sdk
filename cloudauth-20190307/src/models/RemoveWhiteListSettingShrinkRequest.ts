// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveWhiteListSettingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the whitelists to delete in batches.
   */
  idsShrink?: string;
  /**
   * @remarks
   * The service code of the ID Verification service. Valid values: **antcloudauth**.
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

