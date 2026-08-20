// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * SUCCESS indicates success. In case of failure, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * PublicApplication
   */
  description?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The folder type.
   * 
   * @example
   * string_value
   */
  directoryKind?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-03-04 13:54:52
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2025-11-14T02:18:27Z
   */
  gmtModified?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The name of the worksheet.
   * 
   * @example
   * conn_ip_101
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital human (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * wd-lxykjnnw4lyl9eq
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * oss://clg-paimon-4a00f1ac43464714b86fb54ca41a84c9/db-abc73646-6a08-4b96-820f-3d1d547a1e3b.db/tbl-c8a33522-5398-4f8e-9a2a-fba1efad94d1
   */
  path?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 375701FC-2FB9-5782-BE8F-A3F5E2F2158C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      directoryId: 'directoryId',
      directoryKind: 'directoryKind',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      message: 'message',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      parentDirectoryId: 'parentDirectoryId',
      path: 'path',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      directoryId: 'string',
      directoryKind: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      message: 'string',
      name: 'string',
      operatingObjectName: 'string',
      parentDirectoryId: 'string',
      path: 'string',
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

