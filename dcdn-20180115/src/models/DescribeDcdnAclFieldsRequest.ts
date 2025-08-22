// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnAclFieldsRequest extends $dara.Model {
  /**
   * @remarks
   * The access language. Default value: en. Valid values:
   * 
   * *   **en**: English
   * *   **zh**: Chinese
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

