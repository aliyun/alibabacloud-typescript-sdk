// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRLTrajectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query window in UTC RFC3339 format. Default value: now.
   * 
   * @example
   * 2026-08-07T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number, starting from 1. This parameter must be provided together with PageSize. If neither is provided, the default values PageNumber=1 and PageSize=10 are used.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 1000. This parameter must be provided together with PageNumber. If neither is provided, the default value 10 is used.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sample UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3afcfbdf-3956-4ab2-b9cb-f9c204b8fc9c
   */
  promptUid?: string;
  /**
   * @remarks
   * The start time of the query window in UTC RFC3339 format. Default value: EndTime-7d.
   * 
   * @example
   * 2026-08-04T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      promptUid: 'PromptUid',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      promptUid: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

