// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopPublishStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

