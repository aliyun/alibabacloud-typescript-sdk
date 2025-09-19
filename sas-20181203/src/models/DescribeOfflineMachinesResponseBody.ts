// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfflineMachinesResponseBodyMachineList extends $dara.Model {
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * sas-bdrvxb4b****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * sql-test-001
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 120.79.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * cn-hangzhou
   */
  machineRegion?: string;
  /**
   * @remarks
   * The operating system of the server. Valid values:
   * 
   * *   **linux**
   * *   **windows**
   * *   **windows-2003**
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * The ID of the region in which the server resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 6d5b361f-958d-48a8-a9d2-d6e82c1****
   */
  uuid?: string;
  /**
   * @remarks
   * The source of the server. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud.
   * *   **1**: a third-party cloud server
   * *   **2**: a server in a data center
   * *   **3**, **4**, **5**, and **7**: other cloud asset
   * *   **8**: a lightweight asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @remarks
   * The name of the service provider (SP) for the server.
   * 
   * Valid values:
   * 
   * *   **ALIYUN**: Alibaba Cloud
   * *   **OUT**: a third-party service provider
   * *   **IDC**: a data center
   * *   **TENCENT**: Tencent Cloud
   * *   **HUAWEICLOUD**: Huawei Cloud
   * *   **Microsoft**: Microsoft
   * *   **AWS**: Amazon Web Services (AWS)
   * *   **TRIPARTITE**: a lightweight server
   * 
   * @example
   * ALIYUN
   */
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      machineRegion: 'MachineRegion',
      os: 'Os',
      regionId: 'RegionId',
      uuid: 'Uuid',
      vendor: 'Vendor',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      machineRegion: 'string',
      os: 'string',
      regionId: 'string',
      uuid: 'string',
      vendor: 'number',
      vendorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfflineMachinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array that consists of the information about servers.
   */
  machineList?: DescribeOfflineMachinesResponseBodyMachineList[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 44
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      machineList: 'MachineList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      machineList: { 'type': 'array', 'itemType': DescribeOfflineMachinesResponseBodyMachineList },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.machineList)) {
      $dara.Model.validateArray(this.machineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

