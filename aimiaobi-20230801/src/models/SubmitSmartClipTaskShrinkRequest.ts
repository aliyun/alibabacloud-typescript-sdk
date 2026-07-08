// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartClipTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Video editing configuration.
   */
  editingConfigShrink?: string;
  /**
   * @remarks
   * Additional extended parameters. These parameters merge with InputConfig, OutputConfig, and EditingConfig.
   */
  extendParam?: string;
  /**
   * @remarks
   * Input configuration.
   * 
   * This parameter is required.
   */
  inputConfigShrink?: string;
  /**
   * @remarks
   * Output configuration.
   */
  outputConfigShrink?: string;
  /**
   * @remarks
   * Alibaba Cloud Model Studio workspace ID. For more information, see [workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 业务空间ID
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

