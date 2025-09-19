// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientRatioStatisticResponseBodyClientInstallRatioCurrentItemsItems extends $dara.Model {
  /**
   * @remarks
   * The total number of assets.
   * 
   * @example
   * 100
   */
  assetTotalCount?: number;
  /**
   * @remarks
   * The timestamp of the calculation. Unit: milliseconds.
   * 
   * @example
   * 1687759630045
   */
  calculateTime?: number;
  /**
   * @remarks
   * The installation rate. Unit: %.
   * 
   * @example
   * 70.00
   */
  installRatio?: number;
  /**
   * @remarks
   * The number of assets on which the client is installed.
   * 
   * @example
   * 70
   */
  installedAssetCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetTotalCount: 'AssetTotalCount',
      calculateTime: 'CalculateTime',
      installRatio: 'InstallRatio',
      installedAssetCount: 'InstalledAssetCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetTotalCount: 'number',
      calculateTime: 'number',
      installRatio: 'number',
      installedAssetCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRatioStatisticResponseBodyClientInstallRatioCurrentItems extends $dara.Model {
  /**
   * @remarks
   * The list of the statistics on the installation rate of the client by vendor.
   */
  items?: GetClientRatioStatisticResponseBodyClientInstallRatioCurrentItemsItems[];
  /**
   * @remarks
   * The type of the server. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud
   * *   **1**: a third-party cloud asset
   * *   **2**: an asset in a data center
   * *   **3**, **4**, **5**, and **7**: other cloud asset
   * *   **8**: a lightweight asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetClientRatioStatisticResponseBodyClientInstallRatioCurrentItemsItems },
      vendor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRatioStatisticResponseBodyClientInstallRatioHistoryItemsItems extends $dara.Model {
  /**
   * @remarks
   * The total number of assets.
   * 
   * @example
   * 100
   */
  assetTotalCount?: number;
  /**
   * @remarks
   * The timestamp of the calculation. Unit: milliseconds.
   * 
   * @example
   * 1687759630045
   */
  calculateTime?: number;
  /**
   * @remarks
   * The installation rate. Unit: %.
   * 
   * @example
   * 80.00
   */
  installRatio?: number;
  /**
   * @remarks
   * The number of assets on which the client is installed.
   * 
   * @example
   * 80
   */
  installedAssetCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetTotalCount: 'AssetTotalCount',
      calculateTime: 'CalculateTime',
      installRatio: 'InstallRatio',
      installedAssetCount: 'InstalledAssetCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetTotalCount: 'number',
      calculateTime: 'number',
      installRatio: 'number',
      installedAssetCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRatioStatisticResponseBodyClientInstallRatioHistoryItems extends $dara.Model {
  /**
   * @remarks
   * The list of statistics on the client installation rate.
   */
  items?: GetClientRatioStatisticResponseBodyClientInstallRatioHistoryItemsItems[];
  /**
   * @remarks
   * The type of the cloud asset. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud
   * *   **1**: a third-party cloud asset
   * *   **2**: an asset in a data center
   * *   **3**, **4**, **5**, and **7**: other cloud asset
   * *   **8**: a simple application server
   * 
   * @example
   * 3
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetClientRatioStatisticResponseBodyClientInstallRatioHistoryItemsItems },
      vendor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRatioStatisticResponseBodyClientInstallRatio extends $dara.Model {
  /**
   * @remarks
   * The list of current statistics on the installation rate of the client.
   */
  currentItems?: GetClientRatioStatisticResponseBodyClientInstallRatioCurrentItems[];
  /**
   * @remarks
   * The list of historical statistics on the installation rate of the client.
   */
  historyItems?: GetClientRatioStatisticResponseBodyClientInstallRatioHistoryItems[];
  static names(): { [key: string]: string } {
    return {
      currentItems: 'CurrentItems',
      historyItems: 'HistoryItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentItems: { 'type': 'array', 'itemType': GetClientRatioStatisticResponseBodyClientInstallRatioCurrentItems },
      historyItems: { 'type': 'array', 'itemType': GetClientRatioStatisticResponseBodyClientInstallRatioHistoryItems },
    };
  }

  validate() {
    if(Array.isArray(this.currentItems)) {
      $dara.Model.validateArray(this.currentItems);
    }
    if(Array.isArray(this.historyItems)) {
      $dara.Model.validateArray(this.historyItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRatioStatisticResponseBodyClientOnlineRatioCurrentItemsItems extends $dara.Model {
  /**
   * @remarks
   * The number of assets on which the client is installed.
   * 
   * @example
   * 50
   */
  assetInstallCount?: number;
  /**
   * @remarks
   * The timestamp of the calculation. Unit: milliseconds.
   * 
   * @example
   * 1687759630045
   */
  calculateTime?: number;
  /**
   * @remarks
   * The number of online assets.
   * 
   * @example
   * 10
   */
  onlineAssetCount?: number;
  /**
   * @remarks
   * The online rate. Unit: %.
   * 
   * @example
   * 20.00
   */
  onlineRatio?: number;
  static names(): { [key: string]: string } {
    return {
      assetInstallCount: 'AssetInstallCount',
      calculateTime: 'CalculateTime',
      onlineAssetCount: 'OnlineAssetCount',
      onlineRatio: 'OnlineRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetInstallCount: 'number',
      calculateTime: 'number',
      onlineAssetCount: 'number',
      onlineRatio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRatioStatisticResponseBodyClientOnlineRatioCurrentItems extends $dara.Model {
  /**
   * @remarks
   * The list of current statistics on the online rate of the client by vendor.
   */
  items?: GetClientRatioStatisticResponseBodyClientOnlineRatioCurrentItemsItems[];
  /**
   * @remarks
   * The type of the cloud asset. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud
   * *   **1**: a third-party cloud asset
   * *   **2**: an asset in a data center
   * *   **3**, **4**, **5**, and **7**: other cloud asset
   * *   **8**: a simple application server
   * 
   * @example
   * 3
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetClientRatioStatisticResponseBodyClientOnlineRatioCurrentItemsItems },
      vendor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRatioStatisticResponseBodyClientOnlineRatioHistoryItemsItems extends $dara.Model {
  /**
   * @remarks
   * The number of assets on which the client is installed.
   * 
   * @example
   * 50
   */
  assetInstallCount?: number;
  /**
   * @remarks
   * The timestamp of the calculation. Unit: milliseconds.
   * 
   * @example
   * 1687759630045
   */
  calculateTime?: number;
  /**
   * @remarks
   * The number of online assets.
   * 
   * @example
   * 20
   */
  onlineAssetCount?: number;
  /**
   * @remarks
   * The online rate. Unit: %.
   * 
   * @example
   * 40.00
   */
  onlineRatio?: number;
  static names(): { [key: string]: string } {
    return {
      assetInstallCount: 'AssetInstallCount',
      calculateTime: 'CalculateTime',
      onlineAssetCount: 'OnlineAssetCount',
      onlineRatio: 'OnlineRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetInstallCount: 'number',
      calculateTime: 'number',
      onlineAssetCount: 'number',
      onlineRatio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRatioStatisticResponseBodyClientOnlineRatioHistoryItems extends $dara.Model {
  /**
   * @remarks
   * The list of historical statistics on the online rate of the client by vendor.
   */
  items?: GetClientRatioStatisticResponseBodyClientOnlineRatioHistoryItemsItems[];
  /**
   * @remarks
   * The type of the server. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud
   * *   **1**: a third-party cloud asset
   * *   **2**: an asset in a data center
   * *   **3**, **4**, **5**, and **7**: other cloud asset
   * *   **8**: a lightweight asset
   * 
   * @example
   * 7
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetClientRatioStatisticResponseBodyClientOnlineRatioHistoryItemsItems },
      vendor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRatioStatisticResponseBodyClientOnlineRatio extends $dara.Model {
  /**
   * @remarks
   * The list of current statistics on the online rate of the client.
   */
  currentItems?: GetClientRatioStatisticResponseBodyClientOnlineRatioCurrentItems[];
  /**
   * @remarks
   * The list of historical statistics on the online rate of the client.
   */
  historyItems?: GetClientRatioStatisticResponseBodyClientOnlineRatioHistoryItems[];
  static names(): { [key: string]: string } {
    return {
      currentItems: 'CurrentItems',
      historyItems: 'HistoryItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentItems: { 'type': 'array', 'itemType': GetClientRatioStatisticResponseBodyClientOnlineRatioCurrentItems },
      historyItems: { 'type': 'array', 'itemType': GetClientRatioStatisticResponseBodyClientOnlineRatioHistoryItems },
    };
  }

  validate() {
    if(Array.isArray(this.currentItems)) {
      $dara.Model.validateArray(this.currentItems);
    }
    if(Array.isArray(this.historyItems)) {
      $dara.Model.validateArray(this.historyItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientRatioStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics on the client installation rate.
   */
  clientInstallRatio?: GetClientRatioStatisticResponseBodyClientInstallRatio;
  /**
   * @remarks
   * The statistics on the client online rate.
   */
  clientOnlineRatio?: GetClientRatioStatisticResponseBodyClientOnlineRatio;
  /**
   * @remarks
   * The list of time when statistics were collected.
   */
  dates?: number[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstallRatio: 'ClientInstallRatio',
      clientOnlineRatio: 'ClientOnlineRatio',
      dates: 'Dates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstallRatio: GetClientRatioStatisticResponseBodyClientInstallRatio,
      clientOnlineRatio: GetClientRatioStatisticResponseBodyClientOnlineRatio,
      dates: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.clientInstallRatio && typeof (this.clientInstallRatio as any).validate === 'function') {
      (this.clientInstallRatio as any).validate();
    }
    if(this.clientOnlineRatio && typeof (this.clientOnlineRatio as any).validate === 'function') {
      (this.clientOnlineRatio as any).validate();
    }
    if(Array.isArray(this.dates)) {
      $dara.Model.validateArray(this.dates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

