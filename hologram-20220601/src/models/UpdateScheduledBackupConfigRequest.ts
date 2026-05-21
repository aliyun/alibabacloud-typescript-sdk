// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledBackupConfigRequest extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 3
   */
  dataKeepQuantity?: number;
  /**
   * @example
   * cn-beijing
   */
  dstRegion?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 20
   */
  hour?: number;
  /**
   * @example
   * hgprecn-cn-zvp25ysxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 3
   */
  manualDataKeepQuantity?: number;
  /**
   * @example
   * remote
   */
  scheduleType?: string;
  /**
   * @example
   * 1,3,5
   */
  week?: string;
  /**
   * @example
   * cn-beijing-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dataKeepQuantity: 'dataKeepQuantity',
      dstRegion: 'dstRegion',
      enabled: 'enabled',
      hour: 'hour',
      instanceId: 'instanceId',
      manualDataKeepQuantity: 'manualDataKeepQuantity',
      scheduleType: 'scheduleType',
      week: 'week',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dataKeepQuantity: 'number',
      dstRegion: 'string',
      enabled: 'boolean',
      hour: 'number',
      instanceId: 'string',
      manualDataKeepQuantity: 'number',
      scheduleType: 'string',
      week: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

