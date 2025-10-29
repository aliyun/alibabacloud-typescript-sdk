// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBrowsersInput extends $dara.Model {
  /**
   * @remarks
   * 按浏览器名称过滤
   * 
   * @example
   * my-browser
   */
  browserName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      browserName: 'browserName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

