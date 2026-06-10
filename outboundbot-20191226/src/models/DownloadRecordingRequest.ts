// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to retrieve voice slice recordings.
   * 
   * @example
   * false
   */
  needVoiceSliceRecording?: boolean;
  /**
   * @remarks
   * Specifies whether to swap the left and right audio channels. The default value is `false`.
   * 
   * @example
   * false
   */
  swapChannels?: boolean;
  /**
   * @remarks
   * The call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 744b27f3-437f-4a8c-a181-f668e492fd24
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      needVoiceSliceRecording: 'NeedVoiceSliceRecording',
      swapChannels: 'SwapChannels',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      needVoiceSliceRecording: 'boolean',
      swapChannels: 'boolean',
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

