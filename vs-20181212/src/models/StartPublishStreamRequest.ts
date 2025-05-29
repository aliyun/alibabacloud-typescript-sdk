// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPublishStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  publishUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      publishUrl: 'PublishUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
      publishUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

