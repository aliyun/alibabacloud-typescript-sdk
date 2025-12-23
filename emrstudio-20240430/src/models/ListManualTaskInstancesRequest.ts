// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManualTaskInstancesRequest extends $dara.Model {
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * test
   */
  searchVal?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      startTime: 'startTime',
      status: 'status',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      searchVal: 'string',
      startTime: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

