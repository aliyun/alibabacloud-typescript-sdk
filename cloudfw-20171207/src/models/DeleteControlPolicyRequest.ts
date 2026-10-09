// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * To delete an access control policy, you must provide the unique ID of the policy. You can call the [DescribeControlPolicy](https://help.aliyun.com/document_detail/138866.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221ad84c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token. Make sure that the token is unique among different requests. The token must be a string that is case-sensitive and matches the regular expression [0-9a-zA-Z-_]{1,64}. We recommend that you use a UUID. The server ensures idempotence within the validity period of 600 seconds. If you send a repeated request with the same client token and the same business parameters, the server returns the same response as the first request.
   * 
   * @example
   * dedeaxfedxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The traffic direction controlled by the access control policy.
   * 
   * Valid values:
   * 
   * - **in**: inbound traffic
   * - **out**: outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. If you set this parameter to true, the system only performs prechecks on parameter validity, identity permissions, resource existence, quota limits, and dependencies. The system does not create, update, or delete actual resources, trigger actual asynchronous traffic diversion tasks, or generate downstream side effects such as billing, notifications, or callbacks. If the precheck is successful, the response includes DryRun=true, which distinguishes it from the response of an actual call.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the traffic.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      clientToken: 'ClientToken',
      direction: 'Direction',
      dryRun: 'DryRun',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      clientToken: 'string',
      direction: 'string',
      dryRun: 'boolean',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

