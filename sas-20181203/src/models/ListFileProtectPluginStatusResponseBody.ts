// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectPluginStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version of the Security Center agent.
   * 
   * @example
   * 00_41
   */
  clientVersion?: string;
  /**
   * @remarks
   * The returned code after you install the Security Center agent. Valid values:
   * 
   * 1.  0: The installation is successful.
   * 2.  \\-2: The kernel does not support the installation.
   * 
   * @example
   * -2
   */
  installCode?: string;
  /**
   * @remarks
   * The returned message after you install the Security Center agent.
   * 
   * @example
   * driver file not exist
   */
  installMessage?: string;
  /**
   * @remarks
   * Indicates whether the Security Center agent is installed.
   * 
   * @example
   * true
   */
  installed?: boolean;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * i-wz92q7m5hsbgfhdss***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address that is associated with the instance.
   * 
   * @example
   * 172.16.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address that is associated with the instance.
   * 
   * @example
   * 10.42.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * Indicates whether the Security Center agent is online. Valid value:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   **windows**: Windows
   * *   **linux**: Linux
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * Indicates whether the core file monitoring file is supported.
   * 
   * @example
   * true
   */
  supportFile?: boolean;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      installCode: 'InstallCode',
      installMessage: 'InstallMessage',
      installed: 'Installed',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      online: 'Online',
      platform: 'Platform',
      supportFile: 'SupportFile',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      installCode: 'string',
      installMessage: 'string',
      installed: 'boolean',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      online: 'boolean',
      platform: 'string',
      supportFile: 'boolean',
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

export class ListFileProtectPluginStatusResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 149
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileProtectPluginStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned if the call is successful.
   */
  data?: ListFileProtectPluginStatusResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListFileProtectPluginStatusResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60F289EC-BAA3-5DF1-8476-B3F05A14EBC2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListFileProtectPluginStatusResponseBodyData },
      pageInfo: ListFileProtectPluginStatusResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

