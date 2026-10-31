// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamOpsRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the real-time task file. The value is a string representing a positive integer.
   * 
   * This parameter is required.
   * 
   * @example
   * 7333610201479808
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the operation tenant. The gateway verifies that the current identity has access to the tenant and then injects the tenant ID into the backend.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The optional ID of the operator user. This parameter follows the gateway identity verification rules and is not directly bound to the backend user ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7299592831043008
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
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

