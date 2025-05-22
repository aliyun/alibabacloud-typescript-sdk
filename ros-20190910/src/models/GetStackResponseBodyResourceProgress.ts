// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStackResponseBodyResourceProgressInProgressResourceDetails } from "./GetStackResponseBodyResourceProgressInProgressResourceDetails";


export class GetStackResponseBodyResourceProgress extends $dara.Model {
  /**
   * @remarks
   * The number of resources that failed to be created.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   * 
   * @example
   * 0
   */
  failedResourceCount?: number;
  /**
   * @remarks
   * The number of resources that are being created.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   * 
   * @example
   * 1
   */
  inProgressResourceCount?: number;
  /**
   * @remarks
   * The progress details of resources that are being created.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   */
  inProgressResourceDetails?: GetStackResponseBodyResourceProgressInProgressResourceDetails[];
  /**
   * @remarks
   * The number of resources to be created.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   * 
   * @example
   * 0
   */
  pendingResourceCount?: number;
  /**
   * @remarks
   * The creation or rollback progress of the stack, in percentage. Valid values: 0 to 100.
   * 
   * The value progressively increases from 0 to 100 during a stack creation operation. If the stack is created, the value reaches 100. If the stack fails to be created, a rollback is started for the stack resources, and the value progressively increases from the percentage of the remaining progress (100 - Progress value generated when the stack fails to be created). The value increases to 100 when the stack resources are rolled back. This parameter indicates the creation progress during a stack creation operation and indicates the rollback progress during a stack rollback operation.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `PercentageOnly`.
   * 
   * @example
   * 100
   */
  stackActionProgress?: number;
  /**
   * @remarks
   * The overall creation progress of the stack, in percentage. Valid values: 0 to 100.
   * 
   * The value progressively increases from 0 to 100 during a stack creation operation. If the stack is created, the value reaches 100. If the stack fails to be created, a rollback is started for the stack resources, and the value progressively decreases. The value decreases to 0 when the stack resources are rolled back. This parameter indicates only the overall creation progress, regardless of whether during a stack creation or rollback operation.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `PercentageOnly`.
   * 
   * @example
   * 100
   */
  stackOperationProgress?: number;
  /**
   * @remarks
   * The number of resources that are created.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   * 
   * @example
   * 1
   */
  successResourceCount?: number;
  /**
   * @remarks
   * The total number of resources.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   * 
   * @example
   * 2
   */
  totalResourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedResourceCount: 'FailedResourceCount',
      inProgressResourceCount: 'InProgressResourceCount',
      inProgressResourceDetails: 'InProgressResourceDetails',
      pendingResourceCount: 'PendingResourceCount',
      stackActionProgress: 'StackActionProgress',
      stackOperationProgress: 'StackOperationProgress',
      successResourceCount: 'SuccessResourceCount',
      totalResourceCount: 'TotalResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResourceCount: 'number',
      inProgressResourceCount: 'number',
      inProgressResourceDetails: { 'type': 'array', 'itemType': GetStackResponseBodyResourceProgressInProgressResourceDetails },
      pendingResourceCount: 'number',
      stackActionProgress: 'number',
      stackOperationProgress: 'number',
      successResourceCount: 'number',
      totalResourceCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inProgressResourceDetails)) {
      $dara.Model.validateArray(this.inProgressResourceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

