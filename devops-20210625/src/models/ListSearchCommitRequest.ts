// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchCommitRequestRepoPath extends $dara.Model {
  /**
   * @example
   * term
   */
  matchType?: string;
  /**
   * @example
   * equal
   */
  operatorType?: string;
  /**
   * @example
   * orgId/test-group/spring-boot-demo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      operatorType: 'operatorType',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      operatorType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchCommitRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @example
   * default
   */
  order?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  repoPath?: ListSearchCommitRequestRepoPath;
  /**
   * @example
   * all
   */
  scope?: string;
  /**
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60d54f3daccf2bbd6659f3ad
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      order: 'order',
      page: 'page',
      pageSize: 'pageSize',
      repoPath: 'repoPath',
      scope: 'scope',
      sort: 'sort',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      order: 'string',
      page: 'number',
      pageSize: 'number',
      repoPath: ListSearchCommitRequestRepoPath,
      scope: 'string',
      sort: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    if(this.repoPath && typeof (this.repoPath as any).validate === 'function') {
      (this.repoPath as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

