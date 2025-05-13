// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the image. This parameter is valid only for custom images.
   * 
   * *   PUBLIC: The image is visible to all users.
   * *   PRIVATE: The image is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  imageUri?: string;
  /**
   * @remarks
   * The tag filter conditions. Multiple conditions are separated by commas (,). The format of a single condition filter is `key=value`. The following keys are supported:
   * 
   * *   system.chipType
   * *   system.dsw.cudaVersion
   * *   system.dsw.fromImageId
   * *   system.dsw.fromInstanceId
   * *   system.dsw.id
   * *   system.dsw.os
   * *   system.dsw.osVersion
   * *   system.dsw.resourceType
   * *   system.dsw.rootImageId
   * *   system.dsw.stage
   * *   system.dsw.tag
   * *   system.dsw.type
   * *   system.framework
   * *   system.origin
   * *   system.pythonVersion
   * *   system.source
   * *   system.supported.dlc
   * *   system.supported.dsw
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
   * The order in which the entries are sorted by the specific field on the returned page. This parameter must be used together with SortBy. Default value: ASC. Valid values:
   * 
   * *   ASC: ascending order
   * *   DESC: descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The image name and description that are used for fuzzy search.
   * 
   * @example
   * name
   */
  query?: string;
  /**
   * @remarks
   * The field used for sorting. The GmtCreateTime field is used.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to display non-essential information, which contains tags. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
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

