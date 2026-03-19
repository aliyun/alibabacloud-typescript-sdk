// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunPptOutlineGenerationRequest extends $dara.Model {
  /**
   * @example
   * abc
   */
  externalUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-8v8a5mfpxffrj1pn
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'ExternalUserId',
      prompt: 'Prompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
      prompt: 'string',
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

