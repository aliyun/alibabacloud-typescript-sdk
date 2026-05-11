// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abb4aa26-3a8e-43dd-82f8-0c3898c9c67f
   */
  conversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7cefbff0-8d50-4d6f-b93c-73cee23c1555
   */
  instanceId?: string;
  needVoiceSliceRecording?: boolean;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
      needVoiceSliceRecording: 'NeedVoiceSliceRecording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      instanceId: 'string',
      needVoiceSliceRecording: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

