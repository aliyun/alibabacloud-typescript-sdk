// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSourceSourceMQTTParameters extends $dara.Model {
  /**
   * @example
   * JSON
   */
  bodyDataType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * i-bp1dsudbecqwt61jqswt
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for MQTT instance.
   * 
   * @example
   * topic_empower_1642400400779
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataType: 'BodyDataType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataType: 'string',
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

