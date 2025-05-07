// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates } from "./DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates";


export class DescribeInstanceLinkedWhitelistTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rm-bp191w771kd3****
   */
  insName?: string;
  /**
   * @remarks
   * The information about whitelists that are returned by page.
   */
  templates?: DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates[];
  static names(): { [key: string]: string } {
    return {
      insName: 'InsName',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insName: 'string',
      templates: { 'type': 'array', 'itemType': DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

