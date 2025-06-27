// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkReachableAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result of operation.
   * - **true**: Delete Success.
   * - **false**: Delete Fail.
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
   * 4838F3F2-30E1-5D82-B25A-B9FE33BC3E25
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

