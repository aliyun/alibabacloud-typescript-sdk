// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeLiveDomainResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest or streaming domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the destination resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-****ke6uuxw****
   */
  newResourceGroupId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      newResourceGroupId: 'NewResourceGroupId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      newResourceGroupId: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

