// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter template ID, which is globally unique.
   * 
   * @example
   * sys-001*****
   */
  paramGroupId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2BE6E619-A657-42E3-AD2D-18F8428A****
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

