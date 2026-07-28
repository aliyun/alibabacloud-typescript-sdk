// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEapDeviceResourceAllocationResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Total number of devices
   * 
   * @example
   * 3
   */
  deviceCount?: number;
  /**
   * @remarks
   * Total ACU count for the Ray Cluster Head of the Embodied Intelligence platform
   * 
   * @example
   * 2.0
   */
  headAcu?: number;
  /**
   * @remarks
   * Number of vCPU cores for the Ray Cluster Head node on the Intelligent Embodiment platform
   * 
   * @example
   * 2
   */
  headCpu?: number;
  /**
   * @remarks
   * Ray Cluster Head specification of the Embodied Intelligence platform
   * 
   * @example
   * "medium"
   */
  headSpecName?: string;
  /**
   * @remarks
   * Total number of ACUs actually deployed on the Intelligent Embodiment platform
   * 
   * @example
   * 26
   */
  totalAcu?: number;
  /**
   * @remarks
   * Total number of vCPU cores actually deployed on the Intelligent Embodiment platform
   * 
   * @example
   * 26
   */
  totalDeployedCpu?: number;
  /**
   * @remarks
   * Total target number of vCPU cores
   * 
   * @example
   * 24
   */
  totalTargetCpu?: number;
  /**
   * @remarks
   * Total ACU count for the Embodied Intelligence platform
   * 
   * @example
   * 8.0
   */
  webserverAcu?: number;
  /**
   * @remarks
   * Total number of vCPU cores for the Embodied Intelligence platform
   * 
   * @example
   * 8
   */
  webserverCpu?: number;
  /**
   * @remarks
   * Webserver specification of the Embodied Intelligence platform.
   * 
   * @example
   * "xlarge"
   */
  webserverSpecName?: string;
  /**
   * @remarks
   * Total ACU count per Ray Cluster Worker of the Embodied Intelligence platform
   * 
   * @example
   * 16.0
   */
  workerAcu?: number;
  /**
   * @remarks
   * Total number of Ray Cluster Worker nodes on the Intelligent Embodiment platform
   * 
   * @example
   * 2
   */
  workerCount?: number;
  /**
   * @remarks
   * Number of vCPU cores per Ray Cluster Worker of the Embodied Intelligence platform
   * 
   * @example
   * 8
   */
  workerCpu?: number;
  /**
   * @remarks
   * Ray Cluster Worker specification of the Embodied Intelligence platform
   * 
   * @example
   * "xlarge"
   */
  workerSpecName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCount: 'DeviceCount',
      headAcu: 'HeadAcu',
      headCpu: 'HeadCpu',
      headSpecName: 'HeadSpecName',
      totalAcu: 'TotalAcu',
      totalDeployedCpu: 'TotalDeployedCpu',
      totalTargetCpu: 'TotalTargetCpu',
      webserverAcu: 'WebserverAcu',
      webserverCpu: 'WebserverCpu',
      webserverSpecName: 'WebserverSpecName',
      workerAcu: 'WorkerAcu',
      workerCount: 'WorkerCount',
      workerCpu: 'WorkerCpu',
      workerSpecName: 'WorkerSpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCount: 'number',
      headAcu: 'number',
      headCpu: 'number',
      headSpecName: 'string',
      totalAcu: 'number',
      totalDeployedCpu: 'number',
      totalTargetCpu: 'number',
      webserverAcu: 'number',
      webserverCpu: 'number',
      webserverSpecName: 'string',
      workerAcu: 'number',
      workerCount: 'number',
      workerCpu: 'number',
      workerSpecName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEapDeviceResourceAllocationResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of specification recommendations.
   */
  items?: DescribeEapDeviceResourceAllocationResponseBodyItems[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 19E994DC-A816-56DB-9F90-5F8E403DD19D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeEapDeviceResourceAllocationResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

