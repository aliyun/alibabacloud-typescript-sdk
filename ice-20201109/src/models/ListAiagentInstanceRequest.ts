// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4***
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The end time of the query in ISO 8601 format. No default value.
   * 
   * @example
   * 2023-01-02T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: 0 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query in ISO 8601 format. No default value.
   * 
   * @example
   * 2023-01-01T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

