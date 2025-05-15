// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServicesRequestFilter } from "./ListServicesRequestFilter";
import { ListServicesRequestTag } from "./ListServicesRequestTag";


export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServicesRequestFilter[];
  /**
   * @remarks
   * Keyword fuzzy query.
   * 
   * @example
   * name
   */
  fuzzyKeyword?: string;
  /**
   * @remarks
   * Whether it is used. Optional values:
   * 
   * 
   * 
   * - false: not being used.
   * 
   * 
   * 
   * - true: already in use.
   * 
   * @example
   * false
   */
  inUsed?: boolean;
  /**
   * @remarks
   * The number of entries page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * Service ordering type.
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
   * Service access type.
   * 
   * @example
   * All
   */
  serviceAccessType?: string;
  /**
   * @remarks
   * The tags.
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

