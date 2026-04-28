// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dataset-nhcrmjpx1zsorlaq****
   */
  dataSetId?: string;
  /**
   * @example
   * {"field1":"value1","field2":"value2"}
   */
  filter?: string;
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
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * updatetime
   */
  orderField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      filter: 'Filter',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      orderField: 'OrderField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'string',
      filter: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      orderField: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

