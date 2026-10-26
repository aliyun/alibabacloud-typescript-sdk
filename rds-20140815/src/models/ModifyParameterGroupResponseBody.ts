// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * @example
   * rpg-13ppdh****
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 857DC00B-7B85-4853-8B27-AD65EB618BC6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterGroupId: 'ParameterGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroupId: 'string',
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

