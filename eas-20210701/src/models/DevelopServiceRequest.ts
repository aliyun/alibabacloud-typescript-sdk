// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DevelopServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to exit development mode. Valid values:
   * 
   * *   true: exits development mode.
   * *   false (default): enters development mode.
   * 
   * @example
   * true
   */
  exit?: string;
  static names(): { [key: string]: string } {
    return {
      exit: 'Exit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

