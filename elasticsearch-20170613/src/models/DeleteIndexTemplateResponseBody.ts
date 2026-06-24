// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIndexTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A0761F7E-0B50-46B9-8CAA-EBB3A420****
   */
  requestId?: string;
  /**
   * @remarks
   * The result. Valid values:
   * 
   * - true: The index template was deleted.
   * 
   * - false: The index template failed to be deleted.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

