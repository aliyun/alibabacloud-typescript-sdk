// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateReadonlyModeRequest extends $dara.Model {
  /**
   * @remarks
   * Required. Pass the string true to enable read-only mode, or false to disable it. The value is case-insensitive.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

