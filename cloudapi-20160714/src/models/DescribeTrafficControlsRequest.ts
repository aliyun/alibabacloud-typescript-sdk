// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficControlsRequest extends $dara.Model {
  /**
   * @remarks
   * The specified API ID. This parameter must be specified together with GroupId and StageName.
   * 
   * @example
   * 3b81fd160f5645e097cc8855d75a1cf6
   */
  apiId?: string;
  /**
   * @remarks
   * The specified group ID. This parameter must be specified together with ApiId and StageName.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The security token included in the WebSocket request header. The system uses this token to authenticate the request.
   * 
   * @example
   * 436fa39b-b3b9-40c5-ae5d-ce3e000e38c5
   */
  securityToken?: string;
  /**
   * @remarks
   * The environment name. This parameter must be specified together with GroupId and ApiId. Valid values:********
   * 
   * *   **RELEASE**
   * *   **TEST**
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * The ID of the throttling policy.
   * 
   * @example
   * tf123456
   */
  trafficControlId?: string;
  /**
   * @remarks
   * The name of the throttling policy.
   * 
   * @example
   * ThrottlingTest
   */
  trafficControlName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
      trafficControlId: 'string',
      trafficControlName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

