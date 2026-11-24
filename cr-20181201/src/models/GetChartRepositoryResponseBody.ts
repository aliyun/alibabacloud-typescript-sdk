// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChartRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the chart repository was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1563767620000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - `true`: The API call is successful.
   * 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The time when the chart repository was last modified. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1563767700000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The chart repository ID.
   * 
   * @example
   * crcr-c7letfwev5oq****
   */
  repoId?: string;
  /**
   * @remarks
   * The chart repository name.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the chart repository belongs.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The status of the chart repository. Valid values:
   * 
   * - `NORMAL`: Normal.
   *   
   * - `DELETING`: Being deleted.
   * 
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @remarks
   * The type of the chart repository. Valid values:
   * 
   * - `PUBLIC`: public repository.
   * 
   * - `PRIVATE`: private repository.
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The chart repository summary.
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

