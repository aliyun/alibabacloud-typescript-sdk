// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeGroupDescriptionRequest extends $dara.Model {
  /**
   * @example
   * okcc
   */
  description?: string;
  /**
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
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

