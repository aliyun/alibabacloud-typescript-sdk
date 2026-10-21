// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageCacheRequestBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the current source reading and transfer to use the public network. At least one of this parameter and accessVpc must be set to true. The server verifies the access conditions of the current workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  accessInternet?: boolean;
  /**
   * @remarks
   * Specifies whether to allow the current source reading and transfer to use a VPC. At least one of this parameter and accessInternet must be set to true. The server parses the trusted network of the current workspace and does not modify the agent runtime network.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  accessVpc?: boolean;
  /**
   * @remarks
   * The ID of the source ACR Enterprise instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-example
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The namespace of the source ACR.
   * 
   * This parameter is required.
   * 
   * @example
   * team
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the repository under the namespace. Do not include the namespace repeatedly.
   * 
   * This parameter is required.
   * 
   * @example
   * app
   */
  repository?: string;
  /**
   * @remarks
   * The selected tag of the source image.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessInternet: 'accessInternet',
      accessVpc: 'accessVpc',
      acrInstanceId: 'acrInstanceId',
      namespace: 'namespace',
      repository: 'repository',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInternet: 'boolean',
      accessVpc: 'boolean',
      acrInstanceId: 'string',
      namespace: 'string',
      repository: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The business parameters for creating an image cache.
   * 
   * This parameter is required.
   */
  body?: CreateImageCacheRequestBody;
  /**
   * @remarks
   * This parameter is required and cannot be empty. It is reserved to be compatible with the API. Currently, it does not provide the ability to deduplicate requests or recover the original result based on this field. If a timeout occurs or the result is unconfirmed, query the query cache status first before deciding whether to recommit.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The product entry region, which is determined by the selected region endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The current routed workspace. The server verifies the account, region, and resource ownership. This parameter cannot be omitted or used to access other workspaces.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-example
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      regionId: 'regionId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateImageCacheRequestBody,
      clientToken: 'string',
      regionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

