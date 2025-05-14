// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The source from which the template was created.
   * 
   * Valid values:
   * 
   * *   AliyunConsole
   * *   WebSDK
   * *   OpenAPI
   * 
   * @example
   * OpenAPI
   */
  createSource?: string;
  /**
   * @remarks
   * The search keyword. You can use the template ID or title as the keyword to search for templates.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting parameter. By default, the query results are sorted by creation time in descending order.
   * 
   * Valid values:
   * 
   * *   CreationTime:Asc: sorted by creation time in ascending order.
   * *   CreationTime:Desc: sorted by creation time in descending order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortType?: string;
  /**
   * @remarks
   * The template state.
   * 
   * Valid values:
   * 
   * *   UploadFailed: Failed to upload the video.
   * *   ProcessFailed: Failed to process the advanced template.
   * *   Available: The template is available.
   * *   Uploading: The video is being uploaded.
   * *   Created: The template is created but not ready for use.
   * *   Processing: The advanced template is being processed.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The template type.
   * 
   * Valid values:
   * 
   * *   Timeline
   * *   VETemplate
   * 
   * @example
   * Timeline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createSource: 'CreateSource',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortType: 'SortType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSource: 'string',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortType: 'string',
      status: 'string',
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

