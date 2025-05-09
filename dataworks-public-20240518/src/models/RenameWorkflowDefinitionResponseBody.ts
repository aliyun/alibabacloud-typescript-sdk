// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenameWorkflowDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the ID.
   * 
   * @example
   * 975BD43D-C421-595C-A29C-565A8AD5XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

