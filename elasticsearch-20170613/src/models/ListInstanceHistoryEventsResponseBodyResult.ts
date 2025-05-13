// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryEventsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * i-2ze8s9cjdf2cv969****
   */
  ecsId?: string;
  /**
   * @example
   * 2017-12-07T00:00:00Z
   */
  eventCreateTime?: string;
  /**
   * @example
   * EXECUTED
   */
  eventCycleStatus?: string;
  /**
   * @example
   * 2017-12-07T00:00:00Z
   */
  eventExecuteTime?: string;
  /**
   * @example
   * 2017-12-07T00:00:00Z
   */
  eventFinashTime?: string;
  /**
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @example
   * ECS:AUTO_RESTART
   */
  eventType?: string;
  /**
   * @example
   * es-cn-2r42l7a740005****
   */
  instanceId?: string;
  /**
   * @example
   * 10.1.xx.xx
   */
  nodeIP?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsId: 'ecsId',
      eventCreateTime: 'eventCreateTime',
      eventCycleStatus: 'eventCycleStatus',
      eventExecuteTime: 'eventExecuteTime',
      eventFinashTime: 'eventFinashTime',
      eventLevel: 'eventLevel',
      eventType: 'eventType',
      instanceId: 'instanceId',
      nodeIP: 'nodeIP',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsId: 'string',
      eventCreateTime: 'string',
      eventCycleStatus: 'string',
      eventExecuteTime: 'string',
      eventFinashTime: 'string',
      eventLevel: 'string',
      eventType: 'string',
      instanceId: 'string',
      nodeIP: 'string',
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

