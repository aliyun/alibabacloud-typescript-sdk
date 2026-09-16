// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoTagRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Use this parameter together with NextToken. This parameter takes priority over PageNo and PageSize.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. If a next page exists, the service returns a NextToken value. Pass this value in the next request.
   * 
   * Use this parameter together with MaxResults. This parameter takes priority over PageNo and PageSize.
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
   * The number of entries per page. A maximum of 100 entries can be returned per page.
   * 
   * @example
   * 30
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @remarks
   * The repository ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

