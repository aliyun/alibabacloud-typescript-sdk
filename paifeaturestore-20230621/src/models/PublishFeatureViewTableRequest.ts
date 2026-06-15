// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishFeatureViewTableRequest extends $dara.Model {
  /**
   * @remarks
   * Custom configurations for the task, provided as a JSON string.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The event time of the data to be published, in ISO 8601 format.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  eventTime?: string;
  /**
   * @remarks
   * The synchronization mode. The following values are supported:
   * 
   * - `Overwrite`: Overwrites all data in the specified partitions.
   * 
   * - `Merge`: Merges the new data with existing data in the specified partitions.
   * 
   * This parameter is required.
   * 
   * @example
   * Overwrite
   */
  mode?: string;
  /**
   * @remarks
   * Specifies whether to synchronize data from the offline table to the online store.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  offlineToOnline?: boolean;
  /**
   * @remarks
   * The partitions to publish.
   */
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

