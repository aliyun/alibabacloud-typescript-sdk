// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudNotesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Path where the chapter overview result file is stored.
   * 
   * @example
   * cloudNote/ksvxxppi/88_12/autoChapters_1724914365173.json
   */
  autoChaptersFilePath?: string;
  /**
   * @remarks
   * The user-defined bucket.
   * 
   * @example
   * sample-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * Channel ID.
   * 
   * @example
   * testchannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The path where the custom prompt result file is stored.
   * 
   * @example
   * cloudNote/ksvxxppi/88_12/customPrompt_1724914365173.json
   */
  customPromptFilePath?: string;
  /**
   * @remarks
   * The path where the key points extraction result file is stored.
   * 
   * @example
   * cloudNote/ksvxxppi/88_12/meetingAssistance_1724914365173.json
   */
  meetingAssistanceFilePath?: string;
  /**
   * @remarks
   * Reference job region.
   * 
   * @example
   * 1
   */
  region?: number;
  /**
   * @remarks
   * The path where the service quality inspection result file is stored.
   * 
   * @example
   * cloudNote/ksvxxppi/88_12/serviceInspection_1724914365173.json
   */
  serviceInspectionFilePath?: string;
  /**
   * @remarks
   * Start Time of the meeting summary job.
   * 
   * @example
   * 1731939816837
   */
  startTs?: number;
  /**
   * @remarks
   * Path where the summary result file is stored.
   * 
   * @example
   * cloudNote/ksvxxppi/88_12/summarization_1724914365173.json
   */
  summarizationFilePath?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * test001
   */
  taskId?: string;
  /**
   * @remarks
   * The path where the spoken-to-written text result file is stored.
   * 
   * @example
   * cloudNote/ksvxxppi/88_12/textPolish_1724914365173.json
   */
  textPolishFilePath?: string;
  /**
   * @remarks
   * Path where the transcription result file is stored.
   * 
   * @example
   * cloudNote/ksvxxppi/88_12/transcription_1724914365173.json
   */
  transcriptionFilePath?: string;
  /**
   * @remarks
   * The vendor referenced when enabling the job.
   * 
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

export class DescribeCloudNotesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of meeting summary results.
   */
  items?: DescribeCloudNotesResponseBodyItems[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Quantity per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 154EF5DE-3D08-1F2C-A482-281F78D74B7C
   */
  requestId?: string;
  /**
   * @remarks
   * Total quantity.
   * 
   * @example
   * 10
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCloudNotesResponseBodyItems },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

