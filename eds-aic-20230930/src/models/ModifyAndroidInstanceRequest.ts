// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a single instance. If you specify this parameter, InstanceIds is ignored.
   * 
   * @example
   * acp-8v5bjld0r7tkl****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The limit for downstream bandwidth. Unit: Mbps.
   * 
   * @example
   * 50
   */
  downBandwidthLimit?: number;
  /**
   * @remarks
   * The list of Android instance IDs. You can specify from 1 to 100 IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The new name for the instance.
   * 
   * > - The name can be up to 30 characters long. It must start with a letter or a Chinese character and cannot start with http\\:// or https\\://. The name can contain only letters, digits, Chinese characters, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * new_name
   */
  newAndroidInstanceName?: string;
  /**
   * @remarks
   * The limit for upstream bandwidth. Unit: Mbps.
   * 
   * @example
   * 50
   */
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

