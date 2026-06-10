// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptWaveformRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the recording file.
   * 
   * > Obtain this ID from the Folder parameter of the GetJobDataUploadParams operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 6f91885fa24b4c408d8f4eb392fd8ae6
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the recording file.
   * 
   * This parameter is required.
   * 
   * @example
   * faaf8508-9542-4ac4-84a2-0ddcbb5f79a6 (2).json
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 2bfa5ae4-7185-4227-a3b8-328f26f11be1
   */
  instanceId?: string;
  /**
   * @remarks
   * The text of the script.
   * 
   * This parameter is required.
   * 
   * @example
   * 您好，您昨晚在李佳琦直播间下单的娜薇诗椰子水二代精华2支装还未付款，超时未支付会自动关闭订单，活动错过不再有奥。
   */
  scriptContent?: string;
  /**
   * @remarks
   * Scenario ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      instanceId: 'string',
      scriptContent: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

