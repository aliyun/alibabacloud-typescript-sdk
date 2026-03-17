// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosPolicyResponseBodyDpiGroupIds extends $dara.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dpiGroupId)) {
      $dara.Model.validateArray(this.dpiGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyResponseBodyDpiSignatureIds extends $dara.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dpiSignatureId)) {
      $dara.Model.validateArray(this.dpiSignatureId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 10.10.10.0/24
   */
  destCidr?: string;
  /**
   * @remarks
   * The destination port range.
   * 
   * @example
   * 80/80
   */
  destPortRange?: string;
  dpiGroupIds?: CreateQosPolicyResponseBodyDpiGroupIds;
  dpiSignatureIds?: CreateQosPolicyResponseBodyDpiSignatureIds;
  /**
   * @remarks
   * The time when the traffic classification rule expires.
   * 
   * @example
   * 2022-09-14T16:41:33+0800
   */
  endTime?: string;
  /**
   * @remarks
   * The protocol that applies to the traffic classification rule.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The priority of the traffic throttling policy to which the traffic classification rule belongs.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-xitd8690ucu8ro****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the traffic classification rule.
   * 
   * @example
   * qospy-xhwhyuo43l********
   */
  qosPolicyId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 97862812-2C7E-4D25-B0D5-B26DAC7FA293
   */
  requestId?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 10.10.10.0/24
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port range.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The time when the traffic classification rule takes effect.
   * 
   * @example
   * 2022-07-14T16:41:33+0800
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      endTime: 'EndTime',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      priority: 'Priority',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      requestId: 'RequestId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      dpiGroupIds: CreateQosPolicyResponseBodyDpiGroupIds,
      dpiSignatureIds: CreateQosPolicyResponseBodyDpiSignatureIds,
      endTime: 'string',
      ipProtocol: 'string',
      name: 'string',
      priority: 'number',
      qosId: 'string',
      qosPolicyId: 'string',
      requestId: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.dpiGroupIds && typeof (this.dpiGroupIds as any).validate === 'function') {
      (this.dpiGroupIds as any).validate();
    }
    if(this.dpiSignatureIds && typeof (this.dpiSignatureIds as any).validate === 'function') {
      (this.dpiSignatureIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

