// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendDocumentAskQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * Folder ID, used to specify the range of documents for the query. If it is empty, it indicates that all documents under the tenant will be queried.
   * 
   * @example
   * 1a851c4a-1d65-11ef-99a7-ssfsfdd
   */
  folderId?: string;
  /**
   * @remarks
   * The question queried by the user
   * 
   * This parameter is required.
   * 
   * @example
   * Total carbon emissions in 2023
   */
  prompt?: string;
  /**
   * @remarks
   * Q&A session ID, used to record multiple Q&A interactions of the same user. If it is empty, it indicates that sessions are not distinguished.
   * 
   * @example
   * bfce2248-1546-4298-8bcf-70ac26e69646
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
      prompt: 'prompt',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      prompt: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

