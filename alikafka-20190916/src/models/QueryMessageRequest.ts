// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The start timestamp of the query range. Unit: milliseconds.
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
   * The partition offset.
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
   * - byOffset: Query by offset. When selecting offset query, you need to fill in the partition ID and partition offset parameters.
   * 
   * - byTimestamp: Query by time. When selecting time query, you need to fill in the BeginTime parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * byTimestamp
   */
  queryType?: string;
  /**
   * @remarks
   * The region ID of the resource.
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

