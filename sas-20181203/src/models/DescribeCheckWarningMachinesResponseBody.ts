// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningMachinesResponseBodyMachines extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Security Center is authorized to protect the asset. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-bp1dp42hgn1xcq8l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the server.
   * 
   * @example
   * win-oracl****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 8.210.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.25.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The ID of the region in which the server resides.
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
   * D0D6E6E4-CB8C-4897-B852-46AEFDA0****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bind: 'Bind',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      regionId: 'RegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bind: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
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

export class DescribeCheckWarningMachinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the servers on which the same risk item is detected.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The servers on which the same risk item is detected.
   */
  machines?: DescribeCheckWarningMachinesResponseBodyMachines[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * B3D989EB-2E59-584C-8438-5DFAA34A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      machines: 'Machines',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      machines: { 'type': 'array', 'itemType': DescribeCheckWarningMachinesResponseBodyMachines },
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machines)) {
      $dara.Model.validateArray(this.machines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

