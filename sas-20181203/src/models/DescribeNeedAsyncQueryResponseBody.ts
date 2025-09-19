// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNeedAsyncQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the result is returned. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DFD6277-CC36-57F7-ACE6-F5952XXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

