// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTagToFlinkClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the business logic was executed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FC13182-B9AF-4E6B-BE51-72669B7C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

