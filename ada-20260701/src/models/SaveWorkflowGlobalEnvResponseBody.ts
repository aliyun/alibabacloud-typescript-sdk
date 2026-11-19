// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWorkflowGlobalEnvResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 01A0677A-49CB-1605-AC3A-26761045B614
   */
  requestId?: string;
  /**
   * @remarks
   * The size of the configuration content in UTF-8 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 9
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * This parameter is required.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
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

