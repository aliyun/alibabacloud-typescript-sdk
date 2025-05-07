// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates extends $dara.Model {
  /**
   * @remarks
   * The primary key of the data table.
   * 
   * @example
   * 1884
   */
  id?: number;
  /**
   * @remarks
   * The IP addresses.
   * 
   * @example
   * 12.0.X.X,10.2.X.X
   */
  ips?: string;
  /**
   * @remarks
   * The whitelist template ID.
   * 
   * @example
   * 412
   */
  templateId?: number;
  /**
   * @remarks
   * The whitelist template name.
   * 
   * @example
   * template_123
   */
  templateName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 16****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ips: 'Ips',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ips: 'string',
      templateId: 'number',
      templateName: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

