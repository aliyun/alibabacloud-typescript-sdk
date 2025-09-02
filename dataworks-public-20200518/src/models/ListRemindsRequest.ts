// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemindsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to receive alert notifications.
   * 
   * @example
   * 9527952795****
   */
  alertTarget?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the custom alert rules.
   * 
   * @example
   * 9527952795****
   */
  founder?: string;
  /**
   * @remarks
   * The ID of the node to which the custom alert rules are applied. You can use the ID to search for the custom alert rules that are applied to the node.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The number of the page to return. Valid values: 1 to 30. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The conditions that trigger an alert for the node. Valid values: FINISHED, UNFINISHED, ERROR, CYCLE_UNFINISHED, and TIMEOUT. The value FINISHED indicates that the node finishes running. The value UNFINISHED indicates that the node is still running at the specified point in time. The value ERROR indicates that an error occurs when the node is running. The value CYCLE_UNFINISHED indicates that the node does not finish running in the specified scheduling cycle. The value TIMEOUT indicates that the node times out. You can specify multiple conditions for a custom alert rule. If you specify multiple condition, separate them with commas (,).
   * 
   * @example
   * FINISHED,ERROR
   */
  remindTypes?: string;
  /**
   * @remarks
   * The keyword in a rule name that is used to search for the rule. Fuzzy search is supported.
   * 
   * @example
   * Keyword
   */
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      alertTarget: 'AlertTarget',
      founder: 'Founder',
      nodeId: 'NodeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remindTypes: 'RemindTypes',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTarget: 'string',
      founder: 'string',
      nodeId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      remindTypes: 'string',
      searchText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

