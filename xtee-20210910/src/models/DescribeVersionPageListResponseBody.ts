// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionPageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Change content.
   * 
   * @example
   * {\\"description\\":\\"自定义变量\\",\\"expression\\":\\"1\\",\\"expressionTitle\\":\\"1\\",\\"expressionVariable\\":\\"\\",\\"fieldRank\\":0,\\"id\\":392023,\\"name\\":\\"ex_OERlw0Zqfb23\\",\\"outlier\\":\\"SYS_ERROR\\",\\"outputs\\":\\"STRING\\",\\"refObjId\\":\\"de_auevox0336\\",\\"region\\":\\"SH\\",\\"title\\":\\"自定义变量\\",\\"version\\":4}
   */
  content?: string;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * root
   */
  creator?: string;
  /**
   * @remarks
   * Variable description.
   * 
   * @example
   * 变量描述
   */
  description?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Primary key ID of the version.
   * 
   * @example
   * 808
   */
  id?: number;
  /**
   * @remarks
   * Modifier.
   * 
   * @example
   * root
   */
  modifier?: string;
  /**
   * @remarks
   * Name of the variable.
   * 
   * @example
   * ex_OERlw0Zqfb23
   */
  objectCode?: string;
  /**
   * @remarks
   * Primary key ID of the variable.
   * 
   * @example
   * 392023
   */
  objectId?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Variable type.
   * 
   * @example
   * EXPRESSION
   */
  type?: string;
  /**
   * @remarks
   * User UID.
   * 
   * @example
   * 151222222222226
   */
  userId?: number;
  /**
   * @remarks
   * Version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      creator: 'creator',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      modifier: 'modifier',
      objectCode: 'objectCode',
      objectId: 'objectId',
      region: 'region',
      type: 'type',
      userId: 'userId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      creator: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      modifier: 'string',
      objectCode: 'string',
      objectId: 'number',
      region: 'string',
      type: 'string',
      userId: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionPageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum amount of data to be read in this call, with a default value of 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * 用来表示当前调用返回读取到的位置。空代表数据已经读取完毕。
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page, with a default value of 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object.
   */
  resultObject?: DescribeVersionPageListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resultObject: { 'type': 'array', 'itemType': DescribeVersionPageListResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

