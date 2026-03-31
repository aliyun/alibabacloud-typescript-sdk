// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatConfigurationsRequestFilters extends $dara.Model {
  /**
   * @example
   * status
   */
  name?: string;
  /**
   * @example
   * inactive
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class ListChatConfigurationsRequest extends $dara.Model {
  /**
   * @example
   * [{"Name": "status", "Value": "inactive"}, {"Name": "type", "Value": "private"}]
   */
  filters?: ListChatConfigurationsRequestFilters[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AQEBARoBBgEAAgIBBQ==
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': ListChatConfigurationsRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

