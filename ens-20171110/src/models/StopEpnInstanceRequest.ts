// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopEpnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EPN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * epn-20201014152822q2S9tQ
   */
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

