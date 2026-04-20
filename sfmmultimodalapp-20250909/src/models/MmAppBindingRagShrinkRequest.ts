// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MmAppBindingRagShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_a2eb4e04b48041108edb1f6de815
   */
  appId?: string;
  knowledgeBaseCodeListShrink?: string;
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
      knowledgeBaseCodeListShrink: 'KnowledgeBaseCodeList',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      knowledgeBaseCodeListShrink: 'string',
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

