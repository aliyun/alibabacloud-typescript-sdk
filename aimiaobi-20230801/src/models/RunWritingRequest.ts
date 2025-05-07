// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunWritingRequestReferenceData } from "./RunWritingRequestReferenceData";
import { RunWritingRequestWritingConfig } from "./RunWritingRequestWritingConfig";


export class RunWritingRequest extends $dara.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  referenceData?: RunWritingRequestReferenceData;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  writingConfig?: RunWritingRequestWritingConfig;
  static names(): { [key: string]: string } {
    return {
      originSessionId: 'OriginSessionId',
      prompt: 'Prompt',
      referenceData: 'ReferenceData',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
      writingConfig: 'WritingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originSessionId: 'string',
      prompt: 'string',
      referenceData: RunWritingRequestReferenceData,
      sessionId: 'string',
      taskId: 'string',
      workspaceId: 'string',
      writingConfig: RunWritingRequestWritingConfig,
    };
  }

  validate() {
    if(this.referenceData && typeof (this.referenceData as any).validate === 'function') {
      (this.referenceData as any).validate();
    }
    if(this.writingConfig && typeof (this.writingConfig as any).validate === 'function') {
      (this.writingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

