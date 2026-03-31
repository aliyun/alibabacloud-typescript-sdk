// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecExamplesRequest extends $dara.Model {
  /**
   * @example
   * LackOfSpeedLimit
   */
  abnormalTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 867ade***24ee6e205b8da82b8f84
   */
  apiId?: string;
  /**
   * @example
   * 176
   */
  clusterId?: string;
  /**
   * @example
   * sensitive
   */
  exampleType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqtm005
   */
  instanceId?: string;
  /**
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  requestSensitiveTypeList?: string[];
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * LackOfSpeedLimit
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

