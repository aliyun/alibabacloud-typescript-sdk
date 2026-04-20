// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmAppRagConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_a2eb4e04b48041108edb1f6de815
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * top_k
   */
  promptStrategy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  retrieveMaxLength?: number;
  /**
   * @example
   * 5
   */
  topK?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-6uhm7nfev4k8pwcz
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      promptStrategy: 'PromptStrategy',
      retrieveMaxLength: 'RetrieveMaxLength',
      topK: 'TopK',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      promptStrategy: 'string',
      retrieveMaxLength: 'number',
      topK: 'number',
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

