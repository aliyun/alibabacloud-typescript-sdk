// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagLiveResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @example
   * product
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

export class TagLiveResourcesRequest extends $dara.Model {
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The type of the resources. Set the value to **DOMAIN**.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DOMAIN
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagLiveResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagLiveResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

