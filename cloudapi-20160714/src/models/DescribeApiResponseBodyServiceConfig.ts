// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiResponseBodyServiceConfigEventBridgeConfig } from "./DescribeApiResponseBodyServiceConfigEventBridgeConfig";
import { DescribeApiResponseBodyServiceConfigFunctionComputeConfig } from "./DescribeApiResponseBodyServiceConfigFunctionComputeConfig";
import { DescribeApiResponseBodyServiceConfigMockHeaders } from "./DescribeApiResponseBodyServiceConfigMockHeaders";
import { DescribeApiResponseBodyServiceConfigOssConfig } from "./DescribeApiResponseBodyServiceConfigOssConfig";
import { DescribeApiResponseBodyServiceConfigVpcConfig } from "./DescribeApiResponseBodyServiceConfigVpcConfig";


export class DescribeApiResponseBodyServiceConfig extends $dara.Model {
  /**
   * @remarks
   * The application name in AONE.
   * 
   * @example
   * ib-blank
   */
  aoneAppName?: string;
  /**
   * @remarks
   * The ContentType header type used when you call the backend service over HTTP.
   * 
   * *   **DEFAULT**: the default header type in API Gateway
   * *   **CUSTOM**: a custom header type
   * *   **CLIENT**: the ContentType header type of the client
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
   * application/x-www-form-urlencoded; charset=UTF-8
   */
  contentTypeValue?: string;
  /**
   * @remarks
   * Configuration items of EventBridge
   */
  eventBridgeConfig?: DescribeApiResponseBodyServiceConfigEventBridgeConfig;
  /**
   * @remarks
   * Backend configuration items when the backend service is Function Compute
   */
  functionComputeConfig?: DescribeApiResponseBodyServiceConfigFunctionComputeConfig;
  /**
   * @remarks
   * Specifies whether to enable the Mock mode. Valid values:
   * 
   * *   **TRUE**: The Mock mode is enabled.
   * *   **FALSE**: The Mock mode is not enabled.
   * 
   * @example
   * TRUE
   */
  mock?: string;
  /**
   * @remarks
   * The simulated headers.
   */
  mockHeaders?: DescribeApiResponseBodyServiceConfigMockHeaders;
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
   * The information returned when the backend service is Object Storage Service (OSS).
   */
  ossConfig?: DescribeApiResponseBodyServiceConfigOssConfig;
  /**
   * @remarks
   * The URL used to call the back-end service. If the complete back-end service URL is `http://api.a.com:8080/object/add?key1=value1&key2=value2`, the value of ServiceAddress is **http://api.a.com:8080**.``
   * 
   * @example
   * http://api.a.com:8080
   */
  serviceAddress?: string;
  /**
   * @remarks
   * The HTTP method used to call a backend service. Valid values: GET, POST, DELETE, PUT, HEADER, TRACE, PATCH, CONNECT, and OPTIONS.
   * 
   * @example
   * POST
   */
  serviceHttpMethod?: string;
  /**
   * @example
   * /object/add
   */
  servicePath?: string;
  /**
   * @remarks
   * The protocol used by the backend service. Valid values: HTTP and HTTPS.
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The timeout period of the backend service. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  serviceTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the VPC channel. Valid values:
   * 
   * *   **TRUE**: The VPC channel is enabled. You must create the corresponding VPC access authorization before you can enable a VPC channel.
   * *   **FALSE**: The VPC channel is not enabled.
   * 
   * @example
   * TRUE
   */
  serviceVpcEnable?: string;
  /**
   * @remarks
   * Configuration items related to VPC channels
   */
  vpcConfig?: DescribeApiResponseBodyServiceConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      aoneAppName: 'AoneAppName',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      aoneAppName: 'string',
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      eventBridgeConfig: DescribeApiResponseBodyServiceConfigEventBridgeConfig,
      functionComputeConfig: DescribeApiResponseBodyServiceConfigFunctionComputeConfig,
      mock: 'string',
      mockHeaders: DescribeApiResponseBodyServiceConfigMockHeaders,
      mockResult: 'string',
      mockStatusCode: 'number',
      ossConfig: DescribeApiResponseBodyServiceConfigOssConfig,
      serviceAddress: 'string',
      serviceHttpMethod: 'string',
      servicePath: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      vpcConfig: DescribeApiResponseBodyServiceConfigVpcConfig,
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

