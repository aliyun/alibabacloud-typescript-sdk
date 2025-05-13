// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNumberV2ResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 74
   */
  batchId?: number;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  data?: string;
  /**
   * @example
   * 58
   */
  importNum?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      code: 'Code',
      data: 'Data',
      importNum: 'ImportNum',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      code: 'number',
      data: 'string',
      importNum: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

