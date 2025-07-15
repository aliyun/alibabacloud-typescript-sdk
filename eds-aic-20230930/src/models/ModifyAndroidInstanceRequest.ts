// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-8v5bjld0r7tkl****
   */
  androidInstanceId?: string;
  downBandwidthLimit?: number;
  instanceIds?: string[];
  /**
   * @remarks
   * The new name of the cloud phone instance.
   * 
   * >  The name can be up to 30 characters in length. It can contain letters, digits, colons (:), underscores (_), periods (.), or hyphens (-). It must start with letters but cannot start with http:// or https://.
   * 
   * @example
   * new_name
   */
  newAndroidInstanceName?: string;
  upBandwidthLimit?: number;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      downBandwidthLimit: 'DownBandwidthLimit',
      instanceIds: 'InstanceIds',
      newAndroidInstanceName: 'NewAndroidInstanceName',
      upBandwidthLimit: 'UpBandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      downBandwidthLimit: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      newAndroidInstanceName: 'string',
      upBandwidthLimit: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

