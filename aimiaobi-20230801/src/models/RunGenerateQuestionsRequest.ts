// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunGenerateQuestionsRequest extends $dara.Model {
  /**
   * @example
   * oOgIwodFANW1u5MnqxysOh1rtld3xn
   */
  docId?: string;
  referenceContent?: string;
  /**
   * @example
   * f486c4e2-b773-4d65-88f8-2ba540610456
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-w335gauzlbba2vze
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      referenceContent: 'ReferenceContent',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
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

