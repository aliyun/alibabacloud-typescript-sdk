// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig } from "./DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig";
import { DescribeDeployedApiResponseBodyServiceConfigMockHeaders } from "./DescribeDeployedApiResponseBodyServiceConfigMockHeaders";
import { DescribeDeployedApiResponseBodyServiceConfigVpcConfig } from "./DescribeDeployedApiResponseBodyServiceConfigVpcConfig";


export class DescribeDeployedApiResponseBodyServiceConfig extends $dara.Model {
  /**
   * @remarks
   * Backend configuration items when the backend service is Function Compute
   */
  functionComputeConfig?: DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig;
  /**
   * @remarks
   * Specifies whether to enable the Mock mode. Valid values:
   * 
   * *   **TRUE: The Mock mode is enabled.**
   * *   **FALSE: The Mock mode is not enabled.
   * 
   * @example
   * TRUE
   */
  mock?: string;
  /**
   * @remarks
   * The simulated Headers.
   */
  mockHeaders?: DescribeDeployedApiResponseBodyServiceConfigMockHeaders;
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
  vpcConfig?: DescribeDeployedApiResponseBodyServiceConfigVpcConfig;
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
      functionComputeConfig: 'FunctionComputeConfig',
      mock: 'Mock',
      mockHeaders: 'MockHeaders',
      mockResult: 'MockResult',
      mockStatusCode: 'MockStatusCode',
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
      functionComputeConfig: DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig,
      mock: 'string',
      mockHeaders: DescribeDeployedApiResponseBodyServiceConfigMockHeaders,
      mockResult: 'string',
      mockStatusCode: 'number',
      serviceAddress: 'string',
      serviceHttpMethod: 'string',
      servicePath: 'string',
      serviceProtocol: 'string',
      serviceTimeout: 'number',
      serviceVpcEnable: 'string',
      vpcConfig: DescribeDeployedApiResponseBodyServiceConfigVpcConfig,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.functionComputeConfig && typeof (this.functionComputeConfig as any).validate === 'function') {
      (this.functionComputeConfig as any).validate();
    }
    if(this.mockHeaders && typeof (this.mockHeaders as any).validate === 'function') {
      (this.mockHeaders as any).validate();
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

