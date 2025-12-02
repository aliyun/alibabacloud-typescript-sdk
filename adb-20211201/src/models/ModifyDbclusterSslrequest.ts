// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterSSLRequest extends $dara.Model {
  /**
   * @remarks
   * The private or public endpoint for which the server certificate needs to be created or updated.
   * 
   * @example
   * amv-***********.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable SSL encryption. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBClusterId: 'DBClusterId',
      enableSSL: 'EnableSSL',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBClusterId: 'string',
      enableSSL: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

