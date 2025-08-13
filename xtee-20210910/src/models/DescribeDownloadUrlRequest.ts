// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * File type
   * 
   * @example
   * CSV
   */
  fileType?: string;
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 18191
   */
  taskId?: number;
  /**
   * @remarks
   * Download type
   * 
   * @example
   * FILE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      lang: 'Lang',
      regId: 'RegId',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      lang: 'string',
      regId: 'string',
      taskId: 'number',
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

