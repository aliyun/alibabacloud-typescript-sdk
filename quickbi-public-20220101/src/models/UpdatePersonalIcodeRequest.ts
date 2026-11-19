// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePersonalICodeRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID in Quick BI.
   * 
   * @example
   * sasdasasd
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

