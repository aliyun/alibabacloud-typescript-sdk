// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationResponseBodyApplicationAlarmConfig } from "./GetApplicationResponseBodyApplicationAlarmConfig";


export class GetApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The configurations of application alerts.
   */
  alarmConfig?: GetApplicationResponseBodyApplicationAlarmConfig;
  /**
   * @remarks
   * The source of application.
   * 
   * @example
   * {"Platform":"gitee","Owner":"aliyun-computenest","RepoName":"aliyun-computenest/java-springboot-demo","Name":"java-springboot-demo"}
   */
  applicationSource?: string;
  /**
   * @remarks
   * The type of the application.
   * 
   * Valid values:
   * 
   * *   ComputeNest
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Custom
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DingTalk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * DingTalk
   */
  applicationType?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-07T09:17:46Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the Compute Nest service that corresponds to the application template.
   * 
   * @example
   * service-79538e30e44541b699d8
   */
  serviceId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2021-09-07T09:17:46Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfig: 'AlarmConfig',
      applicationSource: 'ApplicationSource',
      applicationType: 'ApplicationType',
      createDate: 'CreateDate',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: GetApplicationResponseBodyApplicationAlarmConfig,
      applicationSource: 'string',
      applicationType: 'string',
      createDate: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateDate: 'string',
    };
  }

  validate() {
    if(this.alarmConfig && typeof (this.alarmConfig as any).validate === 'function') {
      (this.alarmConfig as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

