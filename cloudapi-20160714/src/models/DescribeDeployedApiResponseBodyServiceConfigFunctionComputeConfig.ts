// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApiResponseBodyServiceConfigFunctionComputeConfig extends $dara.Model {
  /**
   * @remarks
   * The ContentType header type used when you call the backend service over HTTP.
   * 
   * *   **DEFAULT: the default header type in API Gateway.**
   * *   **CUSTOM: a custom header type.**
   * *   **CLIENT: the ContentType header type of the client.
   * 
   * @example
   * DEFAULT
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
   * The root path of Function Compute.
   * 
   * @example
   * https://122xxxxxxx.fc.aliyun.com/2016xxxx/proxy/testSxxx.xxx/testHttp/
   */
  fcBaseUrl?: string;
  /**
   * @remarks
   * The type of the Function Compute instance.
   * 
   * @example
   * HttpTrigger
   */
  fcType?: string;
  /**
   * @remarks
   * The function name defined in Function Compute.
   * 
   * @example
   * domain_business_control
   */
  functionName?: string;
  /**
   * @remarks
   * The request method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The backend only receives the service path.
   * 
   * @example
   * false
   */
  onlyBusinessPath?: boolean;
  /**
   * @remarks
   * The API request path.
   * 
   * @example
   * /api/offline/cacheData
   */
  path?: string;
  /**
   * @remarks
   * The alias of the function.
   * 
   * @example
   * 2
   */
  qualifier?: string;
  /**
   * @remarks
   * The region where the API is located.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role to be assumed by API Gateway to access Function Compute.
   * 
   * @example
   * acs:ram::111***:role/aliyunserviceroleforsas
   */
  roleArn?: string;
  /**
   * @remarks
   * The service name defined in Function Compute.
   * 
   * @example
   * fcservicename
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      fcBaseUrl: 'FcBaseUrl',
      fcType: 'FcType',
      functionName: 'FunctionName',
      method: 'Method',
      onlyBusinessPath: 'OnlyBusinessPath',
      path: 'Path',
      qualifier: 'Qualifier',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      fcBaseUrl: 'string',
      fcType: 'string',
      functionName: 'string',
      method: 'string',
      onlyBusinessPath: 'boolean',
      path: 'string',
      qualifier: 'string',
      regionId: 'string',
      roleArn: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

