// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRunMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The metric key of the run.
   * 
   * This parameter is required.
   * 
   * @example
   * loss
   */
  key?: string;
  /**
   * @remarks
   * The maximum number of entries in the request. Default value: 10.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token, which starts from 0. Default value: 0.
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

