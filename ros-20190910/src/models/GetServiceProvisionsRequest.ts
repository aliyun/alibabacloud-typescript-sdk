// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceProvisionsRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter. If you do not specify the name and value of a parameter, Resource Orchestration Service (ROS) uses the default name and value that are specified in the template.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify ParameterKey.
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
   * > The Parameters parameter is optional. If you specify Parameters, you must specify ParameterValue.
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
   * The name of the service or feature. Valid values:
   * 
   * *   AHAS: Application High Availability Service
   * *   ARMS: Application Real-Time Monitoring Service (ARMS)
   * *   ApiGateway: API Gateway
   * *   BatchCompute: Batch Compute
   * *   BrainIndustrial: Industrial Brain
   * *   CloudStorageGateway: Cloud Storage Gateway (CSG)
   * *   CMS: CloudMonitor
   * *   CR: Container Registry
   * *   CS: Container Service for Kubernetes (ACK)
   * *   DCDN: Dynamic Content Delivery Network (DCDN)
   * *   DataHub: DataHub
   * *   DataWorks: DataWorks
   * *   EDAS: Enterprise Distributed Application Service (EDAS)
   * *   EHPC: E-HPC
   * *   EMAS: Enterprise Mobile Application Studio (EMAS)
   * *   FC: Function Compute
   * *   FNF: CloudFlow (SWF)
   * *   MaxCompute: MaxCompute
   * *   MNS: Message Service (MNS)
   * *   HBR: Cloud Backup
   * *   IMM: Intelligent Media Management (IMM)
   * *   IOT: IoT Platform
   * *   KMS: Key Management Service (KMS)
   * *   NAS: File Storage NAS (NAS)
   * *   NLP: Natural Language Processing (NLP)
   * *   OSS: Object Storage Service (OSS)
   * *   OTS: Tablestore
   * *   PrivateLink: PrivateLink
   * *   PrivateZone: Alibaba Cloud DNS PrivateZone
   * *   RocketMQ: ApsaraMQ for RocketMQ
   * *   SAE: Serverless App Engine (SAE)
   * *   SLS: Simple Log Service (SLS)
   * *   TrafficMirror: traffic mirroring
   * *   VS: Video Surveillance System
   * *   Xtrace: Managed Service for OpenTelemetry
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
   * The services.
   */
  services?: GetServiceProvisionsRequestServices[];
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and Services.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body must be 1 to 524,288 bytes in length. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and Services.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * This parameter takes effect only when TemplateId is specified.
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

