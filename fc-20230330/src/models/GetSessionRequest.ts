// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The function alias or version associated with the queried session ID.
   * 
   * @example
   * aliasName1
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

