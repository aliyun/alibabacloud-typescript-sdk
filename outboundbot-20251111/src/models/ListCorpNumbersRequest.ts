// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCorpNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * The bound number.
   * 
   * @example
   * 057100001234
   */
  number?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The SIP trunk ID.
   * 
   * @example
   * 159d4b8361804ebda21242216a8981c2
   */
  sipTrunkId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 123456789
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sipTrunkId: 'SipTrunkId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sipTrunkId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

