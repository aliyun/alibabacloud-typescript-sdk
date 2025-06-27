// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransferDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the domain name for which you want to view the transfer record.
   * 
   * @example
   * alidns.com
   */
  domainName?: string;
  /**
   * @remarks
   * The user ID from which the domain name was transferred to the current account.
   * 
   * @example
   * 123456
   */
  fromUserId?: number;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The user ID to which the domain name was transferred from the current account.
   * 
   * @example
   * 123456
   */
  targetUserId?: number;
  /**
   * @remarks
   * The transfer type. Valid values:
   * 
   * *   IN: The domain name was transferred to the current account.
   * *   OUT: The domain name was transferred from the current account.
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

