// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the experiment group.
   * 
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * The instance ID. You can call the ListInstances operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The filter parameter for quick search. All experiments that match the names or tags are returned.
   * 
   * @example
   * experiment_test1
   */
  query?: string;
  /**
   * @remarks
   * The status of the experiment. Valid values:
   * 
   * - Offline
   * 
   * - Online
   * 
   * @example
   * Offline
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      experimentGroupId: 'ExperimentGroupId',
      instanceId: 'InstanceId',
      query: 'Query',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentGroupId: 'string',
      instanceId: 'string',
      query: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

