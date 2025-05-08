// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * *   Pages start from page 1.
   * *   Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Maximum value: 50.
   * *   Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp67acfmxazb4ph***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the security group.
   * 
   * @example
   * DocTest
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

