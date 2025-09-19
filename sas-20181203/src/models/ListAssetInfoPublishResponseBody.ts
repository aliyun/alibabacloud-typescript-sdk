// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetInfoPublishResponseBodyAssetList extends $dara.Model {
  /**
   * @remarks
   * The version of the Security Center agent.
   * 
   * @example
   * 0.0.8
   */
  curVersion?: string;
  /**
   * @remarks
   * The time when the Security Center agent was last upgraded.
   * 
   * @example
   * 1724522400000
   */
  lastUpgradeTime?: number;
  /**
   * @remarks
   * The publish status of the Security Center agent. Valid values:
   * 
   * *   **0**: not started.
   * *   **1**: publishing.
   * *   **2**: published.
   * *   **3**: publish suspended.
   * *   **4**: forcibly upgrading.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether automatic upgrade is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  upgradeEnable?: boolean;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 2a98f149-0256-414c-a29a-a69f8a75****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      curVersion: 'CurVersion',
      lastUpgradeTime: 'LastUpgradeTime',
      status: 'Status',
      upgradeEnable: 'UpgradeEnable',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curVersion: 'string',
      lastUpgradeTime: 'number',
      status: 'number',
      upgradeEnable: 'boolean',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetInfoPublishResponseBody extends $dara.Model {
  /**
   * @remarks
   * The servers.
   */
  assetList?: ListAssetInfoPublishResponseBodyAssetList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3956048F-9D73-5EDB-834B-4827BB483977
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': ListAssetInfoPublishResponseBodyAssetList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetList)) {
      $dara.Model.validateArray(this.assetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

