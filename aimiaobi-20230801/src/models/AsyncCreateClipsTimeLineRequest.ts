// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncCreateClipsTimeLineRequest extends $dara.Model {
  additionalContent?: string;
  customContent?: string;
  noRefVideo?: boolean;
  processPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalContent: 'AdditionalContent',
      customContent: 'CustomContent',
      noRefVideo: 'NoRefVideo',
      processPrompt: 'ProcessPrompt',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalContent: 'string',
      customContent: 'string',
      noRefVideo: 'boolean',
      processPrompt: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

