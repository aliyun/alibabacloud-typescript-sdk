// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransferDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. Use this parameter to query the transfer records of a specific domain name.
   * 
   * @example
   * example.top
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the source account. Use this parameter to query the list of domain names transferred from this account to the current account.
   * 
   * @example
   * 1*******
   */
  fromUserId?: number;
  /**
   * @remarks
   * The language of the response.
   * 
   * Valid values:
   * 
   * zh: Chinese
   * 
   * en: English
   * 
   * The default value is zh.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the destination account. Use this parameter to query the list of domain names transferred from the current account to this account.
   * 
   * @example
   * 1*******
   */
  targetUserId?: number;
  /**
   * @remarks
   * The type of transfer. Valid values:
   * 
   * - IN: The list of domain names transferred to the current account.
   * 
   * - OUT: The list of domain names transferred from the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * IN
   */
  transferType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      fromUserId: 'FromUserId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      targetUserId: 'TargetUserId',
      transferType: 'TransferType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      fromUserId: 'number',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      targetUserId: 'number',
      transferType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

