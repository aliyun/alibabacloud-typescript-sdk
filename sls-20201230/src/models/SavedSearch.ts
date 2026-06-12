// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SavedSearch extends $dara.Model {
  /**
   * @remarks
   * The display name of the saved search.
   * 
   * This parameter is required.
   * 
   * @example
   * Method
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the saved search.
   * 
   * This parameter is required.
   * 
   * @example
   * savedsearch-name
   */
  savedsearchName?: string;
  /**
   * @remarks
   * The search statement or analytic statement.
   * 
   * This parameter is required.
   * 
   * @example
   * status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5
   */
  searchQuery?: string;
  /**
   * @remarks
   * The topic of the log. The default value is an empty string ("").
   * 
   * @example
   * topic-test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      logstore: 'logstore',
      savedsearchName: 'savedsearchName',
      searchQuery: 'searchQuery',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      logstore: 'string',
      savedsearchName: 'string',
      searchQuery: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

