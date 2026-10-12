// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the image. Currently only takes effect for custom images.
   * 
   * - PUBLIC: Public.
   * - PRIVATE: Private.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The image URI.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-compression/nlp:gpu
   */
  imageUri?: string;
  /**
   * @remarks
   * The label filter conditions. Separate multiple conditions with commas (,).
   * The format of a single filter condition is `Key=Value`.
   * Valid values of Key:
   * 
   * - system.chipType
   * - system.dsw.cudaVersion
   * - system.dsw.fromImageId
   * - system.dsw.fromInstanceId
   * - system.dsw.id
   * - system.dsw.os
   * - system.dsw.osVersion
   * - system.dsw.resourceType
   * - system.dsw.rootImageId
   * - system.dsw.stage
   * - system.dsw.tag
   * - system.dsw.type
   * - system.framework
   * - system.origin
   * - system.pythonVersion
   * - system.source
   * - system.supported.dlc
   * - system.supported.dsw
   * 
   * @example
   * system.framework=XGBoost 1.6.0,system.official=true
   */
  labels?: string;
  /**
   * @remarks
   * The image name. Fuzzy match is supported.
   * 
   * @example
   * tensorflow_2.9
   */
  name?: string;
  /**
   * @remarks
   * The options. Currently supports ExactMatchName for exact match search on Name.
   * 
   * @example
   * ExactMatchName
   */
  options?: string;
  /**
   * @remarks
   * The sort order for the specified sort field in a paged query. Used together with SortBy. Default value: ASC.
   * - ASC: Ascending order.
   * - DESC: Descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number of the image list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Fuzzy searches by image name and description.
   * 
   * @example
   * name
   */
  query?: string;
  /**
   * @remarks
   * The sort field for a paged query. Currently, the GmtCreateTime field is used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to display non-essential information. Non-essential information currently includes Labels. Valid values:
   * 
   * - true: Includes non-essential information.
   * - false: Does not include non-essential information.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace ID. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 20******55
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      options: 'Options',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      sortBy: 'SortBy',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      imageUri: 'string',
      labels: 'string',
      name: 'string',
      options: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      sortBy: 'string',
      verbose: 'boolean',
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

