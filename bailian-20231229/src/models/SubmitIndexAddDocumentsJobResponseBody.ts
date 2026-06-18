// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIndexAddDocumentsJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job ID, also known as `JobId`.
   * 
   * @example
   * 42687eb254a34802bed398357f5498ae
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIndexAddDocumentsJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned on failure.
   * 
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: SubmitIndexAddDocumentsJobResponseBodyData;
  /**
   * @remarks
   * The error message returned on failure.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 778C0B3B-xxxx-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
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
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitIndexAddDocumentsJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

