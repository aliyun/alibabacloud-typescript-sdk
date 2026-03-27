// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentResourceDetail extends $dara.Model {
  /**
   * @remarks
   * Additional resource identifier.
   * 
   * @example
   * app-prod-web-01
   */
  extraId?: string;
  /**
   * @remarks
   * Resource ID object.
   * 
   * @example
   * { "type": "ecs", "id": "i-bp1234567890abcdef" }
   */
  resourceId?: { [key: string]: any };
  /**
   * @remarks
   * Resource type, indicating which cloud product the resource belongs to.
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

