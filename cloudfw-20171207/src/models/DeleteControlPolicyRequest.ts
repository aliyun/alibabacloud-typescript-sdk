// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * To delete an access control policy, you must specify the UUID of the policy. You can call the [DescribeControlPolicy](https://help.aliyun.com/document_detail/138866.html) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221ad84c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * Valid values:
   * 
   * *   **in**: inbound.
   * *   **out**: outbound.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
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
      direction: 'Direction',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      direction: 'string',
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

