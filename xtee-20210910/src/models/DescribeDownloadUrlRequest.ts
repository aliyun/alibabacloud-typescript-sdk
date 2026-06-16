// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * CSV
   */
  fileType?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 18191
   */
  taskId?: number;
  /**
   * @remarks
   * The download type.
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

