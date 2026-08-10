// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownloadJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The Logstore name.
   * 
   * @example
   * ali-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The start row of the query. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of log download tasks to retrieve in a single query.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

