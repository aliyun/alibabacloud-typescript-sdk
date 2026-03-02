// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RepoItem } from "./RepoItem";


export class ReposFork extends $dara.Model {
  /**
   * @example
   * global-mall
   */
  gitGroup?: string;
  /**
   * @example
   * 2022-04-03T00:00:00.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * true
   */
  isOrigin?: boolean;
  pbcRepoItems?: RepoItem[];
  requestId?: string;
  /**
   * @example
   * 商城国际版本
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      gitGroup: 'gitGroup',
      gmtCreate: 'gmtCreate',
      id: 'id',
      isOrigin: 'isOrigin',
      pbcRepoItems: 'pbcRepoItems',
      requestId: 'requestId',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gitGroup: 'string',
      gmtCreate: 'string',
      id: 'number',
      isOrigin: 'boolean',
      pbcRepoItems: { 'type': 'array', 'itemType': RepoItem },
      requestId: 'string',
      usage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pbcRepoItems)) {
      $dara.Model.validateArray(this.pbcRepoItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

