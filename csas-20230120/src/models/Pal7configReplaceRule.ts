// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PAL7ConfigReplaceRule extends $dara.Model {
  /**
   * @remarks
   * The original content to be replaced.
   * 
   * @example
   * before
   */
  from?: string;
  /**
   * @remarks
   * The target content for replacement.
   * 
   * @example
   * after
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      to: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

