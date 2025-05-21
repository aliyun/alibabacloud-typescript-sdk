// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsStatResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The system event category. Valid values:
   * 
   * *   Exception
   * *   Optimize
   * *   Notification
   * *   Maintenance
   * 
   * @example
   * Exception
   */
  eventCategory?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventCategory: 'EventCategory',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCategory: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

