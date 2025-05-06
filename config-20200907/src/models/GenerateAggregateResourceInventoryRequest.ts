// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAggregateResourceInventoryRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of member accounts in the account group. Separate multiple member account IDs with commas (,).
   * 
   * @example
   * 126672004088****
   */
  accountIds?: string;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * ca-a91d626622af0035****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The IDs of the regions to which the resources belong. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  regions?: string;
  /**
   * @remarks
   * Indicates whether the resource is deleted. Valid values:
   * 
   * *   1 (default): The resource is retained.
   * *   0: The resource is deleted.
   * 
   * @example
   * 1
   */
  resourceDeleted?: number;
  /**
   * @remarks
   * The resource types. Separate multiple resource types with commas (,).
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      aggregatorId: 'AggregatorId',
      regions: 'Regions',
      resourceDeleted: 'ResourceDeleted',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: 'string',
      aggregatorId: 'string',
      regions: 'string',
      resourceDeleted: 'number',
      resourceTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

