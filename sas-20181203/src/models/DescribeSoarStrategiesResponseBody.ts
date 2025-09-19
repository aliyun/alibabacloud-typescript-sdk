// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarStrategiesResponseBodySoarStrategies extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator. Default value: 0. The value indicates a system user.
   * 
   * @example
   * 0
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
   * The timestamp when the policy was created. Unit: milliseconds.
   * 
   * @example
   * 1703556715000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The timestamp when the policy was modified. Unit: milliseconds.
   * 
   * @example
   * 1698114242000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 16064025
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

export class DescribeSoarStrategiesResponseBody extends $dara.Model {
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
   * 4BB99533-4FDC-5B9C-A5E4-5AE3E9BE5C78
   */
  requestId?: string;
  /**
   * @remarks
   * The policies.
   */
  soarStrategies?: DescribeSoarStrategiesResponseBodySoarStrategies[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
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
      soarStrategies: { 'type': 'array', 'itemType': DescribeSoarStrategiesResponseBodySoarStrategies },
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

