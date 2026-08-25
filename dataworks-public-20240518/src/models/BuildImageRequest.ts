// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildImageRequest extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs) used for the build.
   * 
   * @example
   * 0.5
   */
  cu?: number;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom_image_xxxx_xxxx
   */
  id?: string;
  /**
   * @remarks
   * The image build execution ID, which is used as an idempotence identifier.
   * 
   * @example
   * 582d4896-d224-413b-b883-239eeebe0bc5
   */
  processId?: string;
  /**
   * @remarks
   * The unique identifier of the general-purpose resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      id: 'Id',
      processId: 'ProcessId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      id: 'string',
      processId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

