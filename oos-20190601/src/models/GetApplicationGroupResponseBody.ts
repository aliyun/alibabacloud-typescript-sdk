// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationGroupResponseBodyApplicationGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The source of application.
   * 
   * @example
   * {"Platform":"github","RepoName":"wenle/springboot-ecs-sourcecode-demo","Owner":"wenle","Branch":"main","CommitHash":"8559ff3ac7568fc7951ff63f841883ee3f06c6fe","CommitMessage":"Init computenest project"}
   */
  applicationSource?: string;
  /**
   * @remarks
   * The ID of the application group in CloudMonitor.
   * 
   * @example
   * 12345678
   */
  cmsGroupId?: string;
  /**
   * @remarks
   * The time when the application group was created.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  createDate?: string;
  /**
   * @remarks
   * The output of the deployment result.
   * 
   * @example
   * {       "Outputs": [         {           "Description": "No description given",           "OutputKey": "InstanceIds"         }       ],       "StackId": "6ef4b860-f6e7-4145-8d22-f4a2a32363e1"     }   }
   */
  deployOutputs?: string;
  /**
   * @remarks
   * The configuration information of the application group.
   * 
   * @example
   * {       "TemplateURL": "https://ros-template.oss-cn-zhangjiakou.aliyuncs.com/App_Management_Existing_Vpc_Ecs_Instance.json",       "Parameters": {         "ZoneId": "cn-hangzhou-k",         "ProjectName": "test",         "SystemDiskSize": 40,         "InstanceChargeType": "PostPaid",         "SecurityGroupId": "sg-bp1a4374akk63jl8tddy",         "VSwitchId": "vsw-bp1fcvc3zn0jrag86rrlm",         "SystemDiskCategory": "cloud_essd",         "InstancePassword": "******",         "InternetChargeType": "PayByTraffic",         "InstanceCount": 1,         "InternetMaxBandwidthOut": 0,         "VpcId": "vpc-bp1i99boyas8i8m9t3skp",         "EcsImageId": "centos_8_5_x64_20G_alibase_20211228.vhd",         "DataDiskSize": 100,         "EcsInstanceType": "ecs.s6-c1m4.small",         "DataDiskCategory": "cloud_efficiency",         "EnvironmentCommandId": "c-hz028fc3g031gcg"       }
   */
  deployParameters?: string;
  /**
   * @remarks
   * The ID of the region in which you deploy the application group.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  deployedRevisionIds?: string;
  /**
   * @remarks
   * The description of the application group.
   * 
   * @example
   * ApplicationGroup
   */
  description?: string;
  errorDetail?: string;
  errorType?: string;
  executionId?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  importTagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  importTagValue?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * {\\\\"PrometheusConfigMap\\\\":{\\\\"Template 1\\\\":{\\\\"EnablePrometheus\\\\":false}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The creation progress of the application instance.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The state of the application group.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The state information of the application group.
   * 
   * @example
   * Stack CREATE completed successfully
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the application group was last modified.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      applicationSource: 'ApplicationSource',
      cmsGroupId: 'CmsGroupId',
      createDate: 'CreateDate',
      deployOutputs: 'DeployOutputs',
      deployParameters: 'DeployParameters',
      deployRegionId: 'DeployRegionId',
      deployedRevisionIds: 'DeployedRevisionIds',
      description: 'Description',
      errorDetail: 'ErrorDetail',
      errorType: 'ErrorType',
      executionId: 'ExecutionId',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      operationMetadata: 'OperationMetadata',
      progress: 'Progress',
      status: 'Status',
      statusReason: 'StatusReason',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      applicationSource: 'string',
      cmsGroupId: 'string',
      createDate: 'string',
      deployOutputs: 'string',
      deployParameters: 'string',
      deployRegionId: 'string',
      deployedRevisionIds: 'string',
      description: 'string',
      errorDetail: 'string',
      errorType: 'string',
      executionId: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      operationMetadata: 'string',
      progress: 'string',
      status: 'string',
      statusReason: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application group.
   */
  applicationGroup?: GetApplicationGroupResponseBodyApplicationGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 92EA60ED-544D-55E9-93D9-237BE9976C0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroup: 'ApplicationGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroup: GetApplicationGroupResponseBodyApplicationGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationGroup && typeof (this.applicationGroup as any).validate === 'function') {
      (this.applicationGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

