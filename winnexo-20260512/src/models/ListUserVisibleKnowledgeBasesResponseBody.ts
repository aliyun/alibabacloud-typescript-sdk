// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserVisibleKnowledgeBasesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 1
   */
  creatorId?: number;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * John
   */
  creatorName?: string;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * Product materials and usage instructions
   */
  description?: string;
  /**
   * @remarks
   * The directory ID of the enterprise knowledge base.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * normal
   */
  directoryKind?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * TENANT
   */
  directoryType?: string;
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
   * The file name.
   * 
   * @example
   * Product Knowledge Base
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'creatorId',
      creatorName: 'creatorName',
      description: 'description',
      directoryId: 'directoryId',
      directoryKind: 'directoryKind',
      directoryType: 'directoryType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'number',
      creatorName: 'string',
      description: 'string',
      directoryId: 'string',
      directoryKind: 'string',
      directoryType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserVisibleKnowledgeBasesResponseBody extends $dara.Model {
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
   * The result list.
   * Maximum size:
   * 	50
   */
  items?: ListUserVisibleKnowledgeBasesResponseBodyItems[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListUserVisibleKnowledgeBasesResponseBodyItems },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

