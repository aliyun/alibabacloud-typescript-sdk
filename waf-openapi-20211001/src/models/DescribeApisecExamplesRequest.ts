// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecExamplesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of API security threat.
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
   * The ID of the Hybrid Cloud WAF cluster.
   * 
   * > This parameter is available only in hybrid cloud scenarios. Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query information about Hybrid Cloud WAF clusters.
   * 
   * @example
   * 176
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the example. Valid values:
   * 
   * - **sensitive**: sensitive data.
   * 
   * - **risk**: threat.
   * 
   * @example
   * sensitive
   */
  exampleType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqtm005
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 5. Default value: 5.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
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
   * The list of sensitive data types in requests.
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
   * The list of sensitive data types in responses.
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

