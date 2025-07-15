// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeLiveDomainResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest domain or streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the domain name is moved.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-****ke6uuxw****
   */
  newResourceGroupId?: string;
  ownerId?: number;
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

