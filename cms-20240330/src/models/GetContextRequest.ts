// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to format the context.
   * 
   * @example
   * true
   */
  formatted?: boolean;
  static names(): { [key: string]: string } {
    return {
      formatted: 'formatted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatted: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

