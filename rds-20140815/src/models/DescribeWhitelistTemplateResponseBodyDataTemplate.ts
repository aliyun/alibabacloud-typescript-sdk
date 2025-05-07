// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhitelistTemplateResponseBodyDataTemplate extends $dara.Model {
  /**
   * @remarks
   * The primary key of the data table.
   * 
   * @example
   * 1013
   */
  id?: number;
  /**
   * @remarks
   * The IP addresses.
   * 
   * @example
   * 10.1.X.X,2.3.X.X
   */
  ips?: string;
  /**
   * @remarks
   * The ID of the whitelist template.
   * 
   * @example
   * 424
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the IP whitelist template.
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

