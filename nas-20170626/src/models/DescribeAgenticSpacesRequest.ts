// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticSpacesRequestFilters extends $dara.Model {
  /**
   * @example
   * AgenticSpaceIds
   */
  key?: string;
  /**
   * @example
   * 06229oypxjgox0u****
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

export class DescribeAgenticSpacesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  filters?: DescribeAgenticSpacesRequestFilters[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * MTc3OTkzNTA0Mjg0NTc1MDI4OCM0MDQ0MzA****=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': DescribeAgenticSpacesRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
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

