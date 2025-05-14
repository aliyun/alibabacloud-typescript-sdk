// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDentryResponseBodySpaceRecentListUpdater extends $dara.Model {
  /**
   * @example
   * hello
   */
  name?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

