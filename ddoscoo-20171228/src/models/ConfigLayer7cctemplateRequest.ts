// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer7CCTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

