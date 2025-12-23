// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The output level.
   * 
   * Valid values:
   * 
   * *   simple
   * *   normal
   * *   detail
   * 
   * @example
   * detail
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

