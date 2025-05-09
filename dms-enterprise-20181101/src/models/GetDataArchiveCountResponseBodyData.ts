// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataArchiveCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of tickets that data archiving failed.
   * 
   * @example
   * 1**
   */
  failCount?: number;
  /**
   * @remarks
   * The number of tickets that data archiving is in progress.
   * 
   * @example
   * 2**
   */
  processingCount?: number;
  /**
   * @remarks
   * The number of tickets that data archiving is successful.
   * 
   * @example
   * 3**
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of data archiving tickets.
   * 
   * @example
   * 6**
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      processingCount: 'ProcessingCount',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      processingCount: 'number',
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

