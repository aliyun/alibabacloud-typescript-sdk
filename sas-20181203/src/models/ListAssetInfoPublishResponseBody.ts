// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetInfoPublishResponseBodyAssetList extends $dara.Model {
  /**
   * @remarks
   * The current client version.
   * 
   * @example
   * 0.0.8
   */
  curVersion?: string;
  /**
   * @remarks
   * The time of the last upgrade. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1724522400000
   */
  lastUpgradeTime?: number;
  /**
   * @remarks
   * The client release status. Valid values:
   * 
   * - **0**: Not started.
   * - **1**: Publishing.
   * - **2**: Publishing completed.
   * - **3**: Publishing paused.
   * - **4**: Force upgrading.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the upgrade is enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  upgradeEnable?: boolean;
  /**
   * @remarks
   * The UUID of the Security Center asset.
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
   * The server list information.
   */
  assetList?: ListAssetInfoPublishResponseBodyAssetList[];
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
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

