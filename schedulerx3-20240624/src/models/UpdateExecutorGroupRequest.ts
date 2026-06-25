// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExecutorGroupRequest extends $dara.Model {
  /**
   * @example
   * K4KWGINZVY9JwcZT0/vpSg==
   */
  apiKey?: string;
  /**
   * @example
   * APP
   */
  authType?: string;
  autoScale?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-d6a5243b6fa
   */
  clusterId?: string;
  cmsWorkspaceId?: string;
  /**
   * @example
   * group1
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 110176
   * 
   * @deprecated
   */
  id?: string;
  name?: string;
  /**
   * @example
   * public
   */
  network?: string;
  /**
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @example
   * openclaw
   */
  workerType?: string;
  /**
   * @example
   * [{"address":"http://47.111.188.191:18789"}]
   */
  workers?: string;
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

