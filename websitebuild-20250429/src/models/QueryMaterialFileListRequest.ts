// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMaterialFileListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  directoryId?: string;
  /**
   * @example
   * 1024
   */
  maxFileSize?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  minFileSize?: number;
  name?: string;
  /**
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  statusList?: string[];
  suffixList?: string[];
  typeList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      directoryId: 'DirectoryId',
      maxFileSize: 'MaxFileSize',
      maxResults: 'MaxResults',
      minFileSize: 'MinFileSize',
      name: 'Name',
      nextToken: 'NextToken',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      suffixList: 'SuffixList',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      directoryId: 'string',
      maxFileSize: 'number',
      maxResults: 'number',
      minFileSize: 'number',
      name: 'string',
      nextToken: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      suffixList: { 'type': 'array', 'itemType': 'string' },
      typeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.suffixList)) {
      $dara.Model.validateArray(this.suffixList);
    }
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

