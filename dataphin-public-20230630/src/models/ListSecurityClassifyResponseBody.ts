// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityClassifyResponseBodyClassifyListResultClassifyList extends $dara.Model {
  /**
   * @remarks
   * The catalog path of the classification.
   * 
   * @example
   * /Root/Personal Information
   */
  catalogPath?: string;
  /**
   * @remarks
   * The classification description.
   * 
   * @example
   * Personal sensitive information classification
   */
  description?: string;
  /**
   * @remarks
   * The number of effective fields.
   * 
   * @example
   * 100
   */
  effectiveFieldCount?: number;
  /**
   * @remarks
   * The classification ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether a masking rule is bound.
   * 
   * @example
   * false
   */
  isBindDesensitizeRule?: boolean;
  /**
   * @remarks
   * The level ID.
   * 
   * @example
   * 1
   */
  levelId?: number;
  /**
   * @remarks
   * The level name.
   * 
   * @example
   * L3
   */
  levelName?: string;
  /**
   * @remarks
   * The classification name.
   * 
   * @example
   * Personal Information
   */
  name?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The short name of the classification.
   * 
   * @example
   * PI
   */
  shortName?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      catalogPath: 'CatalogPath',
      description: 'Description',
      effectiveFieldCount: 'EffectiveFieldCount',
      id: 'Id',
      isBindDesensitizeRule: 'IsBindDesensitizeRule',
      levelId: 'LevelId',
      levelName: 'LevelName',
      name: 'Name',
      priority: 'Priority',
      shortName: 'ShortName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogPath: 'string',
      description: 'string',
      effectiveFieldCount: 'number',
      id: 'number',
      isBindDesensitizeRule: 'boolean',
      levelId: 'number',
      levelName: 'string',
      name: 'string',
      priority: 'number',
      shortName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityClassifyResponseBodyClassifyListResult extends $dara.Model {
  /**
   * @remarks
   * The list of data classifications.
   */
  classifyList?: ListSecurityClassifyResponseBodyClassifyListResultClassifyList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      classifyList: 'ClassifyList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classifyList: { 'type': 'array', 'itemType': ListSecurityClassifyResponseBodyClassifyListResultClassifyList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.classifyList)) {
      $dara.Model.validateArray(this.classifyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityClassifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the data classification list.
   */
  classifyListResult?: ListSecurityClassifyResponseBodyClassifyListResult;
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend error.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      classifyListResult: 'ClassifyListResult',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classifyListResult: ListSecurityClassifyResponseBodyClassifyListResult,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.classifyListResult && typeof (this.classifyListResult as any).validate === 'function') {
      (this.classifyListResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

