// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanAllocateCreditAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The enterprise entity ID.
   * 
   * @example
   * 2032123221
   */
  ecid?: string;
  /**
   * @remarks
   * The allocated credit limit of the enterprise.
   * 
   * @example
   * 300
   */
  ecidAllocatedCreditAmount?: string;
  /**
   * @remarks
   * The enterprise credit quota.
   * 
   * @example
   * 1000
   */
  ecidCreditAmount?: string;
  /**
   * @remarks
   * The account ECID.
   * 
   * @example
   * 202321232
   */
  fundAccountEcid?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 12332112
   */
  fundAccountId?: number;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * 云某的名称
   */
  fundAccountName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the account owner.
   * 
   * @example
   * 123433121
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @remarks
   * The maximum allocatable credit limit of the current account.
   * 
   * @example
   * 1500
   */
  maxCanAllocateCreditAmount?: string;
  /**
   * @remarks
   * Response structure metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The minimum allocatable credit limit of the current account.
   * 
   * @example
   * 200
   */
  minCanAllocateCreditAmount?: string;
  /**
   * @remarks
   * The primary marketplace.
   * 
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC706AAC-75A6-55B5-9AB7-7D171C6C7655
   */
  requestId?: string;
  /**
   * @remarks
   * The site.
   * 
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

