// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceInventoryResponseBodyResourceInventory extends $dara.Model {
  /**
   * @remarks
   * The download URL of the resource inventory.
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the resource inventory was generated. The value is a timestamp.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1687674774123
   */
  resourceInventoryGenerateTime?: number;
  /**
   * @remarks
   * The generation status of the resource inventory. Valid values:
   * 
   * *   CREATING: The resource inventory is being generated.
   * *   COMPLETE: The resource inventory is generated.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      resourceInventoryGenerateTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

