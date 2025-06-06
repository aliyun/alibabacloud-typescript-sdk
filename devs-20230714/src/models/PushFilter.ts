// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushFilter extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * prod-.*
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

