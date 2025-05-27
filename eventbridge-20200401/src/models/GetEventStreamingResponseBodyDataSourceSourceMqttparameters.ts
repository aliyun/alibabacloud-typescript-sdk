// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataSourceSourceMQTTParameters extends $dara.Model {
  bodyDataType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-2ze06wqdwk0uq14krrzv
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Message Queue for MQTT instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic in the Message Queue for MQTT instance.
   * 
   * @example
   * TOPIC-cainiao-pcs-wms-instock-noPrealertPrintLabel
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

