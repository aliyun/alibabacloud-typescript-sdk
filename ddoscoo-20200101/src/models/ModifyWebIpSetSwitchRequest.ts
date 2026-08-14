// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebIpSetSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      domain: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

