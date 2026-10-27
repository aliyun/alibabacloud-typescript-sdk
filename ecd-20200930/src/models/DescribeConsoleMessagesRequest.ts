// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsoleMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel, which is used to restrict the business to which the messages to query belong. Valid values: enterprise, standard, office, business, lincore_team, and AGENTIC_CLOUD_COMPUTER. The values are not case-sensitive. Default value: enterprise. Unrecognized channel values are also processed as enterprise.
   * 
   * @example
   * Enterprise
   */
  businessChannel?: string;
  /**
   * @remarks
   * The filter list of client types to which operational messages apply. A maximum of 100 items can be included. Valid values: Windows (Windows client), Mac (macOS client), Web (web client), and Hardware (hardware terminal). For Mac, macOS is also supported. The matching is not case-sensitive. If multiple types are specified, a match occurs if any type matches. Do not pass the same type repeatedly. To filter by client type, provide a non-empty list. If this parameter is not specified, messages are not filtered by client type. Do not specify this parameter when querying NOTIFICATION messages.
   */
  clientTypes?: string[];
  /**
   * @remarks
   * The search keyword, which is used to perform a fuzzy match on the message title or body. A match occurs if either the title or the body matches the keyword. If this parameter is not specified or an empty string is provided, messages are not filtered by keyword.
   * 
   * @example
   * System maintenance
   */
  keyword?: string;
  /**
   * @remarks
   * The list of message IDs to query. A maximum of 100 message IDs can be included. If multiple IDs are provided, a match occurs if any ID matches. If this parameter is not specified or an empty list is provided, messages are not filtered by message ID. If no message ID matches, an empty list is returned.
   */
  messageIds?: string[];
  /**
   * @remarks
   * The message level filter condition for notification messages. Valid values: STRONG (strong message) and WEAK (weak message). The values are not case-sensitive. If this parameter is not specified or the value is unrecognized, messages are not filtered by message level. Do not specify this parameter when querying OPERATIONAL messages.
   * 
   * @example
   * STRONG
   */
  messageLevel?: string;
  /**
   * @remarks
   * The message type. Valid values: OPERATIONAL (client operational message), WALLPAPER (desktop wallpaper text message), NOTIFICATION (message center notification), and CUSTOM_WALLPAPER (custom desktop wallpaper). The values are not case-sensitive. If this parameter is not specified or the value is unrecognized, messages are not filtered by message type.
   * 
   * @example
   * NOTIFICATION
   */
  messageType?: string;
  /**
   * @remarks
   * The page number of the query result. Pages start from 1. Default value: 1. If the value is less than 1, it is processed as 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 200. Default value: 200. If the value is less than 1 or greater than 200, it is processed as 200.
   * 
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of target IDs to match. A maximum of 100 items can be included. To filter by target, provide a non-empty list and specify TargetType at the same time. Currently, only the first ID is used for Organization, EndUser, and AdUser. Queries for EndUser and AdUser also match messages targeted at the organization to which the user belongs and all users. Queries for Organization include messages for all convenience users and are compatible with fuzzy matching of organization IDs. Other target matching methods match based on target IDs, and the target type of the returned records is not guaranteed to be consistent with TargetType. Currently, Tag does not perform target ID filtering.
   */
  targetIds?: string[];
  /**
   * @remarks
   * The target matching method. Valid values: AllUsers (all convenience users), EndUser (specified convenience user), Organization (convenience user organization), Desktop (cloud computer), ResourceGroup (resource group), Region (region), Tag (tag), AdAllUsers (all AD users), AdUser (specified AD user), and AdOrg (AD organization). The values are not case-sensitive. If TargetIds is specified, this parameter must also be specified. The target type in the query results is not guaranteed to be consistent with this parameter. If only this parameter is specified without target IDs, no target filtering is applied. Currently, Tag does not perform target filtering.
   * 
   * @example
   * EndUser
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      clientTypes: 'ClientTypes',
      keyword: 'Keyword',
      messageIds: 'MessageIds',
      messageLevel: 'MessageLevel',
      messageType: 'MessageType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      targetIds: 'TargetIds',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      clientTypes: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      messageIds: { 'type': 'array', 'itemType': 'string' },
      messageLevel: 'string',
      messageType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      targetIds: { 'type': 'array', 'itemType': 'string' },
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientTypes)) {
      $dara.Model.validateArray(this.clientTypes);
    }
    if(Array.isArray(this.messageIds)) {
      $dara.Model.validateArray(this.messageIds);
    }
    if(Array.isArray(this.targetIds)) {
      $dara.Model.validateArray(this.targetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

