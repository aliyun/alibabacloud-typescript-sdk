// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyResultDictList extends $dara.Model {
  /**
   * @example
   * 2782602
   */
  fileSize?: number;
  /**
   * @example
   * SYSTEM_MAIN.dic
   */
  name?: string;
  /**
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @example
   * MAIN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

