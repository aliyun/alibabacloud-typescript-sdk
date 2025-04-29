// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig extends $dara.Model {
  /**
   * @remarks
   * The root path of the Function Compute service.
   * 
   * @example
   * https://t*******.ap-*****.fcapp.run/
   */
  fcBaseUrl?: string;
  /**
   * @remarks
   * The region ID of the Function Compute service.
   * 
   * @example
   * cn-hangzhou
   */
  fcRegionId?: string;
  /**
   * @remarks
   * The type of the service in Function Compute.
   * 
   * @example
   * HttpTrigger
   */
  fcType?: string;
  /**
   * @remarks
   * The function name that is defined in Function Compute.
   * 
   * @example
   * edge_function
   */
  functionName?: string;
  /**
   * @remarks
   * Indicates whether the backend service receives only the service path.
   * 
   * @example
   * false
   */
  onlyBusinessPath?: boolean;
  /**
   * @remarks
   * The alias of the function.
   * 
   * @example
   * testQualifier
   */
  qualifier?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that is assumed by API Gateway to access Function Compute.
   * 
   * @example
   * acs:ram::31985*:role/aliyunserviceroleforbastionhostpam
   */
  roleArn?: string;
  /**
   * @remarks
   * The service name that is defined in Function Compute.
   * 
   * @example
   * myservice
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
      fcBaseUrl: 'FcBaseUrl',
      fcRegionId: 'FcRegionId',
      fcType: 'FcType',
      functionName: 'FunctionName',
      onlyBusinessPath: 'OnlyBusinessPath',
      qualifier: 'Qualifier',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
      triggerName: 'TriggerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcBaseUrl: 'string',
      fcRegionId: 'string',
      fcType: 'string',
      functionName: 'string',
      onlyBusinessPath: 'boolean',
      qualifier: 'string',
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

