// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExecutorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client secret.
   * 
   * @example
   * K4KWGINZVY9JwcZT0/vpSg==
   */
  apiKey?: string;
  /**
   * @remarks
   * The authentication type.
   * 
   * @example
   * APP
   */
  authType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scaling.
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-d6a5243b6fa
   */
  clusterId?: string;
  /**
   * @remarks
   * The CMS workspace ID.
   */
  cmsWorkspaceId?: string;
  /**
   * @remarks
   * The description of the executor group.
   * 
   * @example
   * group1
   */
  description?: string;
  /**
   * @remarks
   * The ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 110176
   * 
   * @deprecated
   */
  id?: string;
  /**
   * @remarks
   * The name of the executor group.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The network configuration.
   * 
   * @example
   * public
   */
  network?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * The executor type.
   * 
   * @example
   * openclaw
   */
  workerType?: string;
  /**
   * @remarks
   * The list of specified machines in JSON format.
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
      id: 'Id',
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
      id: 'string',
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

