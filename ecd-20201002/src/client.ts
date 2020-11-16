// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class RefreshLoginTokenRequest extends $tea.Model {
  regionId: string;
  clientId: string;
  directoryId: string;
  endUserId: string;
  loginToken: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientId: 'string',
      directoryId: 'string',
      endUserId: 'string',
      loginToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesRequest extends $tea.Model {
  regionId: string;
  clientId: string;
  directoryId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientId: 'string',
      directoryId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $tea.Model {
  requestId: string;
  directories: DescribeDirectoriesResponseDirectories[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      directories: 'Directories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseDirectories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsRequest extends $tea.Model {
  regionId: string;
  directoryId?: string;
  clientId: string;
  loginToken: string;
  groupId?: string;
  desktopStatus?: string;
  maxResults?: number;
  nextToken?: string;
  userName?: string;
  desktopName?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryId: 'DirectoryId',
      clientId: 'ClientId',
      loginToken: 'LoginToken',
      groupId: 'GroupId',
      desktopStatus: 'DesktopStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      userName: 'UserName',
      desktopName: 'DesktopName',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryId: 'string',
      clientId: 'string',
      loginToken: 'string',
      groupId: 'string',
      desktopStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      userName: 'string',
      desktopName: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  desktops: DescribeDesktopsResponseDesktops[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      desktops: 'Desktops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      desktops: { 'type': 'array', 'itemType': DescribeDesktopsResponseDesktops },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsRequest extends $tea.Model {
  regionId: string;
  clientId: string;
  loginToken: string;
  desktopId: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientId: 'ClientId',
      loginToken: 'LoginToken',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientId: 'string',
      loginToken: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $tea.Model {
  regionId: string;
  clientId: string;
  loginToken: string;
  taskId?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientId: 'ClientId',
      loginToken: 'LoginToken',
      taskId: 'TaskId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientId: 'string',
      loginToken: 'string',
      taskId: 'string',
      desktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponse extends $tea.Model {
  requestId: string;
  taskId: string;
  taskStatus: string;
  ticket: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      taskStatus: 'string',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenRequest extends $tea.Model {
  regionId: string;
  clientId: string;
  directoryId: string;
  endUserId: string;
  password: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientId: 'string',
      directoryId: 'string',
      endUserId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponse extends $tea.Model {
  loginToken: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      loginToken: 'LoginToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseDirectories extends $tea.Model {
  directoryId: string;
  directoryType: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      directoryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseDesktopsDisks extends $tea.Model {
  diskId: string;
  diskSize: number;
  diskType: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      diskSize: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseDesktops extends $tea.Model {
  directoryId: string;
  creationTime: string;
  desktopId: string;
  desktopStatus: string;
  desktopName: string;
  imageId: string;
  desktopType: string;
  systemDiskCategory: string;
  systemDiskSize: number;
  dataDiskCategory: string;
  dataDiskSize: string;
  connectionStatus: string;
  policyGroupId: string;
  cpu: number;
  memory: number;
  networkInterfaceId: number;
  disks: DescribeDesktopsResponseDesktopsDisks[];
  endUserIds: string[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      creationTime: 'CreationTime',
      desktopId: 'DesktopId',
      desktopStatus: 'DesktopStatus',
      desktopName: 'DesktopName',
      imageId: 'ImageId',
      desktopType: 'DesktopType',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      connectionStatus: 'ConnectionStatus',
      policyGroupId: 'PolicyGroupId',
      cpu: 'Cpu',
      memory: 'Memory',
      networkInterfaceId: 'NetworkInterfaceId',
      disks: 'Disks',
      endUserIds: 'EndUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      creationTime: 'string',
      desktopId: 'string',
      desktopStatus: 'string',
      desktopName: 'string',
      imageId: 'string',
      desktopType: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      connectionStatus: 'string',
      policyGroupId: 'string',
      cpu: 'number',
      memory: 'number',
      networkInterfaceId: 'number',
      disks: { 'type': 'array', 'itemType': DescribeDesktopsResponseDesktopsDisks },
      endUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async refreshLoginTokenWithOptions(request: RefreshLoginTokenRequest, runtime: $Util.RuntimeOptions): Promise<RefreshLoginTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<RefreshLoginTokenResponse>(await this.doRequest("RefreshLoginToken", "HTTPS", "POST", "2020-10-02", "Anonymous", null, $tea.toMap(request), runtime), new RefreshLoginTokenResponse({}));
  }

  async refreshLoginToken(request: RefreshLoginTokenRequest): Promise<RefreshLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshLoginTokenWithOptions(request, runtime);
  }

  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDirectoriesResponse>(await this.doRequest("DescribeDirectories", "HTTPS", "POST", "2020-10-02", "Anonymous", null, $tea.toMap(request), runtime), new DescribeDirectoriesResponse({}));
  }

  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  async describeDesktopsWithOptions(request: DescribeDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDesktopsResponse>(await this.doRequest("DescribeDesktops", "HTTPS", "POST", "2020-10-02", "Anonymous", null, $tea.toMap(request), runtime), new DescribeDesktopsResponse({}));
  }

  async describeDesktops(request: DescribeDesktopsRequest): Promise<DescribeDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopsWithOptions(request, runtime);
  }

  async rebootDesktopsWithOptions(request: RebootDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebootDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<RebootDesktopsResponse>(await this.doRequest("RebootDesktops", "HTTPS", "POST", "2020-10-02", "Anonymous", null, $tea.toMap(request), runtime), new RebootDesktopsResponse({}));
  }

  async rebootDesktops(request: RebootDesktopsRequest): Promise<RebootDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    Util.validateModel(request);
    return $tea.cast<GetConnectionTicketResponse>(await this.doRequest("GetConnectionTicket", "HTTPS", "POST", "2020-10-02", "Anonymous", null, $tea.toMap(request), runtime), new GetConnectionTicketResponse({}));
  }

  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  async getLoginTokenWithOptions(request: GetLoginTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<GetLoginTokenResponse>(await this.doRequest("GetLoginToken", "HTTPS", "POST", "2020-10-02", "Anonymous", null, $tea.toMap(request), runtime), new GetLoginTokenResponse({}));
  }

  async getLoginToken(request: GetLoginTokenRequest): Promise<GetLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

}
