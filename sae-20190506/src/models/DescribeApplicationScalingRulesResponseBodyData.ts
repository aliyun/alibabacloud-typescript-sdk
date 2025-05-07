// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules } from "./DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules";


export class DescribeApplicationScalingRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The auto scaling policies of the application.
   */
  applicationScalingRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules[];
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of auto scaling policies.
   * 
   * @example
   * 3
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationScalingRules: 'ApplicationScalingRules',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationScalingRules: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationScalingRules)) {
      $dara.Model.validateArray(this.applicationScalingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

