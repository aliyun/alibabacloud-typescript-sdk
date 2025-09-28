// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsShrinkRequest extends $dara.Model {
  eventLevelsShrink?: string;
  eventStatusShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  eventTypesShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
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

