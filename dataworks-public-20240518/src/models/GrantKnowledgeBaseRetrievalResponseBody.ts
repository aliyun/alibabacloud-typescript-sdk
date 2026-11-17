// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantKnowledgeBaseRetrievalResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The stable ID of the associated knowledge base.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The DataWorks user ID of the principal that receives the share. The system verifies that the user belongs to the same tenant when the principal is added.
   * 
   * @example
   * 1000000000000000
   */
  principalId?: string;
  /**
   * @remarks
   * The type of principal that receives the share. This field is optional in the request. The default and the only response value is USER.
   * 
   * @example
   * USER
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      principalId: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantKnowledgeBaseRetrievalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code, which is used to determine the error type when the request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: GrantKnowledgeBaseRetrievalResponseBodyData;
  /**
   * @remarks
   * The security error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: GrantKnowledgeBaseRetrievalResponseBodyData,
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

