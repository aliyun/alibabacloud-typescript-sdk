// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCharsetResponseBodyCharset extends $dara.Model {
  /**
   * @remarks
   * DescribeCharset
   * 
   * @example
   * utf8
   */
  charset?: string;
  collations?: string[];
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      collations: 'Collations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      collations: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.collations)) {
      $dara.Model.validateArray(this.collations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

