// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClientConfStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The client configuration tag.
   * 
   * This parameter is required.
   * 
   * @example
   * machineResource
   */
  tag?: string;
  /**
   * @remarks
   * The extended tag.
   * 
   * @example
   * auto
   */
  tagExt?: string;
  /**
   * @remarks
   * The client tag value. Valid values:
   * - major
   * - advanced
   * - basic
   * 
   * This parameter is required.
   * 
   * @example
   * advanced
   */
  tagValue?: string;
  /**
   * @remarks
   * The UUID of the asset to query. You must specify at least one of the Uuid and Uuids parameters. Otherwise, the API returns a 400 error. The Uuid parameter specifies a single asset.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  uuid?: string;
  /**
   * @remarks
   * The UUIDs of asset instances. A maximum of 500 UUIDs can be specified at a time. You must specify at least one of the Uuids and Uuid parameters. Otherwise, the API returns a 400 error. The Uuids parameter specifies multiple assets in a batch.
   */
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      tagExt: 'TagExt',
      tagValue: 'TagValue',
      uuid: 'Uuid',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
      tagExt: 'string',
      tagValue: 'string',
      uuid: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

