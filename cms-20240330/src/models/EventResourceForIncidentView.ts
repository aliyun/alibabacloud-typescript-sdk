// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventResourceForIncidentView extends $dara.Model {
  /**
   * @remarks
   * The domain of the resource type.
   * 
   * @example
   * rum
   */
  domain?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * default
   */
  entityId?: string;
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * "Instance"
   */
  entityType?: string;
  /**
   * @remarks
   * The string that describes the properties of the resource.
   * 
   * @example
   * "{"name":"web-server-01","ip":"10.0.0.1"}"
   */
  probs?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * [{\\"value\\":\\"测试\\",\\"key\\":\\"环境\\"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      entityId: 'entityId',
      entityType: 'entityType',
      probs: 'probs',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      entityId: 'string',
      entityType: 'string',
      probs: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

