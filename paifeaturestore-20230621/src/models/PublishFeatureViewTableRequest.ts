// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishFeatureViewTableRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  eventTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Overwrite
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  offlineToOnline?: boolean;
  partitions?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      eventTime: 'EventTime',
      mode: 'Mode',
      offlineToOnline: 'OfflineToOnline',
      partitions: 'Partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      eventTime: 'string',
      mode: 'string',
      offlineToOnline: 'boolean',
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

