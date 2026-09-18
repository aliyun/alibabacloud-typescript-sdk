// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotListConversationsRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination cursor for notification channels. Do not specify this parameter for the first query. For subsequent queries, pass in the value of Data.AutomationOverview.Destinations.NextCursor from the previous response.
   * 
   * @example
   * 123
   */
  destinationCursor?: string;
  /**
   * @remarks
   * The number of entries per page for the notification channel list. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  destinationPageSize?: number;
  /**
   * @remarks
   * Specifies whether to return the overview of scheduled tasks and notification channels for the account. A value of true indicates that the overview is returned. If this parameter is not specified, the overview is not returned.
   * 
   * @example
   * true
   */
  includeAutomationOverview?: boolean;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The pagination cursor. Do not specify this parameter for the first query. For subsequent queries, pass in the value of Data.AutomationOverview.Tasks.NextCursor from the previous response.
   * 
   * @example
   * 123
   */
  taskCursor?: string;
  /**
   * @remarks
   * The number of entries per page for the scheduled task list. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  taskPageSize?: number;
  static names(): { [key: string]: string } {
    return {
      destinationCursor: 'DestinationCursor',
      destinationPageSize: 'DestinationPageSize',
      includeAutomationOverview: 'IncludeAutomationOverview',
      page: 'Page',
      regionId: 'RegionId',
      size: 'Size',
      taskCursor: 'TaskCursor',
      taskPageSize: 'TaskPageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCursor: 'string',
      destinationPageSize: 'number',
      includeAutomationOverview: 'boolean',
      page: 'number',
      regionId: 'string',
      size: 'number',
      taskCursor: 'string',
      taskPageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

