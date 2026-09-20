// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The namespace deletion result.
   * 
   * @example
   * True
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9E87E66-9EF0-5C10-A5E6-924020A0C9B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

