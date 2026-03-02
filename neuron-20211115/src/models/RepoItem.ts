// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RepoItem extends $dara.Model {
  /**
   * @example
   * 2034
   */
  codeLines?: number;
  /**
   * @example
   * https://code.aone.alibaba-inc.com/yunmall/yunmall-custome
   */
  gitProjectUrl?: string;
  /**
   * @example
   * 中驿
   */
  owner?: string;
  /**
   * @example
   * yunmall/product.git
   */
  repoShortUrl?: string;
  /**
   * @example
   * git@gitlab.alibaba-inc.com:yunmall/product.git
   */
  repoUrl?: string;
  /**
   * @example
   * 类目
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      codeLines: 'codeLines',
      gitProjectUrl: 'gitProjectUrl',
      owner: 'owner',
      repoShortUrl: 'repoShortUrl',
      repoUrl: 'repoUrl',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeLines: 'number',
      gitProjectUrl: 'string',
      owner: 'string',
      repoShortUrl: 'string',
      repoUrl: 'string',
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

