// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese. This is the default value.
   * 
   * - en: English.
   * 
   * - ja: Japanese.
   * 
   * @example
   * zh
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
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

