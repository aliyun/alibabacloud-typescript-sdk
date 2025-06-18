// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for Kafka instance.
   * 
   * @example
   * 90be1f96-4229-4535-bb76-34b4f6fb2b71
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

