// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SummaryJobDetailResponseBodyProgressSummaryDetails extends $dara.Model {
  /**
   * @remarks
   * The type of migrated or synchronized object. Valid values: **Table**, **Constraint**, **Index**, **View**, **Materialize View**, **Type**, **Synonym**, **Trigger**, **Function**, **Procedure**, **Package**, **Default**, **Rule**, **PlanGuide**, and **Sequence**.
   * 
   * @example
   * Table
   */
  key?: string;
  /**
   * @remarks
   * The state of the data migration or data synchronization task. Valid values:
   * 
   * *   **0**: The task was complete.
   * *   **1**: The task was waiting to start.
   * *   **2**: The task was being initialized.
   * *   **3**: The task was in progress.
   * *   **4**: An error occurred.
   * *   **5**: The task failed.
   * 
   * @example
   * 0
   */
  state?: number;
  /**
   * @remarks
   * The total number of migrated or synchronized objects.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      state: 'State',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      state: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

