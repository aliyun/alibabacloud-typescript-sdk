// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceProvisionsRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter. If you do not specify the name and value of a parameter, Resource Orchestration Service (ROS) uses the default name and value that are specified in the template.
   * 
   * > Parameters is optional. If you specify Parameters, you must specify ParameterKey.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * > Parameters is optional. If you specify Parameters, you must specify ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsRequestServices extends $dara.Model {
  /**
   * @remarks
   * The name of the Alibaba Cloud service. Valid values:
   * 
   * - AHAS: Application High Availability Service.
   * 
   * - ARMS: Application Real-Time Monitoring Service.
   * 
   * - ApiGateway: API Gateway.
   * 
   * - BatchCompute: Batch Compute.
   * 
   * - BrainIndustrial: Industrial Intelligence.
   * 
   * - CloudStorageGateway: Cloud Storage Gateway.
   * 
   * - CMS: Cloud Monitor.
   * 
   * - CR: Container Registry.
   * 
   * - CS: Container Service.
   * 
   * - DCDN: DCDN.
   * 
   * - DataHub: DataHub.
   * 
   * - DataWorks: DataWorks.
   * 
   * - EDAS: Enterprise Distributed Application Service.
   * 
   * - EHPC: Elastic High Performance Computing.
   * 
   * - EMAS: Enterprise Mobile Application Studio.
   * 
   * - FC: Function Compute.
   * 
   * - FNF: CloudFlow.
   * 
   * - MaxCompute: MaxCompute.
   * 
   * - SMQ: Simple Message Queue (formerly MNS).
   * 
   * - HBR: Cloud Backup.
   * 
   * - IMM: Intelligent Media Management.
   * 
   * - IOT: IoT Platform.
   * 
   * - KMS: Key Management Service.
   * 
   * - NAS: File Storage NAS.
   * 
   * - NLP: Natural Language Processing.
   * 
   * - OSS: Object Storage Service.
   * 
   * - OTS: Tablestore.
   * 
   * - PrivateLink: PrivateLink.
   * 
   * - PrivateZone: PrivateZone.
   * 
   * - RocketMQ: Message Queue for Apache RocketMQ.
   * 
   * - SAE: Serverless App Engine.
   * 
   * - SLS: Simple Log Service.
   * 
   * - TrafficMirror: Traffic Mirroring.
   * 
   * - VS: Video Surveillance.
   * 
   * - Xtrace: Tracing Analysis.
   * 
   * This parameter is required.
   * 
   * @example
   * EHPC
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetServiceProvisionsRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters.
   */
  parameters?: GetServiceProvisionsRequestParameters[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of Alibaba Cloud services.
   */
  services?: GetServiceProvisionsRequestServices[];
  /**
   * @remarks
   * The structure of the template body. The template body must be 1 to 524,288 bytes in length. If the length of the template body exceeds the upper limit, we recommend to use the HTTP POST + Body Param method to pass the parameter in the request body to avoid request failures caused by an excessively long URL.
   * 
   * > You can specify only one of the TemplateBody, TemplateURL, TemplateId, and Services parameters.
   * 
   * @example
   * ROSTemplateFormatVersion: \\"2015-09-01\\"\\r\\nResources:\\r\\n  Vpc:\\r\\n    Type: ALIYUN::ECS::VPC\\r\\n    Properties:\\r\\n      CidrBlock: 192.168.0.0/24\\r\\n      VpcName: TestVpc
   */
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * You can specify only one of the TemplateBody, TemplateURL, TemplateId, and Services parameters.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket. The template body must be 1 to 524,288 bytes in length. Examples of OSS URLs: oss\\://ros/template/demo and oss\\://ros/template/demo?RegionId=cn-hangzhou. If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * You can specify only one of the TemplateBody, TemplateURL, TemplateId, and Services parameters.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * This parameter takes effect only when you specify TemplateId.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      regionId: 'RegionId',
      services: 'Services',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': GetServiceProvisionsRequestParameters },
      regionId: 'string',
      services: { 'type': 'array', 'itemType': GetServiceProvisionsRequestServices },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

