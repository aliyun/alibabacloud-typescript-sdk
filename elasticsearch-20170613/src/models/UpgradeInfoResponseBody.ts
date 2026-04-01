// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeInfoResponseBodyResultUpgradeInfo extends $dara.Model {
  /**
   * @example
   * 1.7.3
   */
  curRepoVersion?: string;
  /**
   * @example
   * 1.7.3
   */
  updateRepoVersion?: string;
  /**
   * @example
   * false
   */
  upgrade?: boolean;
  /**
   * @example
   * 2.2.4
   */
  curApackVersion?: string;
  /**
   * @example
   * 8.17.0
   */
  curEsVersion?: string;
  /**
   * @example
   * 2.2.4
   */
  upgradeApackVersion?: string;
  /**
   * @example
   * 8.17.0
   */
  upgradeEsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      curRepoVersion: 'CurRepoVersion',
      updateRepoVersion: 'UpdateRepoVersion',
      upgrade: 'Upgrade',
      curApackVersion: 'curApackVersion',
      curEsVersion: 'curEsVersion',
      upgradeApackVersion: 'upgradeApackVersion',
      upgradeEsVersion: 'upgradeEsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curRepoVersion: 'string',
      updateRepoVersion: 'string',
      upgrade: 'boolean',
      curApackVersion: 'string',
      curEsVersion: 'string',
      upgradeApackVersion: 'string',
      upgradeEsVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInfoResponseBodyResult extends $dara.Model {
  upgradeInfo?: UpgradeInfoResponseBodyResultUpgradeInfo;
  static names(): { [key: string]: string } {
    return {
      upgradeInfo: 'UpgradeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upgradeInfo: UpgradeInfoResponseBodyResultUpgradeInfo,
    };
  }

  validate() {
    if(this.upgradeInfo && typeof (this.upgradeInfo as any).validate === 'function') {
      (this.upgradeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****
   */
  requestId?: string;
  result?: UpgradeInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpgradeInfoResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

