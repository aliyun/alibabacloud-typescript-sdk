// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClickhouseEngineRequest extends $dara.Model {
  /**
   * @remarks
   * The disk cache size of the wide table engine. Unit: GB. Default value: 100. Valid values: 100 to 1000.
   * 
   * @example
   * 200
   */
  cacheSize?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the wide table engine feature. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  enabled?: boolean;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      DBClusterId: 'DBClusterId',
      enabled: 'Enabled',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'number',
      DBClusterId: 'string',
      enabled: 'boolean',
      ownerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

