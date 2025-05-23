// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackageFilesShrinkRequest extends $dara.Model {
  /**
   * @example
   * 100001
   */
  businessId?: number;
  /**
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @example
   * 2025-01-01
   */
  commitFrom?: string;
  /**
   * @example
   * 2025-01-31
   */
  commitTo?: string;
  /**
   * @example
   * 2003****
   */
  commitUserId?: string;
  fileIdsShrink?: string;
  /**
   * @example
   * Filename
   */
  fileName?: string;
  /**
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @example
   * 8065
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      changeType: 'ChangeType',
      commitFrom: 'CommitFrom',
      commitTo: 'CommitTo',
      commitUserId: 'CommitUserId',
      fileIdsShrink: 'FileIds',
      fileName: 'FileName',
      fileType: 'FileType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      changeType: 'number',
      commitFrom: 'string',
      commitTo: 'string',
      commitUserId: 'string',
      fileIdsShrink: 'string',
      fileName: 'string',
      fileType: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      solutionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

