// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalPageItem extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://baijiahao.baidu.com/s?id=1787881554557805096
   */
  link?: string;
  snippet?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'link',
      snippet: 'snippet',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      snippet: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

