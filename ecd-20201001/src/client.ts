// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeDirectoriesRequest extends $tea.Model {
  directoryType: string;
  directoryId?: string[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      directoryType: 'DirectoryType',
      directoryId: 'DirectoryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryType: 'string',
      directoryId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $tea.Model {
  nextToken: string;
  requestId: string;
  directories: DescribeDirectoriesResponseDirectories[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      directories: 'Directories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseDirectories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoriesRequest extends $tea.Model {
  directoryId?: string[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoriesResponse extends $tea.Model {
  nextToken: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsRequest extends $tea.Model {
  regionId: string;
  directoryId?: string;
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
  desktopId: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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
  instanceId?: string;
  userName?: string;
  password?: string;
  taskId?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      userName: 'UserName',
      password: 'Password',
      taskId: 'TaskId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      userName: 'string',
      password: 'string',
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

export class DescribeDirectoriesResponseDirectoriesADConnectors extends $tea.Model {
  ADConnectorAddress: string;
  vSwitchId: string;
  connectorStatus: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectorAddress: 'ADConnectorAddress',
      vSwitchId: 'VSwitchId',
      connectorStatus: 'ConnectorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectorAddress: 'string',
      vSwitchId: 'string',
      connectorStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseDirectories extends $tea.Model {
  directoryId: string;
  status: string;
  directoryType: string;
  creationTime: string;
  name: string;
  customSecurityGroupId: string;
  dnsUserName: string;
  enableInternetAccess: boolean;
  trustPassword: string;
  domainName: string;
  domainUserName: string;
  domainPassword: string;
  ADConnectors: DescribeDirectoriesResponseDirectoriesADConnectors[];
  dnsAddress: string[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      status: 'Status',
      directoryType: 'DirectoryType',
      creationTime: 'CreationTime',
      name: 'Name',
      customSecurityGroupId: 'CustomSecurityGroupId',
      dnsUserName: 'DnsUserName',
      enableInternetAccess: 'EnableInternetAccess',
      trustPassword: 'TrustPassword',
      domainName: 'DomainName',
      domainUserName: 'DomainUserName',
      domainPassword: 'DomainPassword',
      ADConnectors: 'ADConnectors',
      dnsAddress: 'DnsAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      status: 'string',
      directoryType: 'string',
      creationTime: 'string',
      name: 'string',
      customSecurityGroupId: 'string',
      dnsUserName: 'string',
      enableInternetAccess: 'boolean',
      trustPassword: 'string',
      domainName: 'string',
      domainUserName: 'string',
      domainPassword: 'string',
      ADConnectors: { 'type': 'array', 'itemType': DescribeDirectoriesResponseDirectoriesADConnectors },
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
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


  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDirectoriesResponse>(await this.doRequest("DescribeDirectories", "HTTPS", "POST", "2020-10-01", "AK", null, $tea.toMap(request), runtime), new DescribeDirectoriesResponse({}));
  }

  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  async deleteDirectoriesWithOptions(request: DeleteDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectoriesResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDirectoriesResponse>(await this.doRequest("DeleteDirectories", "HTTPS", "POST", "2020-10-01", "AK", null, $tea.toMap(request), runtime), new DeleteDirectoriesResponse({}));
  }

  async deleteDirectories(request: DeleteDirectoriesRequest): Promise<DeleteDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoriesWithOptions(request, runtime);
  }

  async describeDesktopsWithOptions(request: DescribeDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDesktopsResponse>(await this.doRequest("DescribeDesktops", "HTTPS", "POST", "2020-10-01", "AK", null, $tea.toMap(request), runtime), new DescribeDesktopsResponse({}));
  }

  async describeDesktops(request: DescribeDesktopsRequest): Promise<DescribeDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopsWithOptions(request, runtime);
  }

  async rebootDesktopsWithOptions(request: RebootDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebootDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<RebootDesktopsResponse>(await this.doRequest("RebootDesktops", "HTTPS", "POST", "2020-10-01", "AK", null, $tea.toMap(request), runtime), new RebootDesktopsResponse({}));
  }

  async rebootDesktops(request: RebootDesktopsRequest): Promise<RebootDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    Util.validateModel(request);
    return $tea.cast<GetConnectionTicketResponse>(await this.doRequest("GetConnectionTicket", "HTTPS", "POST", "2020-10-01", "AK", null, $tea.toMap(request), runtime), new GetConnectionTicketResponse({}));
  }

  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
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
