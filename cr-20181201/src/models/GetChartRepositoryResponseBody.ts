// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChartRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the chart repository was created.
   * 
   * @example
   * 1563767620000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The time when the chart repository was last modified.
   * 
   * @example
   * 1563767700000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The ID of the chart repository.
   * 
   * @example
   * crcr-c7letfwev5oq****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the chart repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the chart repository belongs.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The status of the chart repository. Valid values:
   * 
   * *   `NORMAL`: The repository is normal.
   * *   `DELETING`: The repository is being deleted.
   * 
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @remarks
   * The type of the chart repository. Valid values:
   * 
   * *   `PUBLIC`: a public repository
   * *   `PRIVATE`: a private repository
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3F6AB56-DEF4-4FF5-8DE4-680362C0E21F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The summary about the chart repository.
   * 
   * @example
   * test
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

