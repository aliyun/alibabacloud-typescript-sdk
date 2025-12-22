// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageDetectionTaskRequestFileInfo extends $dara.Model {
  /**
   * @example
   * wanx-demo-1.png
   */
  fileId?: string;
  /**
   * @example
   * wanx-demo-1.png
   */
  fileName?: string;
  /**
   * @example
   * fileTraceId
   */
  fileTraceId?: string;
  /**
   * @example
   * wanx-demo-1.png
   */
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileTraceId: 'fileTraceId',
      ossKey: 'ossKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileTraceId: 'string',
      ossKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageDetectionTaskRequest extends $dara.Model {
  fileInfo?: CreateImageDetectionTaskRequestFileInfo;
  /**
   * @example
   * fileUrl
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sfkhwjf
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfo: 'fileInfo',
      fileUrl: 'fileUrl',
      requestId: 'requestId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfo: CreateImageDetectionTaskRequestFileInfo,
      fileUrl: 'string',
      requestId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.fileInfo && typeof (this.fileInfo as any).validate === 'function') {
      (this.fileInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

