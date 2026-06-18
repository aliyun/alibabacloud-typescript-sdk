// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStructureImportTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Slink task ID.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      slinkTaskId: 'SlinkTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slinkTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructureImportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: CreateStructureImportTaskResponseBodyData;
  /**
   * @remarks
   * The response message. > This parameter is empty if the request is successful. If the request fails, an exception message is returned, such as an error code.
   * 
   * @example
   * *****
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 73559800-3c8c-****-bd40-99cfcff3fe1e
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateStructureImportTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
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

