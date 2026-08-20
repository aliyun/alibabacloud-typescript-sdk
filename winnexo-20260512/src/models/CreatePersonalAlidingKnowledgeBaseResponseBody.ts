// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAlidingKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2025-11-14T02:18:27Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The knowledge base URL (echoed from the request parameter for caller alignment).
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  kbUrl?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The name of the AI assistant.
   * 
   * @example
   * p-toolset-3dcef7ca-31b9-4d1c-8692-1ef03099cad3
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E68654BD-F7BA-5837-8686-5645D739A47C
   */
  requestId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - 200: Success.
   * - 500: Failure.
   * 
   * @example
   * 200
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      kbUrl: 'kbUrl',
      message: 'message',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      gmtCreate: 'string',
      kbUrl: 'string',
      message: 'string',
      name: 'string',
      operatingObjectName: 'string',
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

