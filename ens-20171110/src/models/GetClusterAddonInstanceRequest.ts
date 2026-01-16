// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterAddonInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * edge-csi-lite
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

