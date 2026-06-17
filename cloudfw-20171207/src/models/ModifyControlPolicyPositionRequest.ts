// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlPolicyPositionRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic direction of the IPv4 access control policy for the Internet firewall. Valid values:
   * 
   * - in: inbound traffic.
   * 
   * - out: outbound traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - zh (default): Chinese.
   * 
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The new priority for the IPv4 access control policy of the Internet firewall. The priority is a number. A smaller number indicates a higher priority. The value 1 indicates the highest priority.
   * 
   * > The new priority value cannot be outside the range of existing priorities for IPv4 policies. Otherwise, the API call fails. Before you call this operation, call [DescribePolicyPriorUsed](https://help.aliyun.com/document_detail/138862.html) to query the priority range of IPv4 policies for a specific traffic direction.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The current priority of the IPv4 access control policy that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  oldOrder?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      lang: 'Lang',
      newOrder: 'NewOrder',
      oldOrder: 'OldOrder',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      lang: 'string',
      newOrder: 'string',
      oldOrder: 'string',
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

