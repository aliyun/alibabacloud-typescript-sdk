// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchImageTaskResponseBodyDataTaskInfoListImageList extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  message?: string;
  /**
   * @example
   * http://www.example.com/xxx.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

