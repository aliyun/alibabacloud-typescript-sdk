// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGuardLogStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The delivery region.
   * 
   * @example
   * cn-beijing
   */
  deliveryRegion?: string;
  /**
   * @remarks
   * Indicates whether the feature is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The log analysis configuration.
   */
  logAnalysisConfig?: { [key: string]: any };
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * test003x
   */
  logStoreName?: string;
  /**
   * @remarks
   * The remaining storage space. Unit: TB.
   * 
   * @example
   * 1
   */
  pendingStorage?: number;
  /**
   * @remarks
   * The reserved storage. Unit: bytes.
   * 
   * @example
   * 1
   */
  preserveStorage?: number;
  /**
   * @remarks
   * The project space.
   * 
   * @example
   * xxx_log
   */
  project?: string;
  /**
   * @remarks
   * The total storage space. Unit: TB.
   * 
   * @example
   * 3
   */
  totalStorage?: number;
  /**
   * @remarks
   * The number of days for which data is retained.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * guard_meta_log
   */
  type?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 1643953****74290
   */
  uid?: string;
  /**
   * @remarks
   * The used storage. Unit: bytes.
   * 
   * @example
   * 1
   */
  usedStorage?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryRegion: 'DeliveryRegion',
      enable: 'Enable',
      logAnalysisConfig: 'LogAnalysisConfig',
      logStoreName: 'LogStoreName',
      pendingStorage: 'PendingStorage',
      preserveStorage: 'PreserveStorage',
      project: 'Project',
      totalStorage: 'TotalStorage',
      ttl: 'Ttl',
      type: 'Type',
      uid: 'Uid',
      usedStorage: 'UsedStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryRegion: 'string',
      enable: 'boolean',
      logAnalysisConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      logStoreName: 'string',
      pendingStorage: 'number',
      preserveStorage: 'number',
      project: 'string',
      totalStorage: 'number',
      ttl: 'number',
      type: 'string',
      uid: 'string',
      usedStorage: 'number',
    };
  }

  validate() {
    if(this.logAnalysisConfig) {
      $dara.Model.validateMap(this.logAnalysisConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGuardLogStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data.
   */
  data?: GetGuardLogStatsResponseBodyData[];
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetGuardLogStatsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

