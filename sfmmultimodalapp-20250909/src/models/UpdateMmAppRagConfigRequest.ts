// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmAppRagConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  promptStrategy?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  retrieveMaxLength?: number;
  topK?: number;
  /**
   * @remarks
   * This parameter is required.
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

