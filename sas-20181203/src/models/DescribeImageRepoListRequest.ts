// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRepoListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The search field. Valid values:
   * 
   * - **repoName**: image repository name
   * - **repoNamespace**: image repository namespace
   * 
   * > This parameter takes effect only when **OperateType** is set to **other**.
   * 
   * @example
   * repoName
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the search field.
   * > This parameter takes effect only when **OperateType** is set to **other**.
   * 
   * @example
   * zeus
   */
  fieldValue?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **count**: statistics
   * - **other**: other.
   * 
   * @example
   * count
   */
  operateType?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: 20. If you leave this parameter empty, 20 entries are returned per page during paging.
   * > Set PageSize to a non-empty value.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * script7
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the container image repository.
   * 
   * @example
   * libssh2
   */
  repoNamespace?: string;
  /**
   * @remarks
   * Specifies whether the item is selected. Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  selected?: number;
  /**
   * @remarks
   * The dimension of the defense switch configuration. Valid values:
   * - **image_repo**: image repository ID.
   * 
   * This parameter is required.
   * 
   * @example
   * image_repo
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the defense switch. Valid values:
   * - **image_repo**: image repository defense.
   * 
   * This parameter is required.
   * 
   * @example
   * image_repo
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      operateType: 'OperateType',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      selected: 'Selected',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      fieldName: 'string',
      fieldValue: 'string',
      operateType: 'string',
      pageSize: 'number',
      repoName: 'string',
      repoNamespace: 'string',
      selected: 'number',
      targetType: 'string',
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

