// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceUserGroupAndDeviceGroupRelationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The associated control ID.
   * 
   * @example
   * qcb2yea4ha4dxmly
   */
  controlId?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2020-11-20 18:59:01
   */
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      modifiedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupAndDeviceGroupRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The face synchronization relationship information.
   */
  data?: AddFaceUserGroupAndDeviceGroupRelationResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A13279A-5640-45E7-87AA-83750541AD0E
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
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddFaceUserGroupAndDeviceGroupRelationResponseBodyData,
      errorMessage: 'string',
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

