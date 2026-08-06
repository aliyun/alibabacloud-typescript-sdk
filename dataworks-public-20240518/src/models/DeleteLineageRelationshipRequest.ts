// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLineageRelationshipRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the lineage relationship. You can obtain this ID from the response of the ListLineageRelationships operation. The ID is in the format of `${accountId}:${srcEntityType}.${srcEntityId}:${dstEntityType}.${dstEntityId}:${taskType}.${taskId}`, where accountId is the Alibaba Cloud account ID, srcEntityType and srcEntityId are the source entity type and source entity ID, dstEntityType and dstEntityId are the destination entity type and destination entity ID, and taskType and taskId are the lineage task type and task ID. Example: `1245491995595649:custom-report.report_test_001:custom-table.table_test_001:custom-lineage-task.test_task_001`.
   * 
   * This parameter is required.
   * 
   * @example
   * 4as3dasf654a
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

