// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * The experiment configuration.
   * 
   * @example
   * {"RankBy": "Score"}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the debug crowd. Call the ListCrowds operation to obtain this ID.
   * 
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * The UIDs of Alibaba Cloud accounts or RAM users for debugging. Separate multiple UIDs with a comma.
   * 
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @remarks
   * The experiment description.
   * 
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the experiment group. Call the ListExperimentGroups operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * The traffic distribution percentage.
   * 
   * @example
   * 100
   */
  flowPercent?: number;
  /**
   * @remarks
   * The instance ID. Call the ListInstances operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The experiment name.
   * 
   * This parameter is required.
   * 
   * @example
   * experiment_test
   */
  name?: string;
  /**
   * @remarks
   * The experiment type. Valid values:<br>● `Baseline`: Indicates a baseline experiment.<br>● `Normal`: Indicates a normal experiment.<br><br>
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
      experimentGroupId: 'ExperimentGroupId',
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
      experimentGroupId: 'string',
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

