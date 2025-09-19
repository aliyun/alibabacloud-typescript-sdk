// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanTaskStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of risks that are handled for the user.
   * 
   * @example
   * 11
   */
  dealedRiskNum?: number;
  /**
   * @remarks
   * The total number of tasks that are created for the user.
   * 
   * @example
   * 11
   */
  personalTaskNum?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 765EDBDE-1686-5DBA-B76F-2E0XXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of virus detection tasks.
   * 
   * @example
   * 11
   */
  totalTaskNum?: number;
  /**
   * @remarks
   * The number of risks that are detected for the user.
   * 
   * @example
   * 11
   */
  userNum?: number;
  static names(): { [key: string]: string } {
    return {
      dealedRiskNum: 'DealedRiskNum',
      personalTaskNum: 'PersonalTaskNum',
      requestId: 'RequestId',
      totalTaskNum: 'TotalTaskNum',
      userNum: 'UserNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealedRiskNum: 'number',
      personalTaskNum: 'number',
      requestId: 'string',
      totalTaskNum: 'number',
      userNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

