// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarSubscribedStrategyResponseBodySoarStrategies extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 1276085*****4392
   */
  creator?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * strategy_description_01
   */
  description?: string;
  /**
   * @remarks
   * The total number of times that the policy is executed.
   * 
   * @example
   * 10
   */
  executeNum?: string;
  /**
   * @remarks
   * The timestamp when the policy was created. Unit: milliseconds.
   * 
   * @example
   * 1716344106000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The timestamp when the policy was modified. Unit: milliseconds.
   * 
   * @example
   * 1652672104000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 300063
   */
  id?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * strategy_name01
   */
  name?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   runmode_TRIGGER_BY_USER: manually executed
   * 
   * @example
   * runmode_TRIGGER_BY_USER
   */
  runMode?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   type_vulfix: vulnerability operations
   * 
   * @example
   * type_vulfix
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      description: 'Description',
      executeNum: 'ExecuteNum',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      runMode: 'RunMode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      description: 'string',
      executeNum: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      name: 'string',
      runMode: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarSubscribedStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF46038
   */
  requestId?: string;
  /**
   * @remarks
   * The policies.
   */
  soarStrategies?: DescribeSoarSubscribedStrategyResponseBodySoarStrategies[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 101
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      soarStrategies: 'SoarStrategies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      soarStrategies: { 'type': 'array', 'itemType': DescribeSoarSubscribedStrategyResponseBodySoarStrategies },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.soarStrategies)) {
      $dara.Model.validateArray(this.soarStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

