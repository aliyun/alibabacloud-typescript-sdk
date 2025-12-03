// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchRepositoryRequestRepoPath extends $dara.Model {
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

export class ListSearchRepositoryRequest extends $dara.Model {
  /**
   * @example
   * 1840004904455497
   */
  aliyunPk?: string;
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
  repoPath?: ListSearchRepositoryRequestRepoPath;
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
   * @example
   * 0
   */
  visibilityLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61e54b0e0bb300d827e1ae27
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
      keyword: 'keyword',
      order: 'order',
      page: 'page',
      pageSize: 'pageSize',
      repoPath: 'repoPath',
      scope: 'scope',
      sort: 'sort',
      visibilityLevel: 'visibilityLevel',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      keyword: 'string',
      order: 'string',
      page: 'number',
      pageSize: 'number',
      repoPath: ListSearchRepositoryRequestRepoPath,
      scope: 'string',
      sort: 'string',
      visibilityLevel: 'number',
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

