// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTagMiningAnalysisTaskResponseBodyDataResultsHeader extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

