// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayQuotaRuleSubjectUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the detailed consumption (request) records of the consumer within the cycle.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of detailed consumption (request) records per page for the consumer within the cycle. Maximum value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

