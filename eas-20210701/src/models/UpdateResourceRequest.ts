// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateResourceRequestSelfManagedResourceOptions } from "./UpdateResourceRequestSelfManagedResourceOptions";


export class UpdateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The new name of the resource group after the update. The name can be up to 27 characters in length.
   * 
   * @example
   * iot
   */
  resourceName?: string;
  /**
   * @remarks
   * The configuration items of the self-managed resource group.
   */
  selfManagedResourceOptions?: UpdateResourceRequestSelfManagedResourceOptions;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'ResourceName',
      selfManagedResourceOptions: 'SelfManagedResourceOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      selfManagedResourceOptions: UpdateResourceRequestSelfManagedResourceOptions,
    };
  }

  validate() {
    if(this.selfManagedResourceOptions && typeof (this.selfManagedResourceOptions as any).validate === 'function') {
      (this.selfManagedResourceOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

