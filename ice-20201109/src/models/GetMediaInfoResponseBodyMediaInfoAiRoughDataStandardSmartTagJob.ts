// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJobResults } from "./GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJobResults";


export class GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJob extends $dara.Model {
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
   * The URL of the tagging result.
   * 
   * @example
   * http://xx.oss-cn-shanghai.aliyuncs.com/result2.txt
   */
  resultUrl?: string;
  /**
   * @remarks
   * The recognized tags.
   */
  results?: GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJobResults[];
  /**
   * @remarks
   * The analysis status. Valid values:
   * 
   * *   Analyzing
   * *   AnalyzeSuccess
   * *   AnalyzeFailed
   * 
   * @example
   * Analyzing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aiJobId: 'AiJobId',
      resultUrl: 'ResultUrl',
      results: 'Results',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiJobId: 'string',
      resultUrl: 'string',
      results: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJobResults },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

