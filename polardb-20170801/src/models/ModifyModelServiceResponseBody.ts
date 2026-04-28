// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyModelServiceResponseBody extends $dara.Model {
  /**
   * @example
   * ms-xxxxxx
   */
  modelServiceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A2EE5B4-CC9F-46E1-A747-E43BC9******
   */
  requestId?: string;
  /**
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      modelServiceId: 'ModelServiceId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelServiceId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

