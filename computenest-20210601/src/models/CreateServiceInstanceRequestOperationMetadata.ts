// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceRequestOperationMetadata extends $dara.Model {
  /**
   * @remarks
   * The operation end time.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  endTime?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * ```json
   *   {
   *     "vncInfo": [
   *       {
   *         "instanceId": "i-001",
   *         "username": "admin",
   *         "password": "******",
   *         "vncPassword": "******"
   *       }
   *     ]
   *   }
   *   ```
   */
  extraInfo?: string;
  /**
   * @remarks
   * Imported resource.
   * 
   * @example
   * {   "RegionId": "cn-hangzhou",   "Type": "ResourceIds",   "ResourceIds": {     "ALIYUN::ECS::INSTANCE": ["i-xxx", "i-yyy"],     "ALIYUN::RDS::INSTANCE": ["rm-xxx", "rm-yyy"],     "ALIYUN::VPC::VPC": ["vpc-xxx", "vpc-yyy"],     "ALIYUN::SLB::INSTANCE": ["lb-xxx", "lb-yyy"]   } }
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The operation start time.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extraInfo: 'ExtraInfo',
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      extraInfo: 'string',
      resources: 'string',
      serviceInstanceId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

