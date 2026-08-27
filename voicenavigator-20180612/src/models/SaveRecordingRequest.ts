// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  conversationId?: string;
  /**
   * @remarks
   * The duration of the recording.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  duration?: string;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * e6bef0db439d4048bfcf45322491becf.wav
   */
  fileName?: string;
  /**
   * @remarks
   * The file path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test/record/
   */
  filePath?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the account to which the instance belongs.
   * 
   * @example
   * 1971226538081821
   */
  instanceOwnerId?: number;
  /**
   * @remarks
   * The start time of the recording.
   * 
   * This parameter is required.
   * 
   * @example
   * 1582267398628
   */
  startTime?: number;
  /**
   * @remarks
   * The type of the recording file.
   * 
   * This parameter is required.
   * 
   * @example
   * Source
   */
  type?: string;
  voiceSliceRecordingList?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      duration: 'Duration',
      fileName: 'FileName',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      startTime: 'StartTime',
      type: 'Type',
      voiceSliceRecordingList: 'VoiceSliceRecordingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      duration: 'string',
      fileName: 'string',
      filePath: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
      startTime: 'number',
      type: 'string',
      voiceSliceRecordingList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

