// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseUsageResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The metering item.
   * 
   * @example
   * KnowledgeBaseRead
   */
  item?: string;
  /**
   * @remarks
   * The usage of the item within the query range. The unit is specified by `Unit`. The number of calls, tokens, and context evolutions are accumulated over the range. Storage is calculated by averaging the occupancy snapshots of each workspace within the range and rounding to the nearest integer byte. For the account dimension, the average values of all workspaces are summed.
   * 
   * @example
   * 15
   */
  quantity?: number;
  /**
   * @remarks
   * The metering unit. Valid values:
   * - `Count`: The number of calls.
   * - `Token`: The number of tokens.
   * - `MicroCredit`: One millionth of a credit.
   * - `Byte`: Bytes.
   * 
   * @example
   * Count
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      quantity: 'Quantity',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      quantity: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextDatabaseUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query dimension. Valid values:
   * - `Workspace`: A single workspace.
   * - `Account`: All workspaces under the caller account.
   * 
   * @example
   * Workspace
   */
  dimension?: string;
  /**
   * @remarks
   * The end time of the query range passed in the request, exclusive.
   * 
   * @example
   * 2026-08-01T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The usage list. It returns all seven metering items in a fixed order. If an item has no data within the query range, its usage is 0.
   */
  items?: GetContextDatabaseUsageResponseBodyItems[];
  /**
   * @remarks
   * The ID of the API request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query range passed in the request, inclusive.
   * 
   * @example
   * 2026-07-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the queried workspace. This field has a value only when `Dimension` is set to `Workspace`. It is empty for the account dimension.
   * 
   * @example
   * ws-x9z4ctzed9gfu2w
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      endTime: 'EndTime',
      items: 'Items',
      requestId: 'RequestId',
      startTime: 'StartTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      endTime: 'string',
      items: { 'type': 'array', 'itemType': GetContextDatabaseUsageResponseBodyItems },
      requestId: 'string',
      startTime: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

