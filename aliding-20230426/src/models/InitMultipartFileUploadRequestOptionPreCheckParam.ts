// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitMultipartFileUploadRequestOptionPreCheckParam extends $dara.Model {
  /**
   * @example
   * md5
   */
  md5?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * 0
   */
  parentId?: string;
  /**
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      md5: 'Md5',
      name: 'Name',
      parentId: 'ParentId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5: 'string',
      name: 'string',
      parentId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

