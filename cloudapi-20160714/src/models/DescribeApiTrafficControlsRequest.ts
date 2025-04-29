// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiTrafficControlsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of APIs that you want to query. Separate multiple API IDs with commas (,). A maximum of 100 API IDs can be entered.
   * 
   * @example
   * 123,234
   */
  apiIds?: string;
  /**
   * @remarks
   * The ID of the API group that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 0009db9c828549768a200320714b8930
   */
  groupId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The runtime environment of the API. Valid values:
   * 
   * *   **RELEASE**
   * *   **TEST**: the test environment
   * 
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
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

