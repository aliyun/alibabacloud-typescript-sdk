// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateErRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-test
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value-test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  /**
   * @remarks
   * List of tags.
   */
  tag?: CreateErRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      erName: 'ErName',
      masterZoneId: 'MasterZoneId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      erName: 'string',
      masterZoneId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateErRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

