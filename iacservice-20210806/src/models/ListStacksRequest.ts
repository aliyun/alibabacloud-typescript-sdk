// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStacksRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to perform a fuzzy search by stack name.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 21a90f5d-a469-4ac4-a8ea-f6e1e7470e6f
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Default value: 100. Maximum value: 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. This parameter is empty if no more pages are available.
   * 
   * @example
   * LC4NJL3Ru2bIiRdnbADPQp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The stack status.
   * | Name | Description |
   * |------|------|
   * | Creating | Being created |
   * | Created | Creation complete |
   * | Waiting | Waiting for deployment |
   * | Deploying | Being deployed |
   * | Deployed | Deployment complete |
   * | Errored | Deployment failed |
   * | Deleting | Being deleted |
   * | Deleted | Deleted |
   * | DeleteFailed | Deletion failed |
   * | DetectTriggered | Drift detection triggered |.
   * 
   * @example
   * Deployed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      kmsKeyId: 'kmsKeyId',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      kmsKeyId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

