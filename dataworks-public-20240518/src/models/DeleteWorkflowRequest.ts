// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the workflow, which is used to implement asynchronous operations and idempotence. If you do not specify this parameter during creation, the system automatically generates one. This code is uniquely bound to the resource ID. If you specify this parameter during update or deletion, it must be the same as the client unique code specified during creation.
   * 
   * @example
   * Workflow_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The project environment. Valid values:
   * 
   * - Prod: production
   * - Dev: development
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The unique identifier of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      clientUniqueCode: 'ClientUniqueCode',
      envType: 'EnvType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUniqueCode: 'string',
      envType: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

