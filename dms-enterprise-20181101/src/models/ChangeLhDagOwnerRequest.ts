// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeLhDagOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to obtain the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9***
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the user to be specified as the new owner of the task flow. You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetUser](https://help.aliyun.com/document_detail/147098.html) operation to obtain the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 50****
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      ownerUserId: 'OwnerUserId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      ownerUserId: 'number',
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

