// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationActivityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * op-f49743caa809****
   */
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

