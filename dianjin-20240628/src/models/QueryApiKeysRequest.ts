// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryApiKeysRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  externalUserId?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'externalUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

