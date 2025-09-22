// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckNFCBindPopRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdojzopf
   */
  nfcId?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      nfcId: 'NfcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      nfcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

