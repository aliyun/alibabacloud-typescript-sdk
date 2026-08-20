// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVisibleKnowledgeBasesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * admin
   */
  creatorName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * {{7*7}}
   */
  description?: string;
  /**
   * @remarks
   * The directory ID. You can obtain this value by calling the API operation for retrieving the knowledge base directory.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation time. This value is a timestamp in milliseconds.
   * 
   * @example
   * 2025-11-14T02:18:27Z
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-03-26T13:57:42Z
   */
  gmtModified?: number;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * cs-default-umodel-1785637207863_k8s.metric.k8s_csi_node_pv_node_cn-heyuan-acdr-1/c80cf3a4f9d6c496781591bd17d006c6f
   */
  name?: string;
  /**
   * @remarks
   * The file directory information.
   * 
   * @example
   * /test-folder-path1_1773194924773
   */
  path?: string;
  /**
   * @remarks
   * The number of resources in the FAILED state. This parameter is returned only when listing top-level knowledge base directories.
   * 
   * @example
   * 1
   */
  sourceFailedCount?: number;
  /**
   * @remarks
   * The number of resources in the READY state. This parameter is returned only when listing top-level knowledge base directories.
   * 
   * @example
   * 1
   */
  sourceReadyCount?: number;
  /**
   * @remarks
   * The total number of resources in the directory and its subdirectories. This parameter is returned only when listing top-level knowledge base directories.
   * 
   * @example
   * 1
   */
  sourceTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'creatorName',
      description: 'description',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      name: 'name',
      path: 'path',
      sourceFailedCount: 'sourceFailedCount',
      sourceReadyCount: 'sourceReadyCount',
      sourceTotalCount: 'sourceTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      description: 'string',
      directoryId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      path: 'string',
      sourceFailedCount: 'number',
      sourceReadyCount: 'number',
      sourceTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVisibleKnowledgeBasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The file information.
   */
  items?: ListVisibleKnowledgeBasesResponseBodyItems[];
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
   * Id of the request
   * 
   * @example
   * 190F5425-A145-5BBA-980F-082ADB0CA6AF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListVisibleKnowledgeBasesResponseBodyItems },
      message: 'string',
      requestId: 'string',
      total: 'number',
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

