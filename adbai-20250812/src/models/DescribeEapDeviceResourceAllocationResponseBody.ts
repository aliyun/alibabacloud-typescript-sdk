// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEapDeviceResourceAllocationResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 3
   */
  deviceCount?: number;
  /**
   * @example
   * 2.0
   */
  headAcu?: number;
  /**
   * @example
   * 2
   */
  headCpu?: number;
  /**
   * @example
   * "medium"
   */
  headSpecName?: string;
  /**
   * @example
   * 26
   */
  totalAcu?: number;
  /**
   * @example
   * 26
   */
  totalDeployedCpu?: number;
  /**
   * @example
   * 24
   */
  totalTargetCpu?: number;
  /**
   * @example
   * 8.0
   */
  webserverAcu?: number;
  /**
   * @example
   * 8
   */
  webserverCpu?: number;
  /**
   * @example
   * "xlarge"
   */
  webserverSpecName?: string;
  /**
   * @example
   * 16.0
   */
  workerAcu?: number;
  /**
   * @example
   * 2
   */
  workerCount?: number;
  /**
   * @example
   * 8
   */
  workerCpu?: number;
  /**
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

