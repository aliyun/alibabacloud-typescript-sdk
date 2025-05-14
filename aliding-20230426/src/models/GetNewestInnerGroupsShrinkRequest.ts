// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNewestInnerGroupsShrinkRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  requestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      requestShrink: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

