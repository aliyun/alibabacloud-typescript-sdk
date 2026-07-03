// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoDisposeEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of automated disposal records.
   */
  autoDisposeRecordIds?: string[];
  /**
   * @remarks
   * The page number. The value must be 1 or greater.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * alibaba_cloud_sas
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You can obtain this token from the response to a previous call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The unique identifier of the playbook.
   * 
   * @example
   * b2491e39-ddf2-478a-8c07-*****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      autoDisposeRecordIds: 'AutoDisposeRecordIds',
      currentPage: 'CurrentPage',
      dataSourceType: 'DataSourceType',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDisposeRecordIds: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'string',
      dataSourceType: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.autoDisposeRecordIds)) {
      $dara.Model.validateArray(this.autoDisposeRecordIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

