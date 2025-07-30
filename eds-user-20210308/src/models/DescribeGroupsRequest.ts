// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  bizType?: string;
  /**
   * @example
   * ug-12341234****
   */
  groupId?: string;
  groupName?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * co-0esnf80jab***
   */
  solutionId?: string;
  transferFileNeedApproval?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      groupId: 'GroupId',
      groupName: 'GroupName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      solutionId: 'SolutionId',
      transferFileNeedApproval: 'TransferFileNeedApproval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      groupId: 'string',
      groupName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      solutionId: 'string',
      transferFileNeedApproval: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

