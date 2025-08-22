// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDcdnUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the user feature that you want to delete. Currently, only DCDN Web Application Firewall (WAF) can be deleted. Default value: waf.
   * 
   * @example
   * waf
   */
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

