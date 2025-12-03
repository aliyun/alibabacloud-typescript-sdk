// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommitStatusesRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  repositoryIdentity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61cc69557962d29f737a91730b3e86f497f083a3
   */
  sha?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      organizationId: 'organizationId',
      page: 'page',
      pageSize: 'pageSize',
      repositoryIdentity: 'repositoryIdentity',
      sha: 'sha',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      repositoryIdentity: 'string',
      sha: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

