// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUuidsByVulNamesResponseBodyMachineInfoStatistics extends $dara.Model {
  /**
   * @remarks
   * The public IP address of the server on which the exception was detected.
   * 
   * @example
   * 47.98.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server on which the exception was detected.
   * 
   * @example
   * 172.18.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-wz9gd1os5talju****
   */
  machineInstanceId?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  machineIp?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * TestMachine
   */
  machineName?: string;
  /**
   * @remarks
   * The operating system that the server runs.
   * 
   * @example
   * windows
   */
  os?: string;
  /**
   * @remarks
   * The region ID of the server.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 18375c64-eaa2-4702-92b0-4ee7******
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      machineInstanceId: 'MachineInstanceId',
      machineIp: 'MachineIp',
      machineName: 'MachineName',
      os: 'Os',
      regionId: 'RegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIp: 'string',
      intranetIp: 'string',
      machineInstanceId: 'string',
      machineIp: 'string',
      machineName: 'string',
      os: 'string',
      regionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUuidsByVulNamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics about the servers.
   */
  machineInfoStatistics?: DescribeUuidsByVulNamesResponseBodyMachineInfoStatistics[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 97286A-4A6B-4A4-95FA-EC7E3E2451
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of vulnerabilities on the server.
   * 
   * @example
   * 2
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      machineInfoStatistics: 'MachineInfoStatistics',
      requestId: 'RequestId',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineInfoStatistics: { 'type': 'array', 'itemType': DescribeUuidsByVulNamesResponseBodyMachineInfoStatistics },
      requestId: 'string',
      vulCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.machineInfoStatistics)) {
      $dara.Model.validateArray(this.machineInfoStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

