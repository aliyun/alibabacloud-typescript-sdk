// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisBySignatureRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the signature key.
   * 
   * This parameter is required.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  signatureId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      signatureId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

