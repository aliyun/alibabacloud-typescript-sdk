// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentsRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @example
   * experiment_test1
   */
  query?: string;
  /**
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

