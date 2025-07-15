// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisByVpcAccessResponseBodyApiVpcAccessInfosApiVpcAccessInfo extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * 09839002de484e76b5a213b040a6a3ca
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * iwc
   */
  apiName?: string;
  /**
   * @remarks
   * The description, which can be up to 200 characters in length.
   * 
   * @example
   * 123
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group to which the API belongs.
   * 
   * @example
   * 41c33748cbfb41f6b00870156203b72a
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group to which the API belongs.
   * 
   * @example
   * RT_PLU_IP_CTRL_group
   */
  groupName?: string;
  /**
   * @remarks
   * The instance ID or IP address in the VPC access authorization.
   * 
   * @example
   * Ib-04e41XXXXXd95e9c1
   */
  instanceId?: string;
  /**
   * @remarks
   * The HTTP request method of the API.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /api/v1/friends/rc/status
   */
  path?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * 57e17906a69b4424914fb1e05f67c78a
   */
  stageId?: string;
  /**
   * @remarks
   * The environment to which the API is published. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the staging environment
   * *   **TEST**: the test environment
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * vpc id
   * 
   * @example
   * vpc-2ze7bj64wstznvftrskbk
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC access authorization.
   * 
   * @example
   * aliYun_service_prod
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      method: 'Method',
      path: 'Path',
      port: 'Port',
      regionId: 'RegionId',
      stageId: 'StageId',
      stageName: 'StageName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
      method: 'string',
      path: 'string',
      port: 'number',
      regionId: 'string',
      stageId: 'string',
      stageName: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByVpcAccessResponseBodyApiVpcAccessInfos extends $dara.Model {
  apiVpcAccessInfo?: DescribeApisByVpcAccessResponseBodyApiVpcAccessInfosApiVpcAccessInfo[];
  static names(): { [key: string]: string } {
    return {
      apiVpcAccessInfo: 'ApiVpcAccessInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVpcAccessInfo: { 'type': 'array', 'itemType': DescribeApisByVpcAccessResponseBodyApiVpcAccessInfosApiVpcAccessInfo },
    };
  }

  validate() {
    if(Array.isArray(this.apiVpcAccessInfo)) {
      $dara.Model.validateArray(this.apiVpcAccessInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByVpcAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned API information. It is an array consisting of ApiInfo data.
   */
  apiVpcAccessInfos?: DescribeApisByVpcAccessResponseBodyApiVpcAccessInfos;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E707B25-5119-5ACF-9D26-7D2A2762F05C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiVpcAccessInfos: 'ApiVpcAccessInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVpcAccessInfos: DescribeApisByVpcAccessResponseBodyApiVpcAccessInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiVpcAccessInfos && typeof (this.apiVpcAccessInfos as any).validate === 'function') {
      (this.apiVpcAccessInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

