// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserTagMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the ID of the successfully added tag.
   * 
   * @example
   * 0822a7d9-****-****-****-f20163ab9b0d
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Value range:
   * - true: The request succeeded 
   * - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

