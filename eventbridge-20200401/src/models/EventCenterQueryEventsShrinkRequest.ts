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
   * The maximum number of results to return. Valid values: 0 to 10,000. The default value is 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
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

