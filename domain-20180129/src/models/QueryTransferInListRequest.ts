// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTransferInListRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name, which supports prefix matching (fuzzy query).
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of error messages returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number of the domain name list.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size for paging the domain name list.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Transfer status. Valid values:  
   * - **INIT**: Submit transfer-in.  
   * - **AUTHORIZATION**: Authorize transfer-in (email verification).  
   * - **NAME_VERIFICATION**: Name review.  
   * - **PASSWORD_VERIFICATION**: Transfer password verification.  
   * - **PENDING**: Transfer-in in progress.  
   * - **SUCCESS**: Transfer-in succeeded.  
   * - **FAIL**: Transfer-in failed.
   * 
   * @example
   * INIT
   */
  simpleTransferInStatus?: string;
  /**
   * @remarks
   * End time for submitting the domain name list for transfer-in.
   * 
   * @example
   * 1514428524669
   */
  submissionEndDate?: number;
  /**
   * @remarks
   * The start time for submitting the domain name list for transfer-in.
   * 
   * @example
   * 1514428524669
   */
  submissionStartDate?: number;
  /**
   * @remarks
   * The user IP address, which can be set to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      simpleTransferInStatus: 'SimpleTransferInStatus',
      submissionEndDate: 'SubmissionEndDate',
      submissionStartDate: 'SubmissionStartDate',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      simpleTransferInStatus: 'string',
      submissionEndDate: 'number',
      submissionStartDate: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

