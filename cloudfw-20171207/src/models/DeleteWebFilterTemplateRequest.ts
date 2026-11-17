// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWebFilterTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the web filtering template to delete. This parameter is required. If you leave this parameter empty, a parameter fault is returned. The template must exist within the current Alibaba Cloud account. A template cannot be deleted if it is referenced by an access control policy of the Internet border, NAT firewalls, or virtual private cloud (VPC) firewalls.
   * 
   * @example
   * wft-3f2a9c1d4b5e6f70
   */
  webFilterTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      webFilterTemplateId: 'WebFilterTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webFilterTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

