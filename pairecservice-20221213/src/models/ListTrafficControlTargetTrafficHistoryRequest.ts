// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTargetTrafficHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range.
   * 
   * @example
   * 2024-01-10 13:13:20
   */
  endTime?: string;
  /**
   * @remarks
   * The target environment. Valid values: Daily, Pre, and Prod.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The ID of the experiment group.
   * 
   * @example
   * 2
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * The ID of the experiment.
   * 
   * @example
   * ER_All
   */
  experimentId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * pairec-1324***
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the item.
   * 
   * @example
   * 1001
   */
  itemId?: string;
  /**
   * @remarks
   * The start of the time range.
   * 
   * @example
   * 2024-01-01 13:13:20
   */
  startTime?: string;
  /**
   * @remarks
   * The threshold value.
   * 
   * @example
   * 20
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      environment: 'Environment',
      experimentGroupId: 'ExperimentGroupId',
      experimentId: 'ExperimentId',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      startTime: 'StartTime',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      environment: 'string',
      experimentGroupId: 'string',
      experimentId: 'string',
      instanceId: 'string',
      itemId: 'string',
      startTime: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

