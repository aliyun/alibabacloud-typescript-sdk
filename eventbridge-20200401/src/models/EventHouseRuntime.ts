// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventHouseRuntime extends $dara.Model {
  /**
   * @remarks
   * The number of CUs that last took effect for the EventHouse Runtime.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * The stable error code returned when the creation or specification change operation fails.
   * 
   * @example
   * RUNTIME_OPERATION_TIMEOUT
   */
  errorCode?: string;
  /**
   * @remarks
   * The desensitized error message returned when the creation or specification change operation fails.
   * 
   * @example
   * Runtime operation timed out
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the EventHouse Runtime. Typically set to default in the initial phase.
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
   * The current status of the EventHouse Runtime. RUNNING indicates that the Runtime is ready and can accept queries. Valid values: CREATING, RUNNING, UPDATING, RECOVERING, CLOSED, CREATE_FAILED, and UPDATE_FAILED.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The target number of CUs during creation, specification change, or the corresponding failed state. This parameter is not returned when the Runtime is running stably.
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

