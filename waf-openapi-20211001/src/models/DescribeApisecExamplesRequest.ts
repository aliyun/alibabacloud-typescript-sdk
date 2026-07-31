// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecExamplesRequest extends $dara.Model {
  /**
   * @remarks
   * The risk type.
   * 
   * @example
   * LackOfSpeedLimit
   */
  abnormalTag?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 867ade***24ee6e205b8da82b8f84
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter applies only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query hybrid cloud cluster information.
   * 
   * @example
   * 176
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the sample.
   * 
   * @example
   * sensitive
   */
  exampleType?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqtm005
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 5. Default value: 5. This parameter is used for paging.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of request sensitive information types.
   */
  requestSensitiveTypeList?: string[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The list of response sensitive information types.
   */
  responseSensitiveTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      abnormalTag: 'AbnormalTag',
      apiId: 'ApiId',
      clusterId: 'ClusterId',
      exampleType: 'ExampleType',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      requestSensitiveTypeList: 'RequestSensitiveTypeList',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      responseSensitiveTypeList: 'ResponseSensitiveTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalTag: 'string',
      apiId: 'string',
      clusterId: 'string',
      exampleType: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      requestSensitiveTypeList: { 'type': 'array', 'itemType': 'string' },
      resourceManagerResourceGroupId: 'string',
      responseSensitiveTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.requestSensitiveTypeList)) {
      $dara.Model.validateArray(this.requestSensitiveTypeList);
    }
    if(Array.isArray(this.responseSensitiveTypeList)) {
      $dara.Model.validateArray(this.responseSensitiveTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

