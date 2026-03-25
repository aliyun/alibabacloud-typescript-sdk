// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKMSSecretsForHostShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: number;
  /**
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  secretsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      secretsShrink: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'number',
      instanceId: 'string',
      regionId: 'string',
      secretsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

