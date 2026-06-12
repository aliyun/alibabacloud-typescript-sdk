// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceSharedAccountsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter.
   * 
   * @example
   * UserAliUid
   */
  name?: string;
  /**
   * @remarks
   * The list of filter values.
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

export class ListServiceSharedAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceSharedAccountsRequestFilter[];
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
   * The token used to start the next query. Set this parameter to the NextToken value returned from the last API call.
   * 
   * @example
   * AAAAAR130adlM4fHHVSWpTca/t4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The permission type. Valid values:
   * 
   * - Deployable: The service is deployable.
   * 
   * - Accessible: The service is accessible.
   * 
   * @example
   * Accessible
   */
  permission?: string;
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
   * @example
   * service-e10349089de34exxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      permission: 'Permission',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceSharedAccountsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      permission: 'string',
      regionId: 'string',
      serviceId: 'string',
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

