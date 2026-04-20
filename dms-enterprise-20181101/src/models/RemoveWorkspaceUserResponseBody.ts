// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveWorkspaceUserResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E5EE2B9E-2F95-57FA-B284-CB441CEE49D6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

