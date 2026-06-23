// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkZonesRequest extends $dara.Model {
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
   * The number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The collection of network zone IDs.
   */
  networkZoneIds?: string[];
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination token for the previous page.
   * 
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      networkZoneIds: 'NetworkZoneIds',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      networkZoneIds: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      previousToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkZoneIds)) {
      $dara.Model.validateArray(this.networkZoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

