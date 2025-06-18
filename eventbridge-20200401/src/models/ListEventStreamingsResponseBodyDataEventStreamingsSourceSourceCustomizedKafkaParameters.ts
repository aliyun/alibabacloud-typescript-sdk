// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters extends $dara.Model {
  /**
   * @example
   * gtm-cn-k2c2yfg****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

