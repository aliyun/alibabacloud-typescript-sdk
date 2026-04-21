// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoDisposeEntitiesShrinkRequest extends $dara.Model {
  autoDisposeRecordIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alibaba_cloud_sas
   */
  dataSourceType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
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

