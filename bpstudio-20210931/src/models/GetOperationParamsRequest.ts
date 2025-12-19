// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationParamsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rename
   */
  operation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

