// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 60
   */
  accessLevel?: number;
  /**
   * @example
   * 5240
   */
  id?: number;
  namespaceId?: string;
  organizationAlias?: string;
  /**
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  organizationName?: string;
  /**
   * @example
   * ORG_ADMIN
   */
  organizationRole?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      id: 'id',
      namespaceId: 'namespaceId',
      organizationAlias: 'organizationAlias',
      organizationId: 'organizationId',
      organizationName: 'organizationName',
      organizationRole: 'organizationRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      id: 'number',
      namespaceId: 'string',
      organizationAlias: 'string',
      organizationId: 'string',
      organizationName: 'string',
      organizationRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationsResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 95FE5953-FF5B-5F80-94AD-FFF97D990FE0
   */
  requestId?: string;
  result?: ListOrganizationsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOrganizationsResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

