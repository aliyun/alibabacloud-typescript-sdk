// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigClusterWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-729dm40FG****
   */
  clusterId?: string;
  /**
   * @remarks
   * The IP address whitelist of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 18.68.XX.XX
   */
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      whitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

