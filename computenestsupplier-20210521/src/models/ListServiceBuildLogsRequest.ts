// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceBuildLogsRequestFilter extends $dara.Model {
  /**
   * @example
   * Name
   */
  name?: string;
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
  filter?: ListServiceBuildLogsRequestFilter[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAYChudnQUoBH+mGWFpb6oP0=
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * service-39f4f251e94843xxxxxx
   */
  serviceId?: string;
  /**
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

