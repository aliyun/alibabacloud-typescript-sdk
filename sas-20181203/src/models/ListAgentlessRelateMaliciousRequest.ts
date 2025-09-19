// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessRelateMaliciousRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 80****
   */
  eventId?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The scenarios of batch handling. Valid values:
   * 
   * *   same_file_md5: the same MD5 hash value.
   * *   default: the same alert type. This is the default value.
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

