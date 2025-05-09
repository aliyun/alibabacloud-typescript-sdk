// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources } from "./GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources";


export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The type of the submitted ticket. Valid values:
   * 
   * *   **INSTANCE**: the ticket that applies for the permissions to be an instance owner
   * *   **DB**: the ticket that applies for the permissions to be a database owner
   * *   **TABLE**: the ticket that applies for the permissions to be a table owner
   * 
   * @example
   * DB
   */
  applyType?: string;
  /**
   * @remarks
   * The details of the requested resource.
   */
  resources?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources[];
  static names(): { [key: string]: string } {
    return {
      applyType: 'ApplyType',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyType: 'string',
      resources: { 'type': 'array', 'itemType': GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

