// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushTimesUsageRequest extends $dara.Model {
  /**
   * @example
   * 6dff6c70-3484-4a39-b725-164e3ad9b20d
   */
  clientToken?: string;
  /**
   * @example
   * 1000001
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

