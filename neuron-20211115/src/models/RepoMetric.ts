// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RepoMetric extends $dara.Model {
  /**
   * @example
   * 294
   */
  codeLines?: number;
  /**
   * @example
   * 23
   */
  commitCnt?: number;
  /**
   * @example
   * 3
   */
  developerCnt?: number;
  /**
   * @example
   * 2022-05-03T00:00:00.000Z
   */
  refreshDate?: string;
  /**
   * @example
   * neuron/catalog.git
   */
  repoShortUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * git@gitlab.alibaba-inc.com:neuron/catalog.git
   */
  repoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      codeLines: 'codeLines',
      commitCnt: 'commitCnt',
      developerCnt: 'developerCnt',
      refreshDate: 'refreshDate',
      repoShortUrl: 'repoShortUrl',
      repoUrl: 'repoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeLines: 'number',
      commitCnt: 'number',
      developerCnt: 'number',
      refreshDate: 'string',
      repoShortUrl: 'string',
      repoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

