// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for resources.
   * 
   * Specify multiple key-value pairs in JSON format to filter resources. If a List or Get operation for a cloud product supports filtering by specific properties, you can use those properties as filter conditions for this parameter.
   * 
   * > The supported filter fields may vary for different resource types. For more information about the supported fields, see the OpenAPI documentation for the specific resource.
   * 
   * For example, DBInstance resources support filtering by the `EditionType` and `PaymentType` fields.
   * 
   * @example
   * {
   *   "EditionType": "Community",
   *   "PaymentType": "PostPaid"
   * }
   */
  filter?: { [key: string]: any };
  /**
   * @remarks
   * The maximum number of records to return on each page for a paged query. Maximum value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * - You do not need to specify this parameter for the first query. The system returns data from the first page.
   * 
   * - For subsequent queries, set this parameter to the nextToken value returned from the previous call.
   * 
   * > If this parameter contains only digits, Cloud Control API treats it as the `PageNumber` for paging.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. This parameter is required if the cloud product is region-specific.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.filter) {
      $dara.Model.validateMap(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

