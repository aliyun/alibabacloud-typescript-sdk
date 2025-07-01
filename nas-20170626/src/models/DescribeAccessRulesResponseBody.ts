// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessRulesResponseBodyAccessRules } from "./DescribeAccessRulesResponseBodyAccessRules";


export class DescribeAccessRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rules in the permission group.
   */
  accessRules?: DescribeAccessRulesResponseBodyAccessRules;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86D89E82-4297-4343-8E1E-A2495B35****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessRules: 'AccessRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRules: DescribeAccessRulesResponseBodyAccessRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessRules && typeof (this.accessRules as any).validate === 'function') {
      (this.accessRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

