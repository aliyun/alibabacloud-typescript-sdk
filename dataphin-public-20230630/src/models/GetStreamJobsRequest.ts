// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The Dataphin environment. Valid values:
   * - DEV
   * - PROD.
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
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The Dataphin project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7162269257990111
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

