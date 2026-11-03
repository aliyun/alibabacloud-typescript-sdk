// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRunMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the metric for the run.
   * 
   * This parameter is required.
   * 
   * @example
   * loss
   */
  key?: string;
  /**
   * @remarks
   * The maximum number of results to return. Default value: 10.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token, starting from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  pageToken?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      maxResults: 'MaxResults',
      pageToken: 'PageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      maxResults: 'number',
      pageToken: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

