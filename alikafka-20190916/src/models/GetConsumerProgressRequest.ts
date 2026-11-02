// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerProgressRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * Specifies whether to hide LastTimestamp. Default value: false. Set this parameter to true.
   * 
   * > 
   * > - If you set this parameter to true, LastTimestamp in the response is returned as -1. Otherwise, the actual value is returned. This is supported only for topics of the cloud storage type in reserved instances.
   * > - This operation processes a large amount of data and is resource-intensive. Set this parameter to true to reduce processing time.
   * 
   * @example
   * true
   */
  hideLastTimestamp?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      hideLastTimestamp: 'HideLastTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      hideLastTimestamp: 'boolean',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

