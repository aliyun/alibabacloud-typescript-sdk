// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterComponentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the component. You can use the ID as a request parameter in the API operation that is called to query components in a production studio.
   * 
   * @example
   * 05ab713c-676e-49c0-96ce-cc408da1****
   */
  componentId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
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

