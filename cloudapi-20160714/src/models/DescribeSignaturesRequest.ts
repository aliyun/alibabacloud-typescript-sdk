// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSignaturesRequest extends $dara.Model {
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
   * The IDs of the keys to query.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  signatureId?: string;
  /**
   * @remarks
   * The names of the keys to query.
   * 
   * @example
   * backendsignature
   */
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      signatureId: 'string',
      signatureName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

