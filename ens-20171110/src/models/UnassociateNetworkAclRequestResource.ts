// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateNetworkAclRequestResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource that you want to disassociate.
   * 
   * This parameter is required.
   * 
   * @example
   * n-5***
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource that you want to disassociate. Valid values:
   * 
   * *   Network
   * 
   * This parameter is required.
   * 
   * @example
   * Network
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
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

