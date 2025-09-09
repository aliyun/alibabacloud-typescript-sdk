// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRdsReadWeightResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * B12FC174-D5CE-4A6E-83C1-0F8F86******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

