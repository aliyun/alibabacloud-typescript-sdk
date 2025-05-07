// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWhitelistTemplateResponseBodyDataTemplate } from "./DescribeWhitelistTemplateResponseBodyDataTemplate";


export class DescribeWhitelistTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the IP whitelist template.
   */
  template?: DescribeWhitelistTemplateResponseBodyDataTemplate;
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: DescribeWhitelistTemplateResponseBodyDataTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

