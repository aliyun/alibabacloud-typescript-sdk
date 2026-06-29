// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterQueueInfoByEnvRequest extends $dara.Model {
  /**
   * @remarks
   * The environment.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * The stream-batch mode.
   * 
   * This parameter is required.
   * 
   * @example
   * BOTH
   */
  streamBatchMode?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      streamBatchMode: 'StreamBatchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      projectId: 'number',
      streamBatchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

