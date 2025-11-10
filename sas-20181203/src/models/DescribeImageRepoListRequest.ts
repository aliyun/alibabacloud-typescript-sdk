// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRepoListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the field that is used for the query. Valid values:
   * 
   * *   **repoName**: the name of the image repository
   * *   **repoNamespace**: the namespace to which the image repository belongs
   * 
   * >  This parameter takes effect only when the **OperateType** parameter is set to **other**.
   * 
   * @example
   * repoName
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the field that is used for the query.
   * 
   * >  This parameter takes effect only when the **OperateType** parameter is set to **other**.
   * 
   * @example
   * zeus
   */
  fieldValue?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   **count**: counts statistics
   * *   **other**: others
   * 
   * @example
   * count
   */
  operateType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
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
   * The namespace to which the image repository belongs.
   * 
   * @example
   * libssh2
   */
  repoNamespace?: string;
  selected?: number;
  /**
   * @remarks
   * The condition by which the feature is applied. Valid values:
   * 
   * *   **image_repo**: the ID of the image repository
   * 
   * This parameter is required.
   * 
   * @example
   * image_repo
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the feature. Valid values:
   * 
   * *   **image_repo**: image repository protection
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

