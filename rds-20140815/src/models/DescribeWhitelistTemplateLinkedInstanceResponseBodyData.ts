// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhitelistTemplateLinkedInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the instance.
   */
  insName?: string[];
  /**
   * @remarks
   * The ID of the whitelist template.
   * 
   * @example
   * 412
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      insName: 'InsName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insName: { 'type': 'array', 'itemType': 'string' },
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.insName)) {
      $dara.Model.validateArray(this.insName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

