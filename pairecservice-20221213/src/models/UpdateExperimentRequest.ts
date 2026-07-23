// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * The experiment configuration, specified as a JSON string.
   * 
   * @example
   * {"RankBy": "Score"}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the debug crowd. To obtain this ID, call the ListCrowds operation.
   * 
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * The UIDs for debug users, specified as a comma-separated string. Each UID must belong to an Alibaba Cloud account or RAM user.
   * 
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @remarks
   * The description of the experiment.
   * 
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The percentage of traffic to allocate to the experiment.
   * 
   * @example
   * 100
   */
  flowPercent?: number;
  /**
   * @remarks
   * The ID of the instance. To obtain this ID, call the ListInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the experiment.
   * 
   * This parameter is required.
   * 
   * @example
   * experiment_test
   */
  name?: string;
  /**
   * @remarks
   * The type of the experiment. Valid values: ● Baseline: A baseline experiment. ● Normal: A normal experiment.
   * 
   * This parameter is required.
   * 
   * @example
   * Baseline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      flowPercent: 'FlowPercent',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      flowPercent: 'number',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

