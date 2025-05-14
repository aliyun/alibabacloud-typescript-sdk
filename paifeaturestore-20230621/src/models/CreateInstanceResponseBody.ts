// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * InstanceAlreadyExistsErrorProblem
   */
  code?: string;
  /**
   * @example
   * featureStore-cn-7mz2xfu****
   */
  instanceId?: string;
  /**
   * @example
   * C33E160C-BFCA-5719-B958-942850E949F6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

