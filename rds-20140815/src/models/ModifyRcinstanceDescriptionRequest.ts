// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RDS Custom instance.
   * 
   * > The name must be 2 to 255 characters in length and must start with a letter or a Chinese character. It can contain digits, underscores (_), or hyphens (-).
   * 
   * @example
   * testInstance
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-m5ei7b1w38w2l91x****
   */
  instanceId?: string;
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
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDescription: 'string',
      instanceId: 'string',
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

