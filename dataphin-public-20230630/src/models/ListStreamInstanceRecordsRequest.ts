// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamInstanceRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task file. Set this parameter to the fileId value returned by the GetStreamTask operation. The value must be a positive integer.
   * 
   * This parameter is required.
   * 
   * @example
   * 7333610201479808
   */
  fileId?: string;
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

