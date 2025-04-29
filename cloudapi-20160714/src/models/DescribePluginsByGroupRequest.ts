// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginsByGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Group ID
   * 
   * This parameter is required.
   * 
   * @example
   * 08ae4aa0f95e4321849ee57f4e0b3077
   */
  groupId?: string;
  /**
   * @remarks
   * Pagination parameter: current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Pagination parameter: number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * Specifies the environment of the API to operate on.
   * 
   * - **RELEASE**: Production
   * - **PRE**: Pre-release
   * - **TEST**: Test
   * 
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

