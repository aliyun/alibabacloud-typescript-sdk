// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMaterialFileListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * This parameter is required.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  directoryId?: string;
  /**
   * @remarks
   * The maximum file size.
   * 
   * @example
   * 1024
   */
  maxFileSize?: number;
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The minimum file size.
   * 
   * @example
   * 0
   */
  minFileSize?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * Test
   */
  name?: string;
  /**
   * @remarks
   * The token that is used to start the next query. If no next query is available, this parameter is left empty.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order. Valid values: ASC and DESC.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of statuses.
   */
  statusListShrink?: string;
  /**
   * @remarks
   * The list of file extensions.
   */
  suffixListShrink?: string;
  /**
   * @remarks
   * The list of file types.
   */
  typeListShrink?: string;
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
      statusListShrink: 'StatusList',
      suffixListShrink: 'SuffixList',
      typeListShrink: 'TypeList',
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
      statusListShrink: 'string',
      suffixListShrink: 'string',
      typeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

