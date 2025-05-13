// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOverviewResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: string;
  /**
   * @example
   * No access permission for the namespace [***]
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

