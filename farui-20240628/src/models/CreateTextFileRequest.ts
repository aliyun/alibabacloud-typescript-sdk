// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTextFileRequest extends $dara.Model {
  /**
   * @example
   * e9a93201-7e96-4dc1-9678-2832fc132d08
   */
  clientToken?: string;
  /**
   * @example
   * 1714476549
   */
  createTime?: string;
  textFileName?: string;
  textFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      createTime: 'CreateTime',
      textFileName: 'TextFileName',
      textFileUrl: 'TextFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createTime: 'string',
      textFileName: 'string',
      textFileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

