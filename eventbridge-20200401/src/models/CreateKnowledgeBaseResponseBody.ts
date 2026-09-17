// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBase } from "./KnowledgeBase";


export class CreateKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates a successful operation. An error code is returned if the operation fails.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The details of the created knowledge base, including the name, status, and configuration information.
   */
  data?: KnowledgeBase;
  /**
   * @remarks
   * The response message. A value of Operation success is returned if the operation succeeds. A specific error description is returned if the operation fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. A value of true indicates success.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: KnowledgeBase,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

