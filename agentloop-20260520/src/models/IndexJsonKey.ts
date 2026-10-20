// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IndexJsonKey extends $dara.Model {
  /**
   * @remarks
   * Specifies whether Chinese characters are included. This parameter is required only when the **type** parameter is set to **text**. Valid values:
   *   - true: Chinese characters are included.
   *   - false: Chinese characters are not included.
   * 
   * @example
   * false
   */
  chn?: boolean;
  /**
   * @remarks
   * The type.
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

