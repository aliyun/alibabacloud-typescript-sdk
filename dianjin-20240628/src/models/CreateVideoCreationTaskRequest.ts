// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoCreationTaskRequestCreationInstruction extends $dara.Model {
  /**
   * @example
   * xxx
   */
  instruction?: string;
  /**
   * @example
   * xxx
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      instruction: 'instruction',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instruction: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoCreationTaskRequestFileInfo extends $dara.Model {
  /**
   * @example
   * xxx
   */
  fileId?: string;
  /**
   * @example
   * xxx
   */
  fileName?: string;
  /**
   * @example
   * xxx
   */
  fileTraceId?: string;
  /**
   * @example
   * xxx
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

export class CreateVideoCreationTaskRequest extends $dara.Model {
  creationInstruction?: CreateVideoCreationTaskRequestCreationInstruction;
  fileInfo?: CreateVideoCreationTaskRequestFileInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111
   */
  imageDetectionTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      creationInstruction: 'creationInstruction',
      fileInfo: 'fileInfo',
      imageDetectionTaskId: 'imageDetectionTaskId',
      requestId: 'requestId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationInstruction: CreateVideoCreationTaskRequestCreationInstruction,
      fileInfo: CreateVideoCreationTaskRequestFileInfo,
      imageDetectionTaskId: 'string',
      requestId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.creationInstruction && typeof (this.creationInstruction as any).validate === 'function') {
      (this.creationInstruction as any).validate();
    }
    if(this.fileInfo && typeof (this.fileInfo as any).validate === 'function') {
      (this.fileInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

