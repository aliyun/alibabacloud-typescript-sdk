// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMaterialFileListRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID of the application instance
   * 
   * This parameter is required.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Folder ID
   * 
   * This parameter is required.
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  directoryId?: string;
  /**
   * @remarks
   * Maximum file size
   * 
   * @example
   * 1024
   */
  maxFileSize?: number;
  /**
   * @remarks
   * Number of results per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Minimum file size
   * 
   * @example
   * 0
   */
  minFileSize?: number;
  /**
   * @remarks
   * Website name
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * Token indicating the start of the next query. It is empty when there is no subsequent query.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Sorting field
   * 
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @remarks
   * Sorting type: ASC or DESC
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * Page number. Default value is 1.
   * 
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Status range
   */
  statusList?: string[];
  /**
   * @remarks
   * File suffix list
   */
  suffixList?: string[];
  /**
   * @remarks
   * List of file types
   */
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

