// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Approval comments.
   * 
   * @example
   * Welcome to TuGraph. Your application has been approved. Should you have any questions, please feel free to email us at tugraph@service.alipay.com or call our contact number 400-903-0809. Contact person: Yuansu.
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
   * ServiceSharedAccountType，
   * 
   * @example
   * SharedAccount
   */
  type?: number;
  /**
   * @remarks
   * User ali uid.
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

