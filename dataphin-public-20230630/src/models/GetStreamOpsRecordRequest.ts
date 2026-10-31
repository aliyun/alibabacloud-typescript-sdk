// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamOpsRecordRequest extends $dara.Model {
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The ID of the operation record. Set this parameter to the opsRecordId value returned by the ListStreamOpsRecords operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 646
   */
  opsRecordId?: string;
  /**
   * @remarks
   * The ID of the Dataphin project to which the task belongs. This parameter is used for permission verification in the production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * 7299592831043008
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      opsRecordId: 'OpsRecordId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      opsRecordId: 'string',
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

