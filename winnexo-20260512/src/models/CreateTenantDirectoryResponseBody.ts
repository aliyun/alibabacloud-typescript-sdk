// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the to-do card type.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1
   */
  gmtModified?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital employee (the operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The ID of the parent node.
   * 
   * @example
   * 1
   */
  parentId?: number;
  /**
   * @remarks
   * The path of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/oss/file.pdf
   */
  path?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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

