// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiMcpServerUserConfigRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  enablePublicAccess?: boolean;
  vpcWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      enablePublicAccess: 'enablePublicAccess',
      vpcWhitelists: 'vpcWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePublicAccess: 'boolean',
      vpcWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vpcWhitelists)) {
      $dara.Model.validateArray(this.vpcWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

