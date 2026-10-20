// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of event levels.
   */
  eventLevelsShrink?: string;
  /**
   * @remarks
   * The list of event statuses.
   */
  eventStatusShrink?: string;
  /**
   * @remarks
   * The list of event types.
   * 
   * This parameter is required.
   */
  eventTypesShrink?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of resource IDs.
   */
  resourceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      eventLevelsShrink: 'EventLevels',
      eventStatusShrink: 'EventStatus',
      eventTypesShrink: 'EventTypes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceIdsShrink: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventLevelsShrink: 'string',
      eventStatusShrink: 'string',
      eventTypesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

