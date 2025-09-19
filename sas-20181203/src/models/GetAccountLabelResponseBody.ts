// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountLabelResponseBodyAccountLabelList extends $dara.Model {
  /**
   * @remarks
   * The tag information.
   * 
   * @example
   * SasStep
   */
  labelSeries?: string;
  /**
   * @remarks
   * Indicates whether the tag is valid.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  labelStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      labelSeries: 'LabelSeries',
      labelStatus: 'LabelStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSeries: 'string',
      labelStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountLabelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tag list.
   */
  accountLabelList?: GetAccountLabelResponseBodyAccountLabelList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7BC55C8F-226E-5AF5-9A2C-2EC43864****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountLabelList: 'AccountLabelList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountLabelList: { 'type': 'array', 'itemType': GetAccountLabelResponseBodyAccountLabelList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountLabelList)) {
      $dara.Model.validateArray(this.accountLabelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

