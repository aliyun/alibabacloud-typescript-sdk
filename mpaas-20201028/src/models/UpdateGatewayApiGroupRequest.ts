// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayApiGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  centers?: { [key: string]: any };
  description?: string;
  domainName?: string;
  enableMTLS?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  groupName?: string;
  host?: string;
  httpsModel?: boolean;
  instanceId?: string;
  instancePort?: number;
  regionMode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  timeout?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  upstreamType?: string;
  vpcId?: string;
  vpcModel?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      centers: 'Centers',
      description: 'Description',
      domainName: 'DomainName',
      enableMTLS: 'EnableMTLS',
      groupId: 'GroupId',
      groupName: 'GroupName',
      host: 'Host',
      httpsModel: 'HttpsModel',
      instanceId: 'InstanceId',
      instancePort: 'InstancePort',
      regionMode: 'RegionMode',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      upstreamType: 'UpstreamType',
      vpcId: 'VpcId',
      vpcModel: 'VpcModel',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      centers: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      domainName: 'string',
      enableMTLS: 'boolean',
      groupId: 'number',
      groupName: 'string',
      host: 'string',
      httpsModel: 'boolean',
      instanceId: 'string',
      instancePort: 'number',
      regionMode: 'boolean',
      tenantId: 'string',
      timeout: 'number',
      upstreamType: 'string',
      vpcId: 'string',
      vpcModel: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.centers) {
      $dara.Model.validateMap(this.centers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

