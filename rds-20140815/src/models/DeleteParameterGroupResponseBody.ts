// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * @example
   * rpg-gfs****
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8AF26036-B254-4212-B8E4-EFBE818B7FD6
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

