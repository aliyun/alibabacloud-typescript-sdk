// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtcCloudRecordingShrinkRequest extends $dara.Model {
  mixLayoutParamsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subscribeParamsShrink?: string;
  /**
   * @remarks
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

