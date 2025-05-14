// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDentryResponseBodySpaceRecentListLinkSourceInfoIconUrl extends $dara.Model {
  /**
   * @example
   * gh
   */
  line?: string;
  /**
   * @example
   * def
   */
  small?: string;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      small: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

