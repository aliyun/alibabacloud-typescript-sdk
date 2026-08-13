// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpsPrivateAssocRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response messages.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the Internet NAT gateway instance to associate. This parameter is required. If this parameter is not specified, ErrorParamsNotEnough is returned (HTTP 400, Parameters are insufficient.).
   * 
   * > The backend does not validate the ID format. Instead, it queries the instance in the Cloud Firewall private network asset table for the current account. If the instance is not found, ErrorParamsInvalid is returned (HTTP 400, Invalid Params). Common scenarios include the resource type not being a NAT gateway, the resource not being managed by Cloud Firewall, or a newly created NAT gateway for which asynchronous asset synchronization has not yet completed.
   * 
   * @example
   * ngw-c5vhmjdfp5t****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

