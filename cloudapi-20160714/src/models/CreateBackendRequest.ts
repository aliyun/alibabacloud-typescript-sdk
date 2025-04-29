// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateBackendRequestTag } from "./CreateBackendRequestTag";


export class CreateBackendRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the backend service.
   * 
   * This parameter is required.
   * 
   * @example
   * testBackendService
   */
  backendName?: string;
  /**
   * @remarks
   * The type of the backend service.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  backendType?: string;
  /**
   * @remarks
   * Specifies to create a EventBridge service-linked role.
   * 
   * @example
   * true
   */
  createEventBridgeServiceLinkedRole?: boolean;
  /**
   * @remarks
   * Specifies to create a service-linked role.
   * 
   * @example
   * true
   */
  createSlr?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * release data api 411055691504981
   */
  description?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   */
  tag?: CreateBackendRequestTag[];
  static names(): { [key: string]: string } {
    return {
      backendName: 'BackendName',
      backendType: 'BackendType',
      createEventBridgeServiceLinkedRole: 'CreateEventBridgeServiceLinkedRole',
      createSlr: 'CreateSlr',
      description: 'Description',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendName: 'string',
      backendType: 'string',
      createEventBridgeServiceLinkedRole: 'boolean',
      createSlr: 'boolean',
      description: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateBackendRequestTag },
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

