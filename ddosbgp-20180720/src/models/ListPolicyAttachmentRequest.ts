// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyAttachmentRequestIpPortProtocolList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the protected object.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.118.172.***
   */
  ip?: string;
  /**
   * @remarks
   * The port number of the protected object.
   * 
   * @example
   * 8*
   */
  port?: number;
  /**
   * @remarks
   * The port number range of the protected object.
   * 
   * @example
   * 8*-9*
   */
  portRange?: string;
  /**
   * @remarks
   * The protocol type of the protected object. Valid values:
   * 
   * - **tcp**: Transmission Control Protocol.
   * - **udp**: User Datagram Protocol.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      portRange: 'PortRange',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      portRange: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The list of protected objects.
   */
  ipPortProtocolList?: ListPolicyAttachmentRequestIpPortProtocolList[];
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of rows per page in a paging query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * f38f6520-92b7-451e-b520-9ab3********
   */
  policyId?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * - **default**: default mitigation policy.
   * - **l3**: IP-specific mitigation policy.
   * - **l4**: port-specific mitigation policy.
   * 
   * @example
   * l3
   */
  policyType?: string;
  /**
   * @remarks
   * The version of the port-specific mitigation policy. Valid values:
   * 
   * - **Not specified**: queries the policy associations that attach to the default surf DPI engine.
   * - **2**: queries the policy associations that attach to the new stream DPI engine.
   * 
   * @example
   * 2
   */
  portVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolList: 'IpPortProtocolList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
      portVersion: 'PortVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolList: { 'type': 'array', 'itemType': ListPolicyAttachmentRequestIpPortProtocolList },
      pageNo: 'number',
      pageSize: 'number',
      policyId: 'string',
      policyType: 'string',
      portVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipPortProtocolList)) {
      $dara.Model.validateArray(this.ipPortProtocolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

