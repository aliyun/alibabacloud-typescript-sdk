// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that ensures the idempotence of the request. Generate a unique value from your client for each request. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The approval comments.
   * 
   * @example
   * Welcome to ComputeNest service
   */
  comments?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-39f4f251e94843xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service sharing type. The default value is SharedAccount. Valid values:
   * 
   * - SharedAccount: The regular sharing type.
   * 
   * - Reseller: The reseller sharing type.
   * 
   * @example
   * SharedAccount
   */
  type?: number;
  /**
   * @remarks
   * The UID of the user\\"s Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 127383705958xxxx
   */
  userAliUid?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      comments: 'Comments',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      comments: 'string',
      regionId: 'string',
      serviceId: 'string',
      type: 'number',
      userAliUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

