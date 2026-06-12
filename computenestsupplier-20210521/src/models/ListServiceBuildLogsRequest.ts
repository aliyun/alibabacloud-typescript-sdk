// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceBuildLogsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter. You can specify one or more filter names. Valid values:
   * 
   * - ServiceId: The service ID.
   * 
   * - Name: The service name.
   * 
   * - Status: The service status.
   * 
   * - SupplierName: The service provider name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The list of filter values. The list can contain from 1 to 10 values.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceBuildLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceBuildLogsRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAYChudnQUoBH+mGWFpb6oP0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-39f4f251e94843xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **Ascending**: Ascending
   * 
   * - **Descending** (default): Descending
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceBuildLogsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

