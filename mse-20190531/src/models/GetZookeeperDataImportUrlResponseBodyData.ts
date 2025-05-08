// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetZookeeperDataImportUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 250000
   */
  maxSize?: string;
  /**
   * @remarks
   * The maximum size of a file that can be uploaded each time. Unit: MB.
   * 
   * @example
   * http://xxxxxxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'MaxSize',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'string',
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

