// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * The bound phone number.
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
   * 1234567890
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sipTrunkId: 'SipTrunkId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

