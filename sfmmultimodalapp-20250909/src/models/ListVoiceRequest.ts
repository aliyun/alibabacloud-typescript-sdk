// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  modelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
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

