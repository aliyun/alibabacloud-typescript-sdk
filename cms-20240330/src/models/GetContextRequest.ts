// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to return the context in a formatted structure. Valid values: `true` and `false`. Default value: `false`.
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

