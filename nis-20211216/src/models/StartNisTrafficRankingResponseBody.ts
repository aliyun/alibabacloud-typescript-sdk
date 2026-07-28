// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartNisTrafficRankingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result ID of this traffic ranking analysis. Call the DescribeNisTrafficRanking operation to obtain the final analysis result.
   * 
   * @example
   * task-6462a7b4c4a54b****
   */
  nisTrafficRankingId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nisTrafficRankingId: 'NisTrafficRankingId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nisTrafficRankingId: 'string',
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

