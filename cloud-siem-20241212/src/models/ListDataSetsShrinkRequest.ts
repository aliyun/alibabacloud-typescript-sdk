// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetsShrinkRequest extends $dara.Model {
  dataSetId?: string;
  dataSetIdsShrink?: string;
  dataSetName?: string;
  dataSetStatus?: number;
  dataSetType?: string;
  lang?: string;
  maxResults?: number;
  nextToken?: string;
  orderDirection?: string;
  orderFieldName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      dataSetIdsShrink: 'DataSetIds',
      dataSetName: 'DataSetName',
      dataSetStatus: 'DataSetStatus',
      dataSetType: 'DataSetType',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderDirection: 'OrderDirection',
      orderFieldName: 'OrderFieldName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'string',
      dataSetIdsShrink: 'string',
      dataSetName: 'string',
      dataSetStatus: 'number',
      dataSetType: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderDirection: 'string',
      orderFieldName: 'string',
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

