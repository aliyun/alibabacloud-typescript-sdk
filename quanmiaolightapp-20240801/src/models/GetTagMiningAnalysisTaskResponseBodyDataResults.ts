// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTagMiningAnalysisTaskResponseBodyDataResultsHeader } from "./GetTagMiningAnalysisTaskResponseBodyDataResultsHeader";
import { GetTagMiningAnalysisTaskResponseBodyDataResultsPayload } from "./GetTagMiningAnalysisTaskResponseBodyDataResultsPayload";


export class GetTagMiningAnalysisTaskResponseBodyDataResults extends $dara.Model {
  /**
   * @example
   * 1
   */
  customId?: string;
  header?: GetTagMiningAnalysisTaskResponseBodyDataResultsHeader;
  payload?: GetTagMiningAnalysisTaskResponseBodyDataResultsPayload;
  static names(): { [key: string]: string } {
    return {
      customId: 'customId',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customId: 'string',
      header: GetTagMiningAnalysisTaskResponseBodyDataResultsHeader,
      payload: GetTagMiningAnalysisTaskResponseBodyDataResultsPayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

