// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageDetectionTaskResponseBodyDataFileInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  fileId?: string;
  /**
   * @example
   * 1
   */
  fileName?: string;
  /**
   * @example
   * 1
   */
  fileTraceId?: string;
  /**
   * @example
   * 1
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

export class CreateImageDetectionTaskResponseBodyData extends $dara.Model {
  fileInfo?: CreateImageDetectionTaskResponseBodyDataFileInfo;
  /**
   * @example
   * a1112229
   */
  requestId?: string;
  /**
   * @example
   * w4paqoezm2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfo: 'fileInfo',
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfo: CreateImageDetectionTaskResponseBodyDataFileInfo,
      requestId: 'string',
      taskId: 'string',
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

export class CreateImageDetectionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: CreateImageDetectionTaskResponseBodyData;
  /**
   * @example
   * 成功
   */
  message?: string;
  retryAble?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      retryAble: 'retryAble',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateImageDetectionTaskResponseBodyData,
      message: 'string',
      retryAble: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

