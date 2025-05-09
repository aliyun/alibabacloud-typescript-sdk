// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The environment in which the data sources are used. Valid values:
   * 
   * *   Dev: development environment
   * *   Prod: production environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The name of the data source. Fuzzy match by data source name is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The order in which you want to sort the data sources. Valid values:
   * 
   * *   Desc: descending order
   * *   Asc: ascending order
   * 
   * Default value: Desc
   * 
   * @example
   * Asc
   */
  order?: string;
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 17820
   */
  projectId?: number;
  /**
   * @remarks
   * The field that you want to use to sort the data sources. Valid values:
   * 
   * *   CreateTime
   * *   Id
   * *   Name
   * 
   * Default value: CreateTime
   * 
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @remarks
   * The tag of the data source. This parameter specifies a filter condition.
   * 
   * *   You can specify multiple tags, which are in the logical AND relation. For example, you can query the data sources that contain the following tags: `["tag1", "tag2", "tag3"]`.
   * *   If you do not configure this parameter, tag-based filtering is not performed. You can specify up to 10 tags.
   * 
   * @example
   * ["tag1", "tag2", "tag3"]
   */
  tags?: string;
  /**
   * @remarks
   * The data source types. This parameter specifies a filter condition. You can specify multiple data source types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tags: 'Tags',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      tags: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

