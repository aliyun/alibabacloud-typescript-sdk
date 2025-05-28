// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanAllocateCreditAmountResponseBody extends $dara.Model {
  /**
   * @example
   * 2032123221
   */
  ecid?: string;
  /**
   * @example
   * 300
   */
  ecidAllocatedCreditAmount?: string;
  /**
   * @example
   * 1000
   */
  ecidCreditAmount?: string;
  /**
   * @example
   * 202321232
   */
  fundAccountEcid?: string;
  /**
   * @example
   * 12332112
   */
  fundAccountId?: number;
  /**
   * @example
   * 云某的名称
   */
  fundAccountName?: string;
  /**
   * @example
   * 123433121
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @example
   * 1500
   */
  maxCanAllocateCreditAmount?: string;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 200
   */
  minCanAllocateCreditAmount?: string;
  /**
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @example
   * CC706AAC-75A6-55B5-9AB7-7D171C6C7655
   */
  requestId?: string;
  /**
   * @example
   * 26842
   */
  site?: string;
  static names(): { [key: string]: string } {
    return {
      ecid: 'Ecid',
      ecidAllocatedCreditAmount: 'EcidAllocatedCreditAmount',
      ecidCreditAmount: 'EcidCreditAmount',
      fundAccountEcid: 'FundAccountEcid',
      fundAccountId: 'FundAccountId',
      fundAccountName: 'FundAccountName',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      maxCanAllocateCreditAmount: 'MaxCanAllocateCreditAmount',
      metadata: 'Metadata',
      minCanAllocateCreditAmount: 'MinCanAllocateCreditAmount',
      nbid: 'Nbid',
      requestId: 'RequestId',
      site: 'Site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecid: 'string',
      ecidAllocatedCreditAmount: 'string',
      ecidCreditAmount: 'string',
      fundAccountEcid: 'string',
      fundAccountId: 'number',
      fundAccountName: 'string',
      fundAccountOwnerAccountId: 'number',
      maxCanAllocateCreditAmount: 'string',
      metadata: 'any',
      minCanAllocateCreditAmount: 'string',
      nbid: 'string',
      requestId: 'string',
      site: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

