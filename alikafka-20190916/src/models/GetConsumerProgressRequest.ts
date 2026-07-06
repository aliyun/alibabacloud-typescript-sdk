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
   * Specifies whether to hide the \\`LastTimestamp\\` parameter. The default value is false. Set this parameter to true for better performance.
   * 
   * > - If you set this parameter to true, -1 is returned for the \\`LastTimestamp\\` parameter. Otherwise, a specific value is returned. This parameter is supported only for topics of cloud storage on provisioned instances.
   * >
   * > - This operation processes a large amount of data and consumes a high degree of performance. Set this parameter to true to reduce the processing time.
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

