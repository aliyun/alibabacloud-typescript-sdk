// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEapDeviceResourceAllocationResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The total number of devices.
   * 
   * @example
   * 3
   */
  deviceCount?: number;
  /**
   * @remarks
   * The total number of ACUs for the Ray Cluster Head of the embodied intelligence platform.
   * 
   * @example
   * 2.0
   */
  headAcu?: number;
  /**
   * @remarks
   * The number of vCPU cores for the Ray Cluster Head of the embodied intelligence platform.
   * 
   * @example
   * 2
   */
  headCpu?: number;
  /**
   * @remarks
   * The Ray Cluster Head specification of the embodied intelligence platform.
   * 
   * @example
   * "medium"
   */
  headSpecName?: string;
  /**
   * @remarks
   * The total number of actually deployed ACUs on the embodied intelligence platform.
   * 
   * @example
   * 26
   */
  totalAcu?: number;
  /**
   * @remarks
   * The total number of actually deployed vCPU cores on the embodied intelligence platform.
   * 
   * @example
   * 26
   */
  totalDeployedCpu?: number;
  /**
   * @remarks
   * The total number of target vCPU cores.
   * 
   * @example
   * 24
   */
  totalTargetCpu?: number;
  /**
   * @remarks
   * The total number of ACUs for the embodied intelligence platform.
   * 
   * @example
   * 8.0
   */
  webserverAcu?: number;
  /**
   * @remarks
   * The total number of vCPU cores for the embodied intelligence platform.
   * 
   * @example
   * 8
   */
  webserverCpu?: number;
  /**
   * @remarks
   * The Webserver specification of the embodied intelligence platform.
   * 
   * @example
   * "xlarge"
   */
  webserverSpecName?: string;
  /**
   * @remarks
   * The total number of ACUs for a single Ray Cluster Worker of the embodied intelligence platform.
   * 
   * @example
   * 16.0
   */
  workerAcu?: number;
  /**
   * @remarks
   * The total number of Ray Cluster Workers of the embodied intelligence platform.
   * 
   * @example
   * 2
   */
  workerCount?: number;
  /**
   * @remarks
   * The number of vCPU cores for a single Ray Cluster Worker of the embodied intelligence platform.
   * 
   * @example
   * 8
   */
  workerCpu?: number;
  /**
   * @remarks
   * The Ray Cluster Worker specification of the embodied intelligence platform.
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
   * The list of specification recommendations.
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

