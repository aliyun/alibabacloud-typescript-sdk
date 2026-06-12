// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpsNoticesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter name. Valid values:
   * 
   * - Type: The notice type.
   * 
   * - ServiceId: The service ID.
   * 
   * - ServiceName: The service name. Fuzzy search is supported. The format for a fuzzy search is \\*xxx\\*.
   * 
   * - Category: The notice category.
   * 
   * - Severity: The severity level.
   * 
   * - NoticeId: The O\\&M notice ID.
   * 
   * @example
   * ServiceId
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

export class ListOpsNoticesRequest extends $dara.Model {
  /**
   * @remarks
   * The filters.
   */
  filter?: ListOpsNoticesRequestFilter[];
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
   * The query token. Set the value to the NextToken value returned in the last API call.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
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
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListOpsNoticesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
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

