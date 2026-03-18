// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyAttachmentResponseBodyAttachmentList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the protected object.
   * 
   * @example
   * 147.139.183.***
   */
  ip?: string;
  /**
   * @remarks
   * The UID of the member to which the IP address of the protected object belongs.
   * 
   * @example
   * 177699790631****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 1b43f44e-65e1-411a-b0c0-d6c1********
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test**
   */
  policyName?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * test
   */
  policyRemark?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * @example
   * l3
   */
  policyType?: string;
  /**
   * @remarks
   * The port number of the protected object.
   * 
   * @example
   * 8*
   */
  port?: number;
  portRange?: string;
  /**
   * @remarks
   * The protocol type of the protected object. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * udp
   */
  protocol?: string;
  /**
   * @remarks
   * The region to which the IP address of the protected object belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      memberUid: 'MemberUid',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyRemark: 'PolicyRemark',
      policyType: 'PolicyType',
      port: 'Port',
      portRange: 'PortRange',
      protocol: 'Protocol',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      memberUid: 'string',
      policyId: 'string',
      policyName: 'string',
      policyRemark: 'string',
      policyType: 'string',
      port: 'number',
      portRange: 'string',
      protocol: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The records of attachments to the mitigation policy.
   */
  attachmentList?: ListPolicyAttachmentResponseBodyAttachmentList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4B379C2-9319-4C6B-B579-FE36831B09F4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of attachments to the mitigation policy.
   * 
   * @example
   * 28
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentList: 'AttachmentList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentList: { 'type': 'array', 'itemType': ListPolicyAttachmentResponseBodyAttachmentList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attachmentList)) {
      $dara.Model.validateArray(this.attachmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

