// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDomainAcceleratorRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance to be disassociated. You can specify up to 50 IDs.
   * 
   * If you leave this parameter empty, all GA instances associated with the specified domain name are disassociated.
   */
  acceleratorIds?: string[];
  /**
   * @remarks
   * The accelerated domain name to be disassociated.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorIds: 'AcceleratorIds',
      domain: 'Domain',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorIds: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acceleratorIds)) {
      $dara.Model.validateArray(this.acceleratorIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

