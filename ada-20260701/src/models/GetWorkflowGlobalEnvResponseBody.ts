// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowGlobalEnvResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   * 
   * This parameter is required.
   * 
   * @example
   * MODE=demo
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the configuration is saved.
   * 
   * This parameter is required.
   */
  exists?: boolean;
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
   * The number of UTF-8 bytes in the configuration content.
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
  /**
   * @remarks
   * The timestamp of the last modification in milliseconds.
   * 
   * @example
   * 1700000000000
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      exists: 'Exists',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      exists: 'boolean',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

