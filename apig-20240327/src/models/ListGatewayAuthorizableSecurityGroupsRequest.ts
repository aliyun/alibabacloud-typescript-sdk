// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayAuthorizableSecurityGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c4a21b3560fad4ec299f3e63f4***
   */
  csClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      csClusterId: 'csClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

