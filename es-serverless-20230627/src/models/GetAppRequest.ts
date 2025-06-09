// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  detailed?: boolean;
  static names(): { [key: string]: string } {
    return {
      detailed: 'detailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

