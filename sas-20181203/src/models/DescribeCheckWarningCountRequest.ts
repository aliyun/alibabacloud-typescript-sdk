// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 103784262032****
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * >  You can call the [ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~) operation to query the IDs of check items.
   * 
   * @example
   * 926
   */
  checkId?: number;
  /**
   * @remarks
   * The ID of the risk item.
   * 
   * >  You can call the [DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~) operation to query the IDs of risk items.
   * 
   * @example
   * 43
   */
  riskId?: number;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   **1**: failed
   * *   **2**: verifying
   * *   **3**: passed
   * *   **6**: ignored
   * 
   * @example
   * 3
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      checkId: 'CheckId',
      riskId: 'RiskId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      checkId: 'number',
      riskId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

