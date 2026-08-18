// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcePackageRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the resource plan.
   * 
   * @example
   * ****_ResourcePack-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The sorting field. Valid values:
   * - startTime: the effective period of the instance.
   * - endTime: the expiration time of the instance.
   * - StartTime: the effective period of the instance.
   * - EndTime: the expiration time of the instance.
   * - default: no sorting field.
   * 
   * @example
   * startTime
   */
  sortField?: string;
  /**
   * @remarks
   * The sorting rule. Default value: desc. Valid values:
   * - asc
   * - desc
   * 
   * @example
   * desc
   */
  sortRule?: string;
  /**
   * @remarks
   * The status of the resource plan. Default value: valid. Valid values:
   * - valid: Valid.
   * - invalid: Invalid.
   * - exhaust: Exhausted.
   * 
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      sortField: 'SortField',
      sortRule: 'SortRule',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      sortField: 'string',
      sortRule: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

