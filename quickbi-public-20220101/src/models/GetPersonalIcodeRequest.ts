// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPersonalICodeRequest extends $dara.Model {
  /**
   * @remarks
   * The Quick BI user ID.
   * 
   * @example
   * asdasda
   */
  quickBIUserId?: string;
  static names(): { [key: string]: string } {
    return {
      quickBIUserId: 'QuickBIUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quickBIUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

