// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInventorySynchronizationJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1234567890
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the synchronization targets.
   */
  inventorySourceIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return per page in a paging query. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. The value is the NextToken parameter value returned from the previous API call.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1234567890
   */
  startTime?: number;
  /**
   * @remarks
   * The synchronization status.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      inventorySourceIds: 'InventorySourceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      inventorySourceIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inventorySourceIds)) {
      $dara.Model.validateArray(this.inventorySourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

