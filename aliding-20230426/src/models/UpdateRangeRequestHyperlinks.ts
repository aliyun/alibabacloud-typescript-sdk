// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRangeRequestHyperlinks extends $dara.Model {
  /**
   * @example
   * path
   */
  type?: string;
  /**
   * @example
   * https://www.dingtalk.com
   */
  link?: string;
  /**
   * @example
   * test
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      link: 'Link',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      link: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

