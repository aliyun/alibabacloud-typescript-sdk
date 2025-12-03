// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunsRequest extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  endTime?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * aaaaaa
   */
  nextToken?: string;
  /**
   * @example
   * 1586863220000
   */
  startTime?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * 1
   */
  triggerMode?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      startTime: 'startTime',
      status: 'status',
      triggerMode: 'triggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      startTime: 'number',
      status: 'string',
      triggerMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

