// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExecutorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client secret.
   * 
   * @example
   * HfGUG/Qf8qRCCWlv5RT6WA==
   */
  apiKey?: string;
  /**
   * @remarks
   * The authentication type.
   * 
   * @example
   * api_key
   */
  authType?: string;
  /**
   * @remarks
   * The auto scaling configuration.
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The CloudMonitor Service (CMS) workspace ID.
   */
  cmsWorkspaceId?: string;
  /**
   * @remarks
   * The description of the worker group.
   * 
   * @example
   * group1
   */
  description?: string;
  /**
   * @remarks
   * The integration method of the executor. Valid values: manual (indicates manual entry) and acs (indicates ACS integration).
   * 
   * @example
   * manual
   */
  integrationType?: string;
  /**
   * @remarks
   * The name of the worker group.
   * 
   * This parameter is required.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The network type. Valid values: public and private.
   * 
   * @example
   * public
   */
  network?: string;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * - **HTTP** (default): Supports association with HTTPS, HTTP, and QUIC listeners.
   * 
   * - **HTTPS**: Supports association with HTTPS listeners.
   * 
   * - **gRPC**: Supports association with HTTPS and QUIC listeners.
   * 
   * > If **ServerGroupType** is set to **Fc**, you do not need to configure the backend protocol.
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  /**
   * @remarks
   * The worker type.
   * 
   * This parameter is required.
   * 
   * @example
   * openclaw
   */
  workerType?: string;
  /**
   * @remarks
   * The list of workers in JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"address":"http://47.111.188.191:18789"}]
   */
  workers?: string;
  /**
   * @remarks
   * The extended configuration of the executor group.
   * 
   * @example
   * Not publicly available
   */
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      authType: 'AuthType',
      autoScale: 'AutoScale',
      clusterId: 'ClusterId',
      cmsWorkspaceId: 'CmsWorkspaceId',
      description: 'Description',
      integrationType: 'IntegrationType',
      name: 'Name',
      network: 'Network',
      protocol: 'Protocol',
      workerType: 'WorkerType',
      workers: 'Workers',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      authType: 'string',
      autoScale: 'boolean',
      clusterId: 'string',
      cmsWorkspaceId: 'string',
      description: 'string',
      integrationType: 'string',
      name: 'string',
      network: 'string',
      protocol: 'string',
      workerType: 'string',
      workers: 'string',
      XAttrs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

