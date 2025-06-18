// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventCenterQueryEventsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * default
   */
  busName?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 0 to 10000. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * 用来标记当前开始读取的位置。置空表示从头开始。
   * 
   * @example
   * 100
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'Body',
      busName: 'BusName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      busName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

