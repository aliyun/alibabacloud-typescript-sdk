// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the data.
   * 
   * - Example for a dataset: SystemSearch.QuarkCommonNews
   * 
   * @example
   * SystemSearch.QuarkCommonNews
   */
  dataId?: string;
  /**
   * @remarks
   * The data type.
   * 
   * - dataset: a dataset
   * 
   * @example
   * dataset
   */
  dataType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Get a workspaceId](https://help.aliyun.com/document_detail/2587495.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      dataType: 'DataType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

