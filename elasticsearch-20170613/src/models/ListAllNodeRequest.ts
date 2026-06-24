// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return monitoring information for the nodes. Valid values:
   * 
   * - true (default): Returns monitoring information.
   * 
   * - false: Does not return monitoring information.
   * 
   * @example
   * false
   */
  extended?: boolean;
  static names(): { [key: string]: string } {
    return {
      extended: 'extended',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extended: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

