// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * Valid values:
   * 
   * *   instance
   * *   eip
   * *   disk
   * *   network
   * *   natgateway
   * *   vswitch
   * 
   * @example
   * eip
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

