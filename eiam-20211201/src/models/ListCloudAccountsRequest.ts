// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAccountsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter field. Valid values:
   * 
   * - CloudAccountId: The ID of the Alibaba Cloud account.
   * 
   * - CloudAccountExternalId: The external unique ID of the Alibaba Cloud account.
   * 
   * - CloudAccountVendorType: The type of the Alibaba Cloud account.
   * 
   * @example
   * CloudAccountId
   */
  name?: string;
  /**
   * @remarks
   * A list of values for the filter field.
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

export class ListCloudAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: ListCloudAccountsRequestFilter[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of records to return on each page.
   * 
   * - The default value is 20.
   * 
   * - The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the start of the next page.
   * 
   * - If you leave this parameter empty, the query starts from the first page.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListCloudAccountsRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

