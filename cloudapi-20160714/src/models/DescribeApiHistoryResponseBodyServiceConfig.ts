// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiHistoryResponseBodyServiceConfigEventBridgeConfig } from "./DescribeApiHistoryResponseBodyServiceConfigEventBridgeConfig";
import { DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig } from "./DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig";
import { DescribeApiHistoryResponseBodyServiceConfigMockHeaders } from "./DescribeApiHistoryResponseBodyServiceConfigMockHeaders";
import { DescribeApiHistoryResponseBodyServiceConfigOssConfig } from "./DescribeApiHistoryResponseBodyServiceConfigOssConfig";
import { DescribeApiHistoryResponseBodyServiceConfigVpcConfig } from "./DescribeApiHistoryResponseBodyServiceConfigVpcConfig";


export class DescribeApiHistoryResponseBodyServiceConfig extends $dara.Model {
  /**
   * @remarks
   * The ContentType header type used when you call the backend service over HTTP.
   * 
   * *   DEFAULT: the default header type in API Gateway
   * *   CUSTOM: a custom header type
   * *   CLIENT: the ContentType header type of the client
   * 
   * @example
   * CUSTOM
   */
  contentTypeCatagory?: string;
  /**
   * @remarks
   * The value of the ContentType header when the ServiceProtocol parameter is set to HTTP and the ContentTypeCatagory parameter is set to DEFAULT or CUSTOM.
   * 
   * @example
   * application/json
   */
  contentTypeValue?: string;
  /**
   * @remarks
   * Configuration items of EventBridge
   */
  eventBridgeConfig?: DescribeApiHistoryResponseBodyServiceConfigEventBridgeConfig;
  /**
   * @remarks
   * Backend configuration items when the backend service is Function Compute
   */
  functionComputeConfig?: DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig;
  /**
   * @remarks
   * Specifies whether to enable the MOCK mode. Valid values:
   * 
   * *   TRUE: The Mock mode is enabled.
   * *   FALSE: The Mock mode is not enabled.
   * 
   * @example
   * TRUE
   */
  mock?: string;
  /**
   * @remarks
   * The simulated Headers.
   */
  mockHeaders?: DescribeApiHistoryResponseBodyServiceConfigMockHeaders;
  /**
   * @remarks
   * The result returned when the Mock mode is enabled.
   * 
   * @example
   * test result
   */
  mockResult?: string;
  /**
   * @remarks
   * The status code returned for service mocking.
   * 
   * @example
   * 200
   */
  mockStatusCode?: number;
  /**
   * @remarks
   * Information when the backend service is OSS
   */
  ossConfig?: DescribeApiHistoryResponseBodyServiceConfigOssConfig;
  /**
   * @remarks
   * The URL used to call the backend service.
   * 
   * @example
   * http://api.a.com:8080
   */
  serviceAddress?: string;
  /**
   * @remarks
   * The HTTP request method used when calling the backend service. Valid values: PUT, GET, POST, DELETE, PATCH, HEAD, OPTIONS, and ANY.
   * 
   * @example
   * POST
   */
  serviceHttpMethod?: string;
  /**
   * @remarks
   * The path used when you call the backend service.
   * 
   * @example
   * /object/add
   */
  servicePath?: string;
  /**
   * @remarks
   * The backend service protocol. Currently, only HTTP, HTTPS, and FunctionCompute are supported.
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The timeout period of the backend service, in millisecond.
   * 
   * @example
   * 1000
   */
  serviceTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the VPC channel. Valid values:
   * 
   * *   TRUE: The VPC channel is enabled.
   * *   FALSE: The VPC channel is not enabled.
   * 
   * You must create the corresponding VPC access authorization before you can enable a VPC channel.
   * 
   * @example
   * TRUE
   */
  serviceVpcEnable?: string;
  /**
   * @remarks
   * Configuration items related to VPC channels
   */
  vpcConfig?: DescribeApiHistoryResponseBodyServiceConfigVpcConfig;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf6kg9x8sx2tbxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      eventBridgeConfig: 'EventBridgeConfig',
      functionComputeConfig: 'FunctionComputeConfig',
      mock: 'Mock',
      mockHeaders: 'MockHeaders',
      mockResult: 'MockResult',
      mockStatusCode: 'MockStatusCode',
      ossConfig: 'OssConfig',
      serviceAddress: 'ServiceAddress',
      serviceHttpMethod: 'ServiceHttpMethod',
      servicePath: 'ServicePath',
      serviceProtocol: 'ServiceProtocol',
      serviceTimeout: 'ServiceTimeout',
      serviceVpcEnable: 'ServiceVpcEnable',
      vpcConfig: 'VpcConfig',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      eventBridgeConfig: DescribeApiHistoryResponseBodyServiceConfigEventBridgeConfig,
      functionComputeConfig: DescribeApiHistoryResponseBodyServiceConfigFunctionComputeConfig,
      mock: 'string',
      mockHeaders: DescribeApiHistoryResponseBodyServiceConfigMockHeaders,
      mockResult: 'string',
      mockStatusCode: 'number',
      ossConfig: DescribeApiHistoryResponseBodyServiceConfigOssConfig,
      serviceAddress: 'string',
      serviceHttpMethod: 'string',
      servicePath: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      vpcConfig: DescribeApiHistoryResponseBodyServiceConfigVpcConfig,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.eventBridgeConfig && typeof (this.eventBridgeConfig as any).validate === 'function') {
      (this.eventBridgeConfig as any).validate();
    }
    if(this.functionComputeConfig && typeof (this.functionComputeConfig as any).validate === 'function') {
      (this.functionComputeConfig as any).validate();
    }
    if(this.mockHeaders && typeof (this.mockHeaders as any).validate === 'function') {
      (this.mockHeaders as any).validate();
    }
    if(this.ossConfig && typeof (this.ossConfig as any).validate === 'function') {
      (this.ossConfig as any).validate();
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

