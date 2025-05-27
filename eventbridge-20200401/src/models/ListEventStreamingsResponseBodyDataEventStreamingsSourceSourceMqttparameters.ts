// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters extends $dara.Model {
  bodyDataType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * bastionhost-cn-zvp27kcha1r
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for MQTT instance.
   * 
   * @example
   * migration_instance
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

