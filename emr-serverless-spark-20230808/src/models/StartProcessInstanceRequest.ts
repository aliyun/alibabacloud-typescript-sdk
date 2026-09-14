// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartProcessInstanceRequest extends $dara.Model {
  action?: string;
  comments?: string;
  email?: string;
  /**
   * @remarks
   * The expected concurrency.
   * 
   * @example
   * 2
   */
  expectedParallelismNumber?: number;
  interval?: string;
  /**
   * @remarks
   * Specifies whether the workflow runs in the production environment.
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
   * The execution policy.
   * 
   * @example
   * RUN_MODE_PARALLEL
   */
  runMode?: string;
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
   * The version hash code.
   * 
   * @example
   * dh*********
   */
  versionHashCode?: string;
  /**
   * @remarks
   * The workflow definition version number.
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
      expectedParallelismNumber: 'expectedParallelismNumber',
      interval: 'interval',
      isProd: 'isProd',
      processDefinitionCode: 'processDefinitionCode',
      productNamespace: 'productNamespace',
      regionId: 'regionId',
      runMode: 'runMode',
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
      expectedParallelismNumber: 'number',
      interval: 'string',
      isProd: 'boolean',
      processDefinitionCode: 'number',
      productNamespace: 'string',
      regionId: 'string',
      runMode: 'string',
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

