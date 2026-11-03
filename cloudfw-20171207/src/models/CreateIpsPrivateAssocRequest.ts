// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpsPrivateAssocRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the Internet NAT gateway instance to be associated. This parameter is required. If this parameter is not specified, the ErrorParamsNotEnough error (HTTP 400, Parameters are insufficient.) is returned.
   * 
   * > The backend does not verify the ID format. Instead, it queries the instance in the private network asset table of Cloud Firewall under the current account. If the instance is not found, the ErrorParamsInvalid error (HTTP 400, Invalid Params) is returned. Common causes include: the resource type is not a NAT gateway, the resource is not managed by Cloud Firewall, or the asynchronous asset synchronization for a newly created NAT gateway is not completed.
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

