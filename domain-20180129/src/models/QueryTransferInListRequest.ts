// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTransferInListRequest extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * INIT
   */
  simpleTransferInStatus?: string;
  /**
   * @example
   * 1514428524669
   */
  submissionEndDate?: number;
  /**
   * @example
   * 1514428524669
   */
  submissionStartDate?: number;
  /**
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

