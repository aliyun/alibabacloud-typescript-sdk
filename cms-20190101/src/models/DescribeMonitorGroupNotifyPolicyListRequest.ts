// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupNotifyPolicyListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 6780****
   */
  groupId?: string;
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
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the policy.
   * 
   * Valid value: PauseNotify.
   * 
   * This parameter is required.
   * 
   * @example
   * PauseNotify
   */
  policyType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

