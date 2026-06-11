// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IndexJsonKey extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the field contains Chinese characters.
   * 
   * - `true`: The field contains Chinese characters.
   * 
   * - `false`: The field does not contain Chinese characters.
   * 
   * @example
   * true
   */
  chn?: boolean;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chn: 'chn',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chn: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

