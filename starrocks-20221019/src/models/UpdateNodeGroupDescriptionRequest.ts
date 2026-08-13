// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeGroupDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the compute group.
   * 
   * @example
   * okcc
   */
  description?: string;
  /**
   * @remarks
   * The ID of the compute group.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The RAM authorization information.
   * 
   * @example
   * Optional
   */
  xAcsRamAuthContext?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      nodeGroupId: 'NodeGroupId',
      xAcsRamAuthContext: 'X-Acs-Ram-Auth-Context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      nodeGroupId: 'string',
      xAcsRamAuthContext: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

