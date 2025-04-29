// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiResponseBodyServiceConfigFunctionComputeConfig extends $dara.Model {
  /**
   * @remarks
   * The ContentType header type used when you call the backend service over HTTP.
   * 
   * *   **DEFAULT**: the default header type in API Gateway
   * *   **CUSTOM**: a custom header type
   * *   **CLIENT**: the ContentType header type of the client
   * 
   * @example
   * DEFAULT
   */
  contentTypeCatagory?: string;
  /**
   * @remarks
   * The value of the ContentType header when the ContentTypeCatagory parameter is set to DEFAULT or CUSTOM.
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
   * https://1227****64334133.ap-southeast-1-int***al.fc.aliyuncs.com/201****-15/proxy/test****ice.LATEST/testHttp/
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
  fcVersion?: string;
  /**
   * @remarks
   * The function name defined in Function Compute.
   * 
   * @example
   * edge_function
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
   * The region where the Function Compute instance is located.
   * 
   * @example
   * cn-qingdao
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
  /**
   * @remarks
   * The name of the trigger.
   * 
   * You can specify the TriggerName or TriggerUrl parameter. The TriggerName parameter is optional.
   * 
   * @example
   * test1
   */
  triggerName?: string;
  static names(): { [key: string]: string } {
    return {
      contentTypeCatagory: 'ContentTypeCatagory',
      contentTypeValue: 'ContentTypeValue',
      fcBaseUrl: 'FcBaseUrl',
      fcType: 'FcType',
      fcVersion: 'FcVersion',
      functionName: 'FunctionName',
      method: 'Method',
      onlyBusinessPath: 'OnlyBusinessPath',
      path: 'Path',
      qualifier: 'Qualifier',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
      triggerName: 'TriggerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypeCatagory: 'string',
      contentTypeValue: 'string',
      fcBaseUrl: 'string',
      fcType: 'string',
      fcVersion: 'string',
      functionName: 'string',
      method: 'string',
      onlyBusinessPath: 'boolean',
      path: 'string',
      qualifier: 'string',
      regionId: 'string',
      roleArn: 'string',
      serviceName: 'string',
      triggerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

