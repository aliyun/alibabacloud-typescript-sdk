// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DescribeDesktopsResponseBodyDesktopsDisks extends $dara.Model {
  diskId?: string;
  diskSize?: number;
  diskType?: string;
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktops extends $dara.Model {
  connectionStatus?: string;
  cpu?: number;
  creationTime?: string;
  dataDiskCategory?: string;
  dataDiskSize?: string;
  desktopId?: string;
  desktopName?: string;
  desktopStatus?: string;
  desktopType?: string;
  directoryId?: string;
  disks?: DescribeDesktopsResponseBodyDesktopsDisks[];
  endUserIds?: string[];
  imageId?: string;
  lastStartTime?: string;
  memory?: number;
  networkInterfaceId?: string;
  officeSiteId?: string;
  policyGroupId?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      disks: 'Disks',
      endUserIds: 'EndUserIds',
      imageId: 'ImageId',
      lastStartTime: 'LastStartTime',
      memory: 'Memory',
      networkInterfaceId: 'NetworkInterfaceId',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      cpu: 'number',
      creationTime: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      desktopType: 'string',
      directoryId: 'string',
      disks: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsDisks },
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      lastStartTime: 'string',
      memory: 'number',
      networkInterfaceId: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectoriesADConnectors extends $dara.Model {
  ADConnectorAddress?: string;
  connectorStatus?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectorAddress: 'ADConnectorAddress',
      connectorStatus: 'ConnectorStatus',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectorAddress: 'string',
      connectorStatus: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectories extends $dara.Model {
  ADConnectors?: DescribeDirectoriesResponseBodyDirectoriesADConnectors[];
  creationTime?: string;
  customSecurityGroupId?: string;
  directoryId?: string;
  directoryType?: string;
  dnsAddress?: string[];
  dnsUserName?: string;
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  enableInternetAccess?: boolean;
  name?: string;
  status?: string;
  trustPassword?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectors: 'ADConnectors',
      creationTime: 'CreationTime',
      customSecurityGroupId: 'CustomSecurityGroupId',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      dnsAddress: 'DnsAddress',
      dnsUserName: 'DnsUserName',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableInternetAccess: 'EnableInternetAccess',
      name: 'Name',
      status: 'Status',
      trustPassword: 'TrustPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectors: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesADConnectors },
      creationTime: 'string',
      customSecurityGroupId: 'string',
      directoryId: 'string',
      directoryType: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      dnsUserName: 'string',
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableInternetAccess: 'boolean',
      name: 'string',
      status: 'string',
      trustPassword: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ADConnectors)) {
      $dara.Model.validateArray(this.ADConnectors);
    }
    if(Array.isArray(this.dnsAddress)) {
      $dara.Model.validateArray(this.dnsAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsRequest extends $dara.Model {
  desktopId?: string[];
  desktopName?: string;
  desktopStatus?: string;
  directoryId?: string;
  groupId?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      directoryId: 'DirectoryId',
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatus: 'string',
      directoryId: 'string',
      groupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBody extends $dara.Model {
  desktops?: DescribeDesktopsResponseBodyDesktops[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktops },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktops)) {
      $dara.Model.validateArray(this.desktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDesktopsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesRequest extends $dara.Model {
  directoryId?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  directoryType?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: { 'type': 'array', 'itemType': 'string' },
      directoryType: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directoryId)) {
      $dara.Model.validateArray(this.directoryId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBody extends $dara.Model {
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDirectoriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $dara.Model {
  clientOS?: string;
  clientVersion?: string;
  desktopId?: string;
  instanceId?: string;
  ownerId?: number;
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: 'string',
      instanceId: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBody extends $dara.Model {
  requestId?: string;
  taskId?: string;
  taskStatus?: string;
  ticket?: string;
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConnectionTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConnectionTicketResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsRequest extends $dara.Model {
  clientOS?: string;
  clientVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsResponseBody extends $dara.Model {
  requestId?: string;
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootDesktopsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsRequest extends $dara.Model {
  clientOS?: string;
  clientVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsResponseBody extends $dara.Model {
  requestId?: string;
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDesktopsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsRequest extends $dara.Model {
  clientOS?: string;
  clientVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsResponseBody extends $dara.Model {
  requestId?: string;
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDesktopsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - DescribeDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopsResponse
   */
  async describeDesktopsWithOptions(request: DescribeDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.desktopStatus)) {
      query["DesktopStatus"] = request.desktopStatus;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDesktops",
      version: "2020-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeDesktopsResponse>(await this.callApi(params, req, runtime), new DescribeDesktopsResponse({}));
  }

  /**
   * @param request - DescribeDesktopsRequest
   * @returns DescribeDesktopsResponse
   */
  async describeDesktops(request: DescribeDesktopsRequest): Promise<DescribeDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.directoryType)) {
      query["DirectoryType"] = request.directoryType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirectories",
      version: "2020-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeDirectoriesResponse>(await this.callApi(params, req, runtime), new DescribeDirectoriesResponse({}));
  }

  /**
   * @param request - DescribeDirectoriesRequest
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  /**
   * @param request - GetConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnectionTicket",
      version: "2020-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetConnectionTicketResponse>(await this.callApi(params, req, runtime), new GetConnectionTicketResponse({}));
  }

  /**
   * @param request - GetConnectionTicketRequest
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * @param request - RebootDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootDesktopsResponse
   */
  async rebootDesktopsWithOptions(request: RebootDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<RebootDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootDesktops",
      version: "2020-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RebootDesktopsResponse>(await this.callApi(params, req, runtime), new RebootDesktopsResponse({}));
  }

  /**
   * @param request - RebootDesktopsRequest
   * @returns RebootDesktopsResponse
   */
  async rebootDesktops(request: RebootDesktopsRequest): Promise<RebootDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - StartDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDesktopsResponse
   */
  async startDesktopsWithOptions(request: StartDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<StartDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDesktops",
      version: "2020-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartDesktopsResponse>(await this.callApi(params, req, runtime), new StartDesktopsResponse({}));
  }

  /**
   * @param request - StartDesktopsRequest
   * @returns StartDesktopsResponse
   */
  async startDesktops(request: StartDesktopsRequest): Promise<StartDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - StopDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDesktopsResponse
   */
  async stopDesktopsWithOptions(request: StopDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<StopDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDesktops",
      version: "2020-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopDesktopsResponse>(await this.callApi(params, req, runtime), new StopDesktopsResponse({}));
  }

  /**
   * @param request - StopDesktopsRequest
   * @returns StopDesktopsResponse
   */
  async stopDesktops(request: StopDesktopsRequest): Promise<StopDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDesktopsWithOptions(request, runtime);
  }

}
