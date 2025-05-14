// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJob } from "./GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJob";


export class GetMediaInfoResponseBodyMediaInfoAiRoughData extends $dara.Model {
  /**
   * @remarks
   * The AI category. Valid values:
   * 
   * *   Life
   * *   Good-looking
   * *   Cute pets
   * *   News
   * *   Ads
   * *   Environmental resources
   * *   Automobile
   */
  aiCategory?: string;
  /**
   * @remarks
   * The ID of the AI task.
   * 
   * @example
   * ****483915d4f2cd8ac20b48fb04****
   */
  aiJobId?: string;
  /**
   * @remarks
   * The analysis result.
   * 
   * @example
   * https://sample-bucket.cn-shanghai.aliyuncs.com/result.json
   */
  result?: string;
  /**
   * @remarks
   * The storage type. This parameter indicates the library in which the analysis data is stored. Valid values:
   * 
   * *   TEXT: the text library.
   * 
   * @example
   * TEXT
   */
  saveType?: string;
  /**
   * @remarks
   * The information about the tagging job.
   */
  standardSmartTagJob?: GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJob;
  /**
   * @remarks
   * The analysis status. Valid values:
   * 
   * *   Analyzing
   * *   AnalyzeSuccess
   * *   AnalyzeFailed
   * *   Saving
   * *   SaveSuccess
   * *   SaveFailed
   * *   Deleting
   * *   DeleteSuccess
   * *   DeleteFailed
   * 
   * @example
   * Analyzing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aiCategory: 'AiCategory',
      aiJobId: 'AiJobId',
      result: 'Result',
      saveType: 'SaveType',
      standardSmartTagJob: 'StandardSmartTagJob',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCategory: 'string',
      aiJobId: 'string',
      result: 'string',
      saveType: 'string',
      standardSmartTagJob: GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJob,
      status: 'string',
    };
  }

  validate() {
    if(this.standardSmartTagJob && typeof (this.standardSmartTagJob as any).validate === 'function') {
      (this.standardSmartTagJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

