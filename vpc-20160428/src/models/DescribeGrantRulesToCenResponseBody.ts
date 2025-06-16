// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGrantRulesToCenResponseBodyCenGrantRules } from "./DescribeGrantRulesToCenResponseBodyCenGrantRules";


export class DescribeGrantRulesToCenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the authorization.
   */
  cenGrantRules?: DescribeGrantRulesToCenResponseBodyCenGrantRules;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5BB78C8-5F41-464F-B9FF-5E0A7198BA26
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenGrantRules: 'CenGrantRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenGrantRules: DescribeGrantRulesToCenResponseBodyCenGrantRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.cenGrantRules && typeof (this.cenGrantRules as any).validate === 'function') {
      (this.cenGrantRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

