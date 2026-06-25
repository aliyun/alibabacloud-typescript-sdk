// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the image. This parameter is valid only for custom images.
   * 
   * - PUBLIC: The image is public.
   * 
   * - PRIVATE: The image is private.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  imageUri?: string;
  /**
   * @remarks
   * The filter conditions for labels. Separate multiple conditions with commas (,).
   * The format for a single filter condition is `Key=Value`.
   * The supported values for Key are:
   * 
   * - system.chipType
   * 
   * - system.dsw\\.cudaVersion
   * 
   * - system.dsw\\.fromImageId
   * 
   * - system.dsw\\.fromInstanceId
   * 
   * - system.dsw\\.id
   * 
   * - system.dsw\\.os
   * 
   * - system.dsw\\.osVersion
   * 
   * - system.dsw\\.resourceType
   * 
   * - system.dsw\\.rootImageId
   * 
   * - system.dsw\\.stage
   * 
   * - system.dsw\\.tag
   * 
   * - system.dsw\\.type
   * 
   * - system.framework
   * 
   * - system.origin
   * 
   * - system.pythonVersion
   * 
   * - system.source
   * 
   * - system.supported.dlc
   * 
   * - system.supported.dsw
   * 
   * @example
   * system.framework=XGBoost 1.6.0,system.official=true
   */
  labels?: string;
  /**
   * @remarks
   * The name of the image. Fuzzy search is supported.
   * 
   * @example
   * tensorflow_2.9
   */
  name?: string;
  /**
   * @remarks
   * The order in which to sort the results of a paged query. This parameter is used with SortBy. The default value is ASC.
   * 
   * - ASC: ascending order.
   * 
   * - DESC: descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number of the image list. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs a fuzzy search by image name and description.
   * 
   * @example
   * name
   */
  query?: string;
  /**
   * @remarks
   * The field to use for sorting in a paged query. Currently, only the GmtCreateTime field is used for sorting.
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
   * 
   * - false: Does not include non-essential information.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace ID. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

