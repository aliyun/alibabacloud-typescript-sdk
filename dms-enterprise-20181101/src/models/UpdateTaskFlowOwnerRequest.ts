// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskFlowOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlowInstance](https://help.aliyun.com/document_detail/424689.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  dagId?: number;
  /**
   * @remarks
   * The user ID of the new owner. You can call the [GetUser](https://help.aliyun.com/document_detail/147098.html) or [ListUsers](https://help.aliyun.com/document_detail/141938.html) operation to query the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 51****
   */
  newOwnerId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      newOwnerId: 'NewOwnerId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      newOwnerId: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

