// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClientConfStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that is added to the agent configuration policy.
   * 
   * This parameter is required.
   * 
   * @example
   * machineResource
   */
  tag?: string;
  /**
   * @remarks
   * The extended tag of the agent configuration policy.
   * 
   * @example
   * auto
   */
  tagExt?: string;
  /**
   * @remarks
   * The value of the tag that is added to the agent configuration policy.
   * 
   * *   major
   * *   advanced
   * *   basic
   * 
   * This parameter is required.
   * 
   * @example
   * advanced
   */
  tagValue?: string;
  /**
   * @remarks
   * The UUID of the server that you want to query.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  uuid?: string;
  /**
   * @remarks
   * The UUID of the asset. You can specify a maximum of 500 UUIDs at a time.
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

