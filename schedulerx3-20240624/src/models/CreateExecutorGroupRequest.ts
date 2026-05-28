// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExecutorGroupRequest extends $dara.Model {
  /**
   * @example
   * HfGUG/Qf8qRCCWlv5RT6WA==
   */
  apiKey?: string;
  /**
   * @example
   * api_key
   */
  authType?: string;
  autoScale?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  cmsWorkspaceId?: string;
  /**
   * @example
   * group1
   */
  description?: string;
  integrationType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @example
   * public
   */
  network?: string;
  /**
   * @example
   * HTTPS
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * openclaw
   */
  workerType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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

