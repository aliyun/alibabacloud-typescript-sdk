// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostInnerUploadConvertPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The file content, Base64-encoded.
   * 
   * @example
   * U0VMRUNUICogRlJPTSB0Ow==
   */
  fileContentBase64?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * demo_file
   */
  fileName?: string;
  /**
   * @remarks
   * The task ID that uniquely identifies a task.
   * 
   * @example
   * 10001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      fileContentBase64: 'fileContentBase64',
      fileName: 'fileName',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContentBase64: 'string',
      fileName: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

