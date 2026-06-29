// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationSubmitStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: Development environment. 
   * - PROD (default): Production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The job ID returned after submission in batch mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 1324444131
   */
  jobId?: string;
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
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      jobId: 'JobId',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      jobId: 'string',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

