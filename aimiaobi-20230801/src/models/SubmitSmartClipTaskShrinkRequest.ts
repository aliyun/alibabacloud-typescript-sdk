// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartClipTaskShrinkRequest extends $dara.Model {
  editingConfigShrink?: string;
  extendParam?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputConfigShrink?: string;
  outputConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      editingConfigShrink: 'EditingConfig',
      extendParam: 'ExtendParam',
      inputConfigShrink: 'InputConfig',
      outputConfigShrink: 'OutputConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingConfigShrink: 'string',
      extendParam: 'string',
      inputConfigShrink: 'string',
      outputConfigShrink: 'string',
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

