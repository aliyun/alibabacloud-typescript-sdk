// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingRequestSourceSourceMQTTParameters extends $dara.Model {
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
   * r-bp1b5ncun5lqerzg4r
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The topic from which messages are sent.
   * 
   * @example
   * CANAL_VICUTU_UAT
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

