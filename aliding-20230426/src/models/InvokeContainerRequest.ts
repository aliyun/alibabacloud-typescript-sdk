// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeContainerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * createSandbox
   */
  operationId?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'operationId',
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

