// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateErRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Lingjun HUB Name
   * 
   * This parameter is required.
   * 
   * @example
   * er-wulanchabu-main
   */
  erName?: string;
  /**
   * @remarks
   * Primary Zone
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmyuzlx2iihcy
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      erName: 'ErName',
      masterZoneId: 'MasterZoneId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      erName: 'string',
      masterZoneId: 'string',
      regionId: 'string',
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

