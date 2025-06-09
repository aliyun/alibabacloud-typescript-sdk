// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSavedSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * displayname
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the Logstore to which the saved search belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the saved search. The name must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * savedsearch-name
   */
  savedsearchName?: string;
  /**
   * @remarks
   * The query statement of the saved search. A query statement consists of a search statement and an analytic statement in the Search statement|Analytic statement format. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * 
   * This parameter is required.
   * 
   * @example
   * *|select date_format(__time__-__time__%60, \\"%H:%i:%s\\") as time, COUNT(*) as pv group by time
   */
  searchQuery?: string;
  /**
   * @remarks
   * The topic of the logs.
   * 
   * @example
   * theme
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

