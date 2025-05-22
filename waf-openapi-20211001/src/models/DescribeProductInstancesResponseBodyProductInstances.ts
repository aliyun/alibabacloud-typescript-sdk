// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProductInstancesResponseBodyProductInstancesAccessPortAndProtocols } from "./DescribeProductInstancesResponseBodyProductInstancesAccessPortAndProtocols";
import { DescribeProductInstancesResponseBodyProductInstancesResourcePorts } from "./DescribeProductInstancesResponseBodyProductInstancesResourcePorts";


export class DescribeProductInstancesResponseBodyProductInstances extends $dara.Model {
  accessInstanceId?: string;
  accessPortAndProtocols?: DescribeProductInstancesResponseBodyProductInstancesAccessPortAndProtocols[];
  accessPorts?: number[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 1704********9107
   */
  ownerUserId?: string;
  resourceInstanceAccessStatus?: string;
  resourceInstanceEdition?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-2ze1tm4pvghp****cluv
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The IP address of the instance that is added to WAF.
   * 
   * @example
   * 1.X.X.1
   */
  resourceInstanceIp?: string;
  /**
   * @remarks
   * The name of the instance that is added to WAF.
   * 
   * @example
   * demoInstanceName
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 1.X.X.1
   * 
   * @deprecated
   */
  resourceIp?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ecs-test
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The information about the ports.
   */
  resourcePorts?: DescribeProductInstancesResponseBodyProductInstancesResourcePorts[];
  /**
   * @remarks
   * The cloud service to which the instance belongs. Valid values:
   * 
   * *   **clb4**: Layer 4 CLB.
   * *   **clb7**: Layer 7 CLB.
   * *   **ecs**: ECS.
   * 
   * @example
   * clb4
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The region ID of the instance. Valid values:
   * 
   * *   **cn-chengdu**: China (Chengdu).
   * *   **cn-beijing**: China (Beijing).
   * *   **cn-zhangjiakou**: China (Zhangjiakou).
   * *   **cn-hangzhou**: China (Hangzhou).
   * *   **cn-shanghai**: China (Shanghai).
   * *   **cn-shenzhen**: China (Shenzhen).
   * *   **cn-qingdao**: China (Qingdao).
   * *   **cn-hongkong**: China (Hong Kong).
   * *   **ap-southeast-3**: Malaysia (Kuala Lumpur).
   * *   **ap-southeast-5**: Indonesia (Jakarta).
   * 
   * @example
   * cn-beijing
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceId: 'AccessInstanceId',
      accessPortAndProtocols: 'AccessPortAndProtocols',
      accessPorts: 'AccessPorts',
      ownerUserId: 'OwnerUserId',
      resourceInstanceAccessStatus: 'ResourceInstanceAccessStatus',
      resourceInstanceEdition: 'ResourceInstanceEdition',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceIp: 'ResourceInstanceIp',
      resourceInstanceName: 'ResourceInstanceName',
      resourceIp: 'ResourceIp',
      resourceName: 'ResourceName',
      resourcePorts: 'ResourcePorts',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceId: 'string',
      accessPortAndProtocols: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstancesAccessPortAndProtocols },
      accessPorts: { 'type': 'array', 'itemType': 'number' },
      ownerUserId: 'string',
      resourceInstanceAccessStatus: 'string',
      resourceInstanceEdition: 'string',
      resourceInstanceId: 'string',
      resourceInstanceIp: 'string',
      resourceInstanceName: 'string',
      resourceIp: 'string',
      resourceName: 'string',
      resourcePorts: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstancesResourcePorts },
      resourceProduct: 'string',
      resourceRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessPortAndProtocols)) {
      $dara.Model.validateArray(this.accessPortAndProtocols);
    }
    if(Array.isArray(this.accessPorts)) {
      $dara.Model.validateArray(this.accessPorts);
    }
    if(Array.isArray(this.resourcePorts)) {
      $dara.Model.validateArray(this.resourcePorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

