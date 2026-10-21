// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoDisposeEntitiesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of decision-making disposal IDs.
   */
  autoDisposeRecordIdsShrink?: string;
  /**
   * @remarks
   * The current page number. The value must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The data source type.
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
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required. If you do not specify this parameter, the service returns a 400 error: "The specified Lang can not be empty." Explicitly pass a language code.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that indicates the position from which the current call starts reading. An empty value indicates that all data has been read.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The UUID of the playbook. This is the unique identifier of the playbook.
   * 
   * @example
   * b2491e39-ddf2-478a-8c07-*****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      autoDisposeRecordIdsShrink: 'AutoDisposeRecordIds',
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
      autoDisposeRecordIdsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

