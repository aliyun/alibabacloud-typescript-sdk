// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1672410180000
   */
  beginTime?: number;
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
   * The consumer offset of the partition.
   * 
   * @example
   * 100
   */
  offset?: string;
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 0
   */
  partition?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * *   byOffset: queries messages by offset. If you select this value, you must configure Partition and Offset.
   * *   byTimestamp: queries messages by time. If you select this value, you must configure BeginTime.
   * 
   * This parameter is required.
   * 
   * @example
   * byTimestamp
   */
  queryType?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * This parameter is required.
   * 
   * @example
   * testkafka
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      instanceId: 'InstanceId',
      offset: 'Offset',
      partition: 'Partition',
      queryType: 'QueryType',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      instanceId: 'string',
      offset: 'string',
      partition: 'string',
      queryType: 'string',
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

