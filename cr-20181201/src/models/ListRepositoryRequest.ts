// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the ListInstance operation to query existing Enterprise instances.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of returned results.
   * 
   * Use this parameter together with the NextToken parameter. This parameter takes precedence over PageNo and PageSize.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. If a next page exists, the service returns a NextToken value, which you can pass in the next request.
   * 
   * Use this parameter together with the MaxResults parameter. This parameter takes precedence over PageNo and PageSize.
   * 
   * @example
   * *****V3MpHK1AP0pfERHZN5pu6lESTRpd5hnHNnmKOP/+w9F
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. If the specified value exceeds 100, the system returns a parameter error or uses 100 as the maximum number of returned entries.
   * 
   * @example
   * 30
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * repo-test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the repository namespace.
   * 
   * @example
   * repo-namespace-test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The repository status. Valid values:
   * 
   * - `NORMAL`: Normal.
   * 
   * - `DELETING`: Deleting.
   * 
   * - `DELETED`: Deleted.
   * 
   * - `ALL`: All repository statuses.
   * 
   * @example
   * ALL
   */
  repoStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

