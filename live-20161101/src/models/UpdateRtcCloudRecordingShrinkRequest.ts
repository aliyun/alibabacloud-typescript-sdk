// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtcCloudRecordingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The updated layout parameters. Leave this parameter empty in single-stream recording mode. This parameter is required in stream mixing recording mode when the transcoding output is not audio-only.
   */
  mixLayoutParamsShrink?: string;
  /**
   * @remarks
   * The updated subscription parameters.
   * 
   * This parameter is required.
   */
  subscribeParamsShrink?: string;
  /**
   * @remarks
   * The task ID. This ID is returned by StartRtcCloudRecording. Only tasks in the running or abnormal state can be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * ******73-8501-****-8ac1-72295a******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      mixLayoutParamsShrink: 'MixLayoutParams',
      subscribeParamsShrink: 'SubscribeParams',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixLayoutParamsShrink: 'string',
      subscribeParamsShrink: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

