// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectoryTreeResponseBodyDataChildren extends $dara.Model {
  /**
   * @remarks
   * Directory type.
   * 
   * @example
   * codeManage
   */
  categoryType?: string;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * 300000907
   */
  creator?: string;
  /**
   * @remarks
   * Creator name.
   * 
   * @example
   * John
   */
  creatorName?: string;
  /**
   * @remarks
   * Data cell ID.
   * 
   * @example
   * 41342
   */
  dataCellId?: number;
  /**
   * @remarks
   * Directory path. Valid only for file or resource nodes.
   * 
   * @example
   * /
   */
  dirName?: string;
  /**
   * @remarks
   * Creation time. Empty for non-entity object nodes.
   * 
   * @example
   * 2024-11-01 18:08:17
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time. Empty for non-entity object nodes.
   * 
   * @example
   * 2024-11-01 18:08:17
   */
  gmtModified?: string;
  /**
   * @remarks
   * Directory ID.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * Last modifier ID.
   * 
   * @example
   * 300000907
   */
  lastModifier?: string;
  /**
   * @remarks
   * Last modifier name.
   * 
   * @example
   * John
   */
  lastModifierName?: string;
  /**
   * @remarks
   * Display name of the object.
   * 
   * @example
   * 代码管理
   */
  name?: string;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * Directory string ID.
   * 
   * @example
   * 3
   */
  stringId?: string;
  /**
   * @remarks
   * Object type.
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
   * Directory type.
   * 
   * @example
   * codeManage
   */
  categoryType?: string;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * 300000907
   */
  creator?: string;
  /**
   * @remarks
   * Creator name.
   * 
   * @example
   * John
   */
  creatorName?: string;
  /**
   * @remarks
   * Data cell ID.
   * 
   * @example
   * 3213
   */
  dataCellId?: number;
  /**
   * @remarks
   * Directory path. Valid only for file or resource nodes.
   * 
   * @example
   * /
   */
  dirName?: string;
  /**
   * @remarks
   * Creation time. Empty for non-entity object nodes.
   * 
   * @example
   * 2024-11-01 18:08:17
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time. Empty for non-entity object nodes.
   * 
   * @example
   * 2024-11-01 18:08:17
   */
  gmtModified?: string;
  /**
   * @remarks
   * Directory ID.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * Last modifier ID.
   * 
   * @example
   * 300000907
   */
  lastModifier?: string;
  /**
   * @remarks
   * Last modifier name.
   * 
   * @example
   * John
   */
  lastModifierName?: string;
  /**
   * @remarks
   * Display name of the object.
   * 
   * @example
   * 代码管理
   */
  name?: string;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * Directory string ID.
   * 
   * @example
   * 3
   */
  stringId?: string;
  /**
   * @remarks
   * Object type.
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
   * Child node.
   */
  children?: GetDirectoryTreeResponseBodyDataChildren;
  /**
   * @remarks
   * Parent node.
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
   * Error code. OK indicates a successful request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Directory tree information. Returns the directory tree with all edge information, traversed level by level from the root node.
   */
  data?: GetDirectoryTreeResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
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

