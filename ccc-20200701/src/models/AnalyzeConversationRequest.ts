// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeConversationRequest extends $dara.Model {
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * job-10963442671187****
   */
  contactId?: string;
  /**
   * @remarks
   * When the TaskListJson parameter is set to "fields", this parameter specifies the field content to fetch.
   * 
   * @example
   * [
   *   {
   *     "code": "OrderNo",
   *     "name": "订单号",
   *     "description": "订单号"
   *   },
   *   {
   *     "code": "ProductName",
   *     "name": "商品名称",
   *     "description": "商品名称"
   *   }
   * ]
   */
  fieldListJson?: string;
  /**
   * @remarks
   * Cloud Contact Center instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 9cfad875-6260-4a53-ab6e-b13e3fb31f7d
   */
  instanceId?: string;
  /**
   * @remarks
   * List of Task Types for analysis. Valid values include:
   * 
   * - title: title
   * 
   * - summary: summary
   * 
   * - keywords: keywords
   * 
   * - fields: fields
   * 
   * Currently, only "summary" and "title" can be passed together. All other parameters must be passed individually.
   * 
   * @example
   * ["keywords"]
   */
  taskListJson?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      fieldListJson: 'FieldListJson',
      instanceId: 'InstanceId',
      taskListJson: 'TaskListJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      fieldListJson: 'string',
      instanceId: 'string',
      taskListJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

