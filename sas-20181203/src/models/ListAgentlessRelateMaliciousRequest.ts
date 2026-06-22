// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessRelateMaliciousRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 80****
   */
  eventId?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The scenario for batch processing. Valid values:
   * - same_file_md5: same file MD5.
   * - default (default value): same alerting type.
   * 
   * @example
   * default
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      eventId: 'EventId',
      lang: 'Lang',
      pageSize: 'PageSize',
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      eventId: 'number',
      lang: 'string',
      pageSize: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

