// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReposDeveloperGroupMetric extends $dara.Model {
  /**
   * @example
   * 342
   */
  addLines?: number;
  /**
   * @example
   * 242
   */
  commentLines?: number;
  /**
   * @example
   * 14
   */
  commitCnt?: number;
  /**
   * @example
   * 23
   */
  delLines?: number;
  /**
   * @example
   * 129
   */
  modLines?: number;
  /**
   * @example
   * 旭坤
   */
  showName?: string;
  /**
   * @example
   * 64634
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      addLines: 'addLines',
      commentLines: 'commentLines',
      commitCnt: 'commitCnt',
      delLines: 'delLines',
      modLines: 'modLines',
      showName: 'showName',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addLines: 'number',
      commentLines: 'number',
      commitCnt: 'number',
      delLines: 'number',
      modLines: 'number',
      showName: 'string',
      workNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

