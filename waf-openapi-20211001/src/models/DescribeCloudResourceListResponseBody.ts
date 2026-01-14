// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceListResponseBodyCloudResourceList extends $dara.Model {
  /**
   * @example
   * i-8vbdlsd********81e22-80-ecs
   */
  cloudResourceId?: string;
  /**
   * @example
   * 80
   */
  port?: number;
  /**
   * @example
   * http
   */
  protocol?: string;
  /**
   * @example
   * i-8vbdlsd********81e22
   */
  resourceInstanceId?: string;
  /**
   * @example
   * rg-aek2uo2****lbka
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * ecs
   */
  resourceProduct?: string;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResourceId: 'CloudResourceId',
      port: 'Port',
      protocol: 'Protocol',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceId: 'string',
      port: 'number',
      protocol: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceListResponseBody extends $dara.Model {
  cloudResourceList?: DescribeCloudResourceListResponseBodyCloudResourceList[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
   */
  requestId?: string;
  /**
   * @example
   * 118
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudResourceList: 'CloudResourceList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceList: { 'type': 'array', 'itemType': DescribeCloudResourceListResponseBodyCloudResourceList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudResourceList)) {
      $dara.Model.validateArray(this.cloudResourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

