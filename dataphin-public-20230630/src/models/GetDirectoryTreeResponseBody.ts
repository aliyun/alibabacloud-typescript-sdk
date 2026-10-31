// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectoryTreeResponseBodyDataChildren extends $dara.Model {
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * codeManage
   */
  categoryType?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 300000907
   */
  creator?: string;
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
   * The data cell ID.
   * 
   * @example
   * 41342
   */
  dataCellId?: number;
  /**
   * @remarks
   * The directory path. This parameter is valid only for file or resource nodes.
   * 
   * @example
   * /
   */
  dirName?: string;
  /**
   * @remarks
   * The creation time. This parameter is empty for non-entity object nodes.
   * 
   * @example
   * 2024-11-01 18:08:17
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time. This parameter is empty for non-entity object nodes.
   * 
   * @example
   * 2024-11-01 18:08:17
   */
  gmtModified?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The ID of the last modifier.
   * 
   * @example
   * 300000907
   */
  lastModifier?: string;
  /**
   * @remarks
   * The name of the last modifier.
   * 
   * @example
   * John
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The display name of the object.
   * 
   * @example
   * Code management
   */
  name?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * The string ID of the directory.
   * 
   * @example
   * 3
   */
  stringId?: string;
  /**
   * @remarks
   * The object type.
   * 
   * @example
   * codeManage
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      creator: 'Creator',
      creatorName: 'CreatorName',
      dataCellId: 'DataCellId',
      dirName: 'DirName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      projectId: 'ProjectId',
      stringId: 'StringId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'string',
      creator: 'string',
      creatorName: 'string',
      dataCellId: 'number',
      dirName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      projectId: 'number',
      stringId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryTreeResponseBodyDataParent extends $dara.Model {
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * codeManage
   */
  categoryType?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 300000907
   */
  creator?: string;
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
   * The data cell ID.
   * 
   * @example
   * 3213
   */
  dataCellId?: number;
  /**
   * @remarks
   * The directory path. This parameter is valid only for file or resource nodes.
   * 
   * @example
   * /
   */
  dirName?: string;
  /**
   * @remarks
   * The creation time. This parameter is empty for non-entity object nodes.
   * 
   * @example
   * 2024-11-01 18:08:17
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time. This parameter is empty for non-entity object nodes.
   * 
   * @example
   * 2024-11-01 18:08:17
   */
  gmtModified?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The ID of the last modifier.
   * 
   * @example
   * 300000907
   */
  lastModifier?: string;
  /**
   * @remarks
   * The name of the last modifier.
   * 
   * @example
   * John
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The display name of the object.
   * 
   * @example
   * Code management
   */
  name?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * The string ID of the directory.
   * 
   * @example
   * 3
   */
  stringId?: string;
  /**
   * @remarks
   * The object type.
   * 
   * @example
   * codeManage
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      creator: 'Creator',
      creatorName: 'CreatorName',
      dataCellId: 'DataCellId',
      dirName: 'DirName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      projectId: 'ProjectId',
      stringId: 'StringId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'string',
      creator: 'string',
      creatorName: 'string',
      dataCellId: 'number',
      dirName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      projectId: 'number',
      stringId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryTreeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The child nodes.
   */
  children?: GetDirectoryTreeResponseBodyDataChildren;
  /**
   * @remarks
   * The parent node.
   */
  parent?: GetDirectoryTreeResponseBodyDataParent;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      parent: 'Parent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: GetDirectoryTreeResponseBodyDataChildren,
      parent: GetDirectoryTreeResponseBodyDataParent,
    };
  }

  validate() {
    if(this.children && typeof (this.children as any).validate === 'function') {
      (this.children as any).validate();
    }
    if(this.parent && typeof (this.parent as any).validate === 'function') {
      (this.parent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryTreeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The directory tree information. The directory tree and all edge information are returned through a level-order traversal starting from the root node.
   */
  data?: GetDirectoryTreeResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetDirectoryTreeResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

