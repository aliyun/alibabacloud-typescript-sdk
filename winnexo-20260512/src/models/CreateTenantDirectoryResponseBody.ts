// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. If the request fails, a specific business error code is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the created directory. If no description is set, the value is empty.
   * 
   * @example
   * Team product materials and operation guides
   */
  description?: string;
  /**
   * @remarks
   * The business ID of the newly created directory. You can use this ID to read or update the knowledge base configuration for standard enterprise root directories.
   * 
   * This parameter is required.
   * 
   * @example
   * kb-example
   */
  directoryId?: string;
  /**
   * @remarks
   * The time when the directory was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1699000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the directory was last modified. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1699000010
   */
  gmtModified?: number;
  /**
   * @remarks
   * The internal primary key of the directory. You can use this key as the parentId when you create a subdirectory. This key is different from the business ID directoryId.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The response message. The value is success if the request is successful. If the request fails, this parameter describes the cause of the error.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The name of the created directory.
   * 
   * This parameter is required.
   * 
   * @example
   * Product knowledge base
   */
  name?: string;
  /**
   * @remarks
   * The legacy single digital employee association field. You cannot use this field to replace the mode and association list returned by GetKnowledgeBaseConfiguration.
   * 
   * @example
   * opt_1
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The internal primary key of the parent directory. This value is empty for enterprise root directories.
   * 
   * @example
   * 1001
   */
  parentId?: number;
  /**
   * @remarks
   * The path of the created directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /Product knowledge base
   */
  path?: string;
  /**
   * @remarks
   * The request tracking ID. You can use this ID to troubleshoot issues related to this call.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the directory belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * The ID of the platform user who created the directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      message: 'message',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      parentId: 'parentId',
      path: 'path',
      requestId: 'requestId',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      directoryId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      message: 'string',
      name: 'string',
      operatingObjectName: 'string',
      parentId: 'number',
      path: 'string',
      requestId: 'string',
      tenantId: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

