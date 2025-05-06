// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogContentsResponseBodyListLogContentContents extends $dara.Model {
  /**
   * @remarks
   * Log line content.
   * 
   * @example
   * spark pi is 3.14\\n
   */
  lineContent?: string;
  static names(): { [key: string]: string } {
    return {
      lineContent: 'LineContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

