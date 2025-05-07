// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotwordRequest extends $dara.Model {
  /**
   * @example
   * 84ufBYEeLMZOjRFo84HJ7ySL3Efr55
   */
  docId?: string;
  prompt?: string;
  referenceContent?: string;
  /**
   * @example
   * e32a1a3f-1f7e-41dd-b888-ef1d91b96d1e
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-baw8as25ll3wnzjr
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      prompt: 'Prompt',
      referenceContent: 'ReferenceContent',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      prompt: 'string',
      referenceContent: 'string',
      sessionId: 'string',
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

