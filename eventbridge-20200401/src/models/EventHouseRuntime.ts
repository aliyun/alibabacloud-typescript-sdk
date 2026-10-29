// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventHouseRuntime extends $dara.Model {
  /**
   * @remarks
   * The number of CUs last successfully applied to the EventHouse runtime.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * The standard error code returned when a creation or specification change fails.
   * 
   * @example
   * RUNTIME_OPERATION_TIMEOUT
   */
  errorCode?: string;
  /**
   * @remarks
   * The masked error message returned when a creation or specification change fails.
   * 
   * @example
   * Runtime operation timed out
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the EventHouse runtime. The initial value is typically default.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * The progress of the current creation or specification change operation. Valid values: 0 to 100.
   * 
   * @example
   * 80
   */
  progress?: number;
  /**
   * @remarks
   * The current stage of the creation or specification change operation.
   * 
   * @example
   * RUNTIME_HEALTH_CHECK
   */
  stage?: string;
  /**
   * @remarks
   * The current status of the EventHouse runtime. RUNNING indicates that the runtime is ready and can process queries. Valid values: CREATING, RUNNING, UPDATING, RECOVERING, CLOSED, CREATE_FAILED, and UPDATE_FAILED.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The target number of CUs during a creation, specification change, or corresponding failure state. This parameter is not returned when the runtime is stable.
   * 
   * @example
   * 2
   */
  targetCu?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      name: 'Name',
      progress: 'Progress',
      stage: 'Stage',
      status: 'Status',
      targetCu: 'TargetCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      name: 'string',
      progress: 'number',
      stage: 'string',
      status: 'string',
      targetCu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

