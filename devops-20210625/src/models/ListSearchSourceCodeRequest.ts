// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchSourceCodeRequestFilePath extends $dara.Model {
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
   * orgId/test-group/spring-boot-demo/test.java
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

export class ListSearchSourceCodeRequestRepoPath extends $dara.Model {
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
   * xxx
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

export class ListSearchSourceCodeRequest extends $dara.Model {
  filePath?: ListSearchSourceCodeRequestFilePath;
  /**
   * @example
   * false
   */
  isCodeBlock?: boolean;
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
   * Java
   */
  language?: string;
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
   * 20
   */
  pageSize?: number;
  repoPath?: ListSearchSourceCodeRequestRepoPath;
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
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'filePath',
      isCodeBlock: 'isCodeBlock',
      keyword: 'keyword',
      language: 'language',
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
      filePath: ListSearchSourceCodeRequestFilePath,
      isCodeBlock: 'boolean',
      keyword: 'string',
      language: 'string',
      order: 'string',
      page: 'number',
      pageSize: 'number',
      repoPath: ListSearchSourceCodeRequestRepoPath,
      scope: 'string',
      sort: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    if(this.filePath && typeof (this.filePath as any).validate === 'function') {
      (this.filePath as any).validate();
    }
    if(this.repoPath && typeof (this.repoPath as any).validate === 'function') {
      (this.repoPath as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

