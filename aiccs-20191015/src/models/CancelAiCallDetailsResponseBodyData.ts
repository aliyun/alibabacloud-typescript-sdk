// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAiCallDetailsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 75
   */
  failedCount?: number;
  failedDetails?: { [key: string]: any };
  /**
   * @example
   * ALL_SUCCEED
   */
  resultCode?: string;
  /**
   * @example
   * 81
   */
  succeedCount?: number;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      failedDetails: 'FailedDetails',
      resultCode: 'ResultCode',
      succeedCount: 'SucceedCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      failedDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resultCode: 'string',
      succeedCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.failedDetails) {
      $dara.Model.validateMap(this.failedDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

