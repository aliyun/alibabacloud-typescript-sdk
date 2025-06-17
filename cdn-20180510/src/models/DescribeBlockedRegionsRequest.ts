// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlockedRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values:
   * 
   * *   **zh**: simplified Chinese
   * *   **en**: English
   * *   **jp**: Japanese
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

