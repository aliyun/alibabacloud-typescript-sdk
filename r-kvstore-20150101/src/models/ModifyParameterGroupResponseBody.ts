// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter template ID.
   * 
   * @example
   * testGroupName
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AD425AD3-CC7B-4EE2-A5CB-2F61BA73****
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

