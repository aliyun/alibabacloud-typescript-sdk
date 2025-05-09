// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail } from "./GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail";


export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The instance is a logical database.
   * *   **false**: The instance is not a logical database.
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The details of the resource.
   */
  resourceDetail?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 12345
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      logic: 'Logic',
      resourceDetail: 'ResourceDetail',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logic: 'boolean',
      resourceDetail: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail,
      targetId: 'string',
    };
  }

  validate() {
    if(this.resourceDetail && typeof (this.resourceDetail as any).validate === 'function') {
      (this.resourceDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

