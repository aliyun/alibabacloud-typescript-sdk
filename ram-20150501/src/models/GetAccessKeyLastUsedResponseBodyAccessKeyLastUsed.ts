// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed extends $dara.Model {
  /**
   * @remarks
   * The time when the AccessKey pair was used for the last time.
   * 
   * @example
   * 2020-10-21T06:37:40Z
   */
  lastUsedDate?: string;
  static names(): { [key: string]: string } {
    return {
      lastUsedDate: 'LastUsedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUsedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

