// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantBsnCodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 456*******163
   */
  aliUid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 124*******345
   */
  grantToAliuid?: number;
  notes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1131-*******-233
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      grantToAliuid: 'GrantToAliuid',
      notes: 'Notes',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      grantToAliuid: 'number',
      notes: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

