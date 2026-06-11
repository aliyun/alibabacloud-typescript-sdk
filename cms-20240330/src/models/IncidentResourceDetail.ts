// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentResourceDetail extends $dara.Model {
  /**
   * @remarks
   * An additional resource identifier.
   * 
   * @example
   * app-prod-web-01
   */
  extraId?: string;
  /**
   * @remarks
   * The resource ID object.
   * 
   * @example
   * { "type": "ecs", "id": "i-bp1234567890abcdef" }
   */
  resourceId?: { [key: string]: any };
  /**
   * @remarks
   * The resource type. This indicates the cloud product to which the resource belongs.
   * 
   * @example
   * ecs
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extraId: 'extraId',
      resourceId: 'resourceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraId: 'string',
      resourceId: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.resourceId) {
      $dara.Model.validateMap(this.resourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

