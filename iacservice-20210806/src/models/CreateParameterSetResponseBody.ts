// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterSetResponseBody extends $dara.Model {
  /**
   * @example
   * pts-3b6cb9fa4751afff89a4b73779e0d
   */
  parameterSetId?: string;
  /**
   * @example
   * 7FA0FF4A-ABD4-54F6-BEAC-B4273EBA10A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSetId: 'parameterSetId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSetId: 'string',
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

