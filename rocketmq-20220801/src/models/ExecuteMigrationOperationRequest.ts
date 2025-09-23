// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteMigrationOperationRequestOperationParam extends $dara.Model {
  /**
   * @example
   * {}
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
  operationParam?: ExecuteMigrationOperationRequestOperationParam;
  /**
   * @example
   * rmq-cn-x0r37kelk0o
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

