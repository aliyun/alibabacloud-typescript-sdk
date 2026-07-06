// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceRecordV2ResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The deletion result. Valid values:
   * - Y: Succeeded.
   * - N: Failed.
   * 
   * @example
   * Y
   */
  deleted?: string;
  /**
   * @remarks
   * The list of face group codes from which the face data was actually deleted (comma-separated). This parameter is returned with all deleted group codes when FaceGroupCode is not specified.
   * 
   * @example
   * wqe***,dsa***
   */
  deletedGroupCodes?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'Deleted',
      deletedGroupCodes: 'DeletedGroupCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'string',
      deletedGroupCodes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceRecordV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5E63B760-0ECB-5C07-8503-A65C27876968
   */
  requestId?: string;
  /**
   * @remarks
   * The response result.
   */
  result?: DeleteFaceRecordV2ResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DeleteFaceRecordV2ResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

