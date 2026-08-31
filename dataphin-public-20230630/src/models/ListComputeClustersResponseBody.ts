// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeClustersResponseBodyPageResultClusterList extends $dara.Model {
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 30012211
   */
  creator?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * John Doe
   */
  creatorName?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * test
   */
  des?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 102311
   */
  id?: number;
  /**
   * @remarks
   * The user who last modified the cluster.
   * 
   * @example
   * 30012211
   */
  modifier?: string;
  /**
   * @remarks
   * The user who last modified the cluster.
   * 
   * @example
   * John Doe
   */
  modifierName?: string;
  /**
   * @remarks
   * The time when the cluster was last updated.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cluster_test
   */
  name?: string;
  /**
   * @remarks
   * The cluster version.
   * 
   * @example
   * CDH6
   */
  typeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      des: 'Des',
      id: 'Id',
      modifier: 'Modifier',
      modifierName: 'ModifierName',
      modifyTime: 'ModifyTime',
      name: 'Name',
      typeVersion: 'TypeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      des: 'string',
      id: 'number',
      modifier: 'string',
      modifierName: 'string',
      modifyTime: 'string',
      name: 'string',
      typeVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeClustersResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paged list of clusters.
   */
  clusterList?: ListComputeClustersResponseBodyPageResultClusterList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: { 'type': 'array', 'itemType': ListComputeClustersResponseBodyPageResultClusterList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clusterList)) {
      $dara.Model.validateArray(this.clusterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The page size. Valid values: 1 to 50. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether a token for the next query exists. If NextToken is empty, no more results are available. If NextToken is returned, the value indicates the token used to start the next query.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3adOhYj269roQctwr/Eik+
   */
  nextToken?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListComputeClustersResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      pageResult: ListComputeClustersResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

