// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteTopicsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  topicsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topicsShrink: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topicsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

