// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseDirectoryResponseBody extends $dara.Model {
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
   * This is default function description by fc-deploy component
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory type.
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
   * 2025-11-14T02:18:27Z
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2026-01-19T01:48:56Z
   */
  gmtModified?: number;
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
   * @example
   * p-toolset-89550434-4e20-4e4e-bcac-9ab81b82c5b3
   */
  name?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * wd-lxykjnnw4lyl9eq
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * The path of the node.
   * 
   * @example
   * UVCIpI0siUski9iw
   */
  path?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C474BFC7-7B11-5D92-971E-74AA82EC495B
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

