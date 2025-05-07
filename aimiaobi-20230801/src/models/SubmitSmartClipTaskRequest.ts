// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSmartClipTaskRequestEditingConfig } from "./SubmitSmartClipTaskRequestEditingConfig";
import { SubmitSmartClipTaskRequestInputConfig } from "./SubmitSmartClipTaskRequestInputConfig";
import { SubmitSmartClipTaskRequestOutputConfig } from "./SubmitSmartClipTaskRequestOutputConfig";


export class SubmitSmartClipTaskRequest extends $dara.Model {
  editingConfig?: SubmitSmartClipTaskRequestEditingConfig;
  extendParam?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputConfig?: SubmitSmartClipTaskRequestInputConfig;
  outputConfig?: SubmitSmartClipTaskRequestOutputConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      editingConfig: 'EditingConfig',
      extendParam: 'ExtendParam',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingConfig: SubmitSmartClipTaskRequestEditingConfig,
      extendParam: 'string',
      inputConfig: SubmitSmartClipTaskRequestInputConfig,
      outputConfig: SubmitSmartClipTaskRequestOutputConfig,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.editingConfig && typeof (this.editingConfig as any).validate === 'function') {
      (this.editingConfig as any).validate();
    }
    if(this.inputConfig && typeof (this.inputConfig as any).validate === 'function') {
      (this.inputConfig as any).validate();
    }
    if(this.outputConfig && typeof (this.outputConfig as any).validate === 'function') {
      (this.outputConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

