// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceUsagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter name. You can query by one or more names. Valid values:
   * 
   * - ServiceId: The service ID.
   * 
   * - ServiceName: The service name.
   * 
   * - Status: The service status.
   * 
   * - SupplierName: The supplier name.
   * 
   * @example
   * ServiceId
   */
  name?: string;
  /**
   * @remarks
   * The filter values. You can specify 1 to 10 values.
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

export class ListServiceUsagesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceUsagesRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You can obtain this token from the NextToken parameter in the response to the previous request.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  regionId?: string;
  /**
   * @remarks
   * The supplier role.
   * 
   * @example
   * Supplier
   */
  supplierRole?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      supplierRole: 'SupplierRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceUsagesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      supplierRole: 'string',
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

