// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudNotesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/autoChapters_1724914365173.json
   */
  autoChaptersFilePath?: string;
  /**
   * @example
   * sample-bucket
   */
  bucket?: string;
  /**
   * @example
   * testchannelId
   */
  channelId?: string;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/customPrompt_1724914365173.json
   */
  customPromptFilePath?: string;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/meetingAssistance_1724914365173.json
   */
  meetingAssistanceFilePath?: string;
  /**
   * @example
   * 1
   */
  region?: number;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/serviceInspection_1724914365173.json
   */
  serviceInspectionFilePath?: string;
  /**
   * @example
   * 1731939816837
   */
  startTs?: number;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/summarization_1724914365173.json
   */
  summarizationFilePath?: string;
  /**
   * @example
   * test001
   */
  taskId?: string;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/textPolish_1724914365173.json
   */
  textPolishFilePath?: string;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/transcription_1724914365173.json
   */
  transcriptionFilePath?: string;
  /**
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      autoChaptersFilePath: 'AutoChaptersFilePath',
      bucket: 'Bucket',
      channelId: 'ChannelId',
      customPromptFilePath: 'CustomPromptFilePath',
      meetingAssistanceFilePath: 'MeetingAssistanceFilePath',
      region: 'Region',
      serviceInspectionFilePath: 'ServiceInspectionFilePath',
      startTs: 'StartTs',
      summarizationFilePath: 'SummarizationFilePath',
      taskId: 'TaskId',
      textPolishFilePath: 'TextPolishFilePath',
      transcriptionFilePath: 'TranscriptionFilePath',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoChaptersFilePath: 'string',
      bucket: 'string',
      channelId: 'string',
      customPromptFilePath: 'string',
      meetingAssistanceFilePath: 'string',
      region: 'number',
      serviceInspectionFilePath: 'string',
      startTs: 'number',
      summarizationFilePath: 'string',
      taskId: 'string',
      textPolishFilePath: 'string',
      transcriptionFilePath: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

