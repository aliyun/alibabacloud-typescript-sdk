// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComfyTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hive-26cd567b35c04a0a90f017388207b232
   */
  hiveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"2":{"text":"masterpiece, best quality, beautiful cat, sunny day"},"3":{"text":"low quality, worst quality, blurry, watermark, text, signature"}}
   */
  userParameters?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wf_adb32aed-ccdc-42ae-b4d4-a21181ac8a5f
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      hiveId: 'HiveId',
      userParameters: 'UserParameters',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveId: 'string',
      userParameters: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

