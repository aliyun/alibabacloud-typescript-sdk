// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchDataTrackResultResponseBodyTrackResultEventList } from "./SearchDataTrackResultResponseBodyTrackResultEventList";
import { SearchDataTrackResultResponseBodyTrackResultTableInfoList } from "./SearchDataTrackResultResponseBodyTrackResultTableInfoList";


export class SearchDataTrackResultResponseBodyTrackResult extends $dara.Model {
  /**
   * @remarks
   * The details of the event logs.
   */
  eventList?: SearchDataTrackResultResponseBodyTrackResultEventList[];
  /**
   * @remarks
   * The metadata of tables for which you track data operations.
   */
  tableInfoList?: SearchDataTrackResultResponseBodyTrackResultTableInfoList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 109
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      tableInfoList: 'TableInfoList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': SearchDataTrackResultResponseBodyTrackResultEventList },
      tableInfoList: { 'type': 'array', 'itemType': SearchDataTrackResultResponseBodyTrackResultTableInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    if(Array.isArray(this.tableInfoList)) {
      $dara.Model.validateArray(this.tableInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

