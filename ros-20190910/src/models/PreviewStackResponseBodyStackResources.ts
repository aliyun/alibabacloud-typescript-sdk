// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewStackResponseBodyStackResources extends $dara.Model {
  /**
   * @remarks
   * The resource type of an Alibaba Cloud service.
   * 
   * @example
   * ACS::ECS::Instance
   */
  acsResourceType?: string;
  /**
   * @remarks
   * The action that is performed on the resource. Valid values:
   * 
   * *   Add
   * *   Modify
   * *   Remove
   * *   None
   * 
   * @example
   * Add
   */
  action?: string;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * ECS instance.
   */
  description?: string;
  /**
   * @remarks
   * The logical ID of the resource.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * This parameter is returned only if Action is set to Modify or Remove.
   * 
   * @example
   * i-a1b2c3***
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The resource properties.
   * 
   * @example
   * {   "DiskMappings": [     {       "Category": "cloud_ssd",       "Size": "20"     }   ],   "SystemDisk_Category": "cloud_ssd",   "InstanceChargeType": "PostPaid",   "AutoRenew": "False",   "WillReplace": true,   "ImageId": "centos_7",   "InstanceType": "ecs.g6.large",   "AllocatePublicIP": true,   "AutoRenewPeriod": 1,   "IoOptimized": "optimized",   "ZoneId": "cn-beijing-g",   "VSwitchId": "",   "SecurityGroupId": "",   "Period": 1,   "InternetChargeType": "PayByTraffic",   "SystemDiskCategory": "cloud_efficiency",   "InternetMaxBandwidthOut": 1,   "VpcId": "",   "InternetMaxBandwidthIn": 200,   "PeriodUnit": "Month" }
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether a replacement update is performed on the template. Valid values:
   * 
   * *   True: A replacement update is performed on the template.
   * *   False: A change is made on the template.
   * *   Conditional: A replacement update may be performed on the template. You can check whether a replacement update is performed when the template is in use.
   * 
   * > This parameter is returned only if Action is set to Modify.
   * 
   * @example
   * False
   */
  replacement?: string;
  /**
   * @remarks
   * The resources on which the stack depends.
   */
  requiredBy?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The information about the nested stack. The data structure of the value is the same as the data structure of the entire response.
   * 
   * @example
   * {}
   */
  stack?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      acsResourceType: 'AcsResourceType',
      action: 'Action',
      description: 'Description',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      properties: 'Properties',
      replacement: 'Replacement',
      requiredBy: 'RequiredBy',
      resourceType: 'ResourceType',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsResourceType: 'string',
      action: 'string',
      description: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      replacement: 'string',
      requiredBy: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      stack: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(Array.isArray(this.requiredBy)) {
      $dara.Model.validateArray(this.requiredBy);
    }
    if(this.stack) {
      $dara.Model.validateMap(this.stack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

