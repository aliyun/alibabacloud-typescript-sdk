// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaResponseBodyMediaInfoListAiRoughData extends $dara.Model {
  /**
   * @remarks
   * TV Series
   * 
   * @example
   * TV series
   */
  aiCategory?: string;
  /**
   * @remarks
   * The ID of the AI job.
   * 
   * @example
   * cd35b0b0025f71edbfcb472190a9xxxx
   */
  aiJobId?: string;
  /**
   * @remarks
   * The results of the AI job.
   * 
   * @example
   * http://xxxx.json
   */
  result?: string;
  /**
   * @remarks
   * The save type.
   * 
   * @example
   * TEXT
   */
  saveType?: string;
  /**
   * @remarks
   * The data status.
   * 
   * @example
   * SaveSuccess
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aiCategory: 'AiCategory',
      aiJobId: 'AiJobId',
      result: 'Result',
      saveType: 'SaveType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCategory: 'string',
      aiJobId: 'string',
      result: 'string',
      saveType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

