// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceAclRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the authorized operation.
   * 
   * Valid operations vary by resource type:
   * - Topic: Pub, Sub, and Pub|Sub
   * - Consumer group: Sub
   * 
   * This parameter is required.
   * 
   * @example
   * Pub
   */
  actions?: string[];
  /**
   * @remarks
   * The authorization decision.
   * 
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  decision?: string;
  /**
   * @remarks
   * The IP address whitelist.
   */
  ipWhitelists?: string[];
  /**
   * @remarks
   * The name of the authorized resource.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the authorized resource.
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      decision: 'decision',
      ipWhitelists: 'ipWhitelists',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      decision: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

