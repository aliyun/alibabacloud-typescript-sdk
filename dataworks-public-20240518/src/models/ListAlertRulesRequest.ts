// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * error_rule
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the owner of the rule.
   * 
   * @example
   * 1933790683****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the alert recipient.
   * 
   * @example
   * 1933790683****
   */
  receiver?: string;
  /**
   * @remarks
   * The IDs of the scheduling tasks.
   */
  taskIds?: number[];
  /**
   * @remarks
   * The alert triggering condition.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      receiver: 'Receiver',
      taskIds: 'TaskIds',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      receiver: 'string',
      taskIds: { 'type': 'array', 'itemType': 'number' },
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

