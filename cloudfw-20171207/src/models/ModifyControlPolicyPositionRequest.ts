// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlPolicyPositionRequest extends $dara.Model {
  /**
   * @remarks
   * The direction of the traffic to which the IPv4 access control policy applies. Valid values:
   * 
   * *   in: inbound traffic
   * *   out: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   zh: Chinese (default)
   * *   en: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The new priority of the IPv4 access control policy. You must specify a numeric value for this parameter. The value 1 indicates the highest priority. A larger value indicates a lower priority.
   * 
   * >  The new priority cannot exceed the priority range of the IPv4 access control policy. Otherwise, an error occurs when you call this operation. Before you call this operation, we recommend that you use the [DescribePolicyPriorUsed](https://help.aliyun.com/document_detail/138862.html) operation to query the priority range of the IPv4 access control policy in the specified direction.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The original priority of the IPv4 access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  oldOrder?: string;
  /**
   * @remarks
   * The source IP address of the request.
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

