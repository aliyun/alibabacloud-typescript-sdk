// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectoryTreeResponseBodyDataChildren extends $dara.Model {
  /**
   * @example
   * codeManage
   */
  categoryType?: string;
  /**
   * @example
   * 300000907
   */
  creator?: string;
  /**
   * @example
   * John
   */
  creatorName?: string;
  /**
   * @example
   * 41342
   */
  dataCellId?: number;
  /**
   * @example
   * /
   */
  dirName?: string;
  /**
   * @example
   * 2024-11-01 18:08:17
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-11-01 18:08:17
   */
  gmtModified?: string;
  /**
   * @example
   * 3
   */
  id?: number;
  /**
   * @example
   * 300000907
   */
  lastModifier?: string;
  /**
   * @example
   * John
   */
  lastModifierName?: string;
  /**
   * @example
   * 代码管理
   */
  name?: string;
  /**
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @example
   * 3
   */
  stringId?: string;
  /**
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
   * @example
   * codeManage
   */
  categoryType?: string;
  /**
   * @example
   * 300000907
   */
  creator?: string;
  /**
   * @example
   * John
   */
  creatorName?: string;
  /**
   * @example
   * 3213
   */
  dataCellId?: number;
  /**
   * @example
   * /
   */
  dirName?: string;
  /**
   * @example
   * 2024-11-01 18:08:17
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-11-01 18:08:17
   */
  gmtModified?: string;
  /**
   * @example
   * 3
   */
  id?: number;
  /**
   * @example
   * 300000907
   */
  lastModifier?: string;
  /**
   * @example
   * John
   */
  lastModifierName?: string;
  /**
   * @example
   * 代码管理
   */
  name?: string;
  /**
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @example
   * 3
   */
  stringId?: string;
  /**
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
  children?: GetDirectoryTreeResponseBodyDataChildren;
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
   * @example
   * OK
   */
  code?: string;
  data?: GetDirectoryTreeResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

