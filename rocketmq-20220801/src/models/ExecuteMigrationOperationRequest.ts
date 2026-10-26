// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteMigrationOperationRequestOperationParam extends $dara.Model {
  /**
   * @remarks
   * The parameter information. The parameter type is a JSON string. See the examples below.
   * 
   * The valid values for the action field are as follows:
   * - MIGRATE_FORWARD (migrate forward)
   * - MIGRATE_BACKWARD (migrate backward)
   * 
   * The valid values for the targetStage field are as follows:
   *   - MIGRATE_WAIT (read from and write to the source cluster)
   *   - DOUBLE_READ (write to the source cluster with redundant reads)
   *   - SWITCH_WRITE (write to the destination cluster with redundant reads)
   *   - MIGRATE_FINISH (read from and write to the destination cluster)
   * 
   * 
   * > 
   * > - For migration forward, you can only advance one stage at a time in order.
   * > - For migration rollback, you can roll back to any previous stage.
   * 
   * @example
   * Migrate forward: {"action":"MIGRATE_FORWARD","targetStage":"MIGRATE_FINISH"}
   * 
   * Migrate backward: {"action":"MIGRATE_BACKWARD","targetStage":"MIGRATE_WAIT"}
   */
  paramData?: any;
  static names(): { [key: string]: string } {
    return {
      paramData: 'paramData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramData: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteMigrationOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The operation parameter.
   */
  operationParam?: ExecuteMigrationOperationRequestOperationParam;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-x0r37kel***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      operationParam: 'operationParam',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationParam: ExecuteMigrationOperationRequestOperationParam,
      instanceId: 'string',
    };
  }

  validate() {
    if(this.operationParam && typeof (this.operationParam as any).validate === 'function') {
      (this.operationParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

