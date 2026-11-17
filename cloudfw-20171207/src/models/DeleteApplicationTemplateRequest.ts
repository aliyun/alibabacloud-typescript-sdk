// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application program template to delete. This parameter is required. If you leave this parameter empty, a parameter fault is returned. The template must exist within the current Alibaba Cloud account. You cannot delete a template if it contains custom application program rules or is referenced by an access control policy of the Internet border, NAT, or virtual private cloud (VPC) firewalls.
   * 
   * @example
   * ati-4f0691c56b8d4f06
   */
  applicationTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTemplateId: 'ApplicationTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

