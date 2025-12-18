// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceInventoryResponseBodyResourceInventory extends $dara.Model {
  /**
   * @remarks
   * The download URL of the resource inventory.
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the resource inventory was generated. The value is a timestamp.
   * 
   * @example
   * 1687674634220
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

export class GetResourceInventoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89E2F38F-4EE4-545A-BD56-92E007ECFEE9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource inventory.
   */
  resourceInventory?: GetResourceInventoryResponseBodyResourceInventory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceInventory: 'ResourceInventory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceInventory: GetResourceInventoryResponseBodyResourceInventory,
    };
  }

  validate() {
    if(this.resourceInventory && typeof (this.resourceInventory as any).validate === 'function') {
      (this.resourceInventory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

