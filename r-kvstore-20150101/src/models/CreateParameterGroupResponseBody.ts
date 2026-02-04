// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter template ID.
   * 
   * @example
   * g-51ii2ienn0dg0xi8****
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 62DA5BE5-F9C9-527C-ACCB-4D783C297A3A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paramGroupId: 'ParamGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramGroupId: 'string',
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

