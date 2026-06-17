// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The metadata schema of the collection, returned as a JSON string. This string represents a map where keys are field names and values are their data types.
   * 
   * > - See [Data types](https://help.aliyun.com/document_detail/424383.html) for the list of supported data types.
   * >
   * > - The \\"money\\" data type is not supported.
   * 
   * @example
   * {"title":"text","content":"text","response":"int"}
   */
  metadata?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the API request. Valid values:
   * 
   * - **Other values**: The request failed.
   * 
   * - **success**: The request was successful.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      metadata: 'Metadata',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      metadata: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

