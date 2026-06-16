// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartProcessInstanceRequest extends $dara.Model {
  action?: string;
  comments?: string;
  email?: string;
  interval?: string;
  /**
   * @remarks
   * Specifies whether the workflow runs in a production environment.
   * 
   * @example
   * false
   */
  isProd?: boolean;
  /**
   * @remarks
   * The workflow definition ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12***********
   */
  processDefinitionCode?: number;
  /**
   * @remarks
   * The product code.
   * 
   * This parameter is required.
   * 
   * @example
   * SS
   */
  productNamespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The runtime queue.
   * 
   * @example
   * root_queue
   */
  runtimeQueue?: string;
  /**
   * @remarks
   * The hash code of the version.
   * 
   * @example
   * dh*********
   */
  versionHashCode?: string;
  /**
   * @remarks
   * The version number of the workflow definition.
   * 
   * @example
   * 1
   */
  versionNumber?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      comments: 'comments',
      email: 'email',
      interval: 'interval',
      isProd: 'isProd',
      processDefinitionCode: 'processDefinitionCode',
      productNamespace: 'productNamespace',
      regionId: 'regionId',
      runtimeQueue: 'runtimeQueue',
      versionHashCode: 'versionHashCode',
      versionNumber: 'versionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      comments: 'string',
      email: 'string',
      interval: 'string',
      isProd: 'boolean',
      processDefinitionCode: 'number',
      productNamespace: 'string',
      regionId: 'string',
      runtimeQueue: 'string',
      versionHashCode: 'string',
      versionNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

