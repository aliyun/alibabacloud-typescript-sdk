// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceMQTTParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * mqtt-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the ApsaraMQ for MQTT instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic in the ApsaraMQ for MQTT instance.
   * 
   * @example
   * testTopic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

