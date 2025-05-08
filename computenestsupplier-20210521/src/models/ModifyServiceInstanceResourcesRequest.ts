// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyServiceInstanceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The imported resources.
   * 
   * @example
   * {
   *   "RegionId": "cn-hangzhou",
   *   "Type": "ResourceIds",
   *   "ResourceIds": {
   *     "ALIYUN::ECS::INSTANCE": ["i-xxx", "i-yyy"],
   *     "ALIYUN::RDS::INSTANCE": ["rm-xxx", "rm-yyy"],
   *     "ALIYUN::VPC::VPC": ["vpc-xxx", "vpc-yyy"],
   *     "ALIYUN::SLB::INSTANCE": ["lb-xxx", "lb-yyy"]
   *   }
   * }
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d8a0cc2a1ee04dce****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of operation performed on the service instance resource. Valid values:
   * 
   * *   Import: The resource is imported.
   * *   UnImport: The resource import is canceled.
   * 
   * @example
   * Import
   */
  serviceInstanceResourcesAction?: string;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
      serviceInstanceResourcesAction: 'ServiceInstanceResourcesAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: 'string',
      serviceInstanceId: 'string',
      serviceInstanceResourcesAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

