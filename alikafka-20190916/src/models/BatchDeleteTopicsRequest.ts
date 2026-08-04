// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteTopicsRequest extends $dara.Model {
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
  topics?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

