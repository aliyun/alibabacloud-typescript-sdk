// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpsPrivateAssocRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Valid values:
   * - en: English.
   * - zh: Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The instance ID. This parameter is required. If this parameter is not specified, the API returns error code -103201. Only NAT gateway instance IDs (in the format ngw-*) that are protected by Cloud Firewall are accepted. Other resource types such as vpc-* or eip-* are rejected.
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

