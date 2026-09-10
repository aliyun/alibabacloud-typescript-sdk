// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBwmMigrationTaskWriterWorkflowListRequest extends $dara.Model {
  /**
   * @remarks
   * The submit instance identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * workflow_name
   */
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      workflowName: 'workflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      workflowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

