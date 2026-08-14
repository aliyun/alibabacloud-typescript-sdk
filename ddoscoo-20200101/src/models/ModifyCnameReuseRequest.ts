// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCnameReuseRequest extends $dara.Model {
  cname?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enable?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      enable: 'Enable',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      enable: 'number',
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

