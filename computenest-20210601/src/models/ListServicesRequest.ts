// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter name. You can specify one or more filter names to query services. Valid values:
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
   * Status
   */
  name?: string;
  /**
   * @remarks
   * The filter values.
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

export class ListServicesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServicesRequestFilter[];
  /**
   * @remarks
   * The keyword for a fuzzy query.
   * 
   * @example
   * name
   */
  fuzzyKeyword?: string;
  /**
   * @remarks
   * Specifies whether the service is in use. Valid values:
   * 
   * - false: The service is not in use.
   * 
   * - true: The service is in use.
   * 
   * @example
   * false
   */
  inUsed?: boolean;
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
   * The token that is used to retrieve the next page of results. Set this to the NextToken value returned from the previous API call.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The sorting type for services.
   * 
   * @example
   * UpdateTime
   */
  orderByType?: string;
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
   * The service access type.
   * 
   * @example
   * All
   */
  serviceAccessType?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: ListServicesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      fuzzyKeyword: 'FuzzyKeyword',
      inUsed: 'InUsed',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderByType: 'OrderByType',
      regionId: 'RegionId',
      serviceAccessType: 'ServiceAccessType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServicesRequestFilter },
      fuzzyKeyword: 'string',
      inUsed: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderByType: 'string',
      regionId: 'string',
      serviceAccessType: 'string',
      tag: { 'type': 'array', 'itemType': ListServicesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

