// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCodeupOrganizationResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2022-03-12 12:00:00
   */
  createdAt?: string;
  /**
   * @example
   * 3624
   */
  id?: number;
  /**
   * @example
   * 100003
   */
  namespaceId?: number;
  /**
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  /**
   * @example
   * test-codeup
   */
  path?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  updatedAt?: string;
  /**
   * @example
   * ORG_MEMBER
   */
  userRole?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      id: 'id',
      namespaceId: 'namespaceId',
      organizationId: 'organizationId',
      path: 'path',
      updatedAt: 'updatedAt',
      userRole: 'userRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'number',
      namespaceId: 'number',
      organizationId: 'string',
      path: 'string',
      updatedAt: 'string',
      userRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeupOrganizationResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidTagGroup.IdNotFound
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: GetCodeupOrganizationResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetCodeupOrganizationResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

