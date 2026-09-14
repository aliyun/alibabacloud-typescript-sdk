// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeResourceAuthUserMappingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The change record ID.
   * 
   * @example
   * 123xx
   */
  changeRecordId?: number;
  /**
   * @remarks
   * Indicates whether the operation succeeded. Valid values:
   * - success: The update succeeded.
   * - fail: The update failed.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      changeRecordId: 'ChangeRecordId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeRecordId: 'number',
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

export class UpdateComputeResourceAuthUserMappingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   */
  data?: UpdateComputeResourceAuthUserMappingsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 10000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateComputeResourceAuthUserMappingsResponseBodyData,
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

