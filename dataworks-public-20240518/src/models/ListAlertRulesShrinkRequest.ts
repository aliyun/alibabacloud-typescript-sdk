// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertRulesShrinkRequest extends $dara.Model {
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
  taskIdsShrink?: string;
  /**
   * @remarks
   * The alert triggering condition.
   */
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      receiver: 'Receiver',
      taskIdsShrink: 'TaskIds',
      typesShrink: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      receiver: 'string',
      taskIdsShrink: 'string',
      typesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

