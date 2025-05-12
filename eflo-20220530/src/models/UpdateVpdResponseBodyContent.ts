// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * @example
   * vpd-lg4dppgi
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

