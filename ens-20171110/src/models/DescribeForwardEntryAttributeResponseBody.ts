// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardEntryAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 2020-04-26T15:38:27Z
   */
  creationTime?: string;
  /**
   * @example
   * 36.XXX.XXX.72
   */
  externalIp?: string;
  /**
   * @example
   * 22
   */
  externalPort?: string;
  /**
   * @example
   * fwd-5tfi6f0rutmd00xrhkag7****
   */
  forwardEntryId?: string;
  /**
   * @example
   * test0
   */
  forwardEntryName?: string;
  /**
   * @example
   * 80
   */
  healthCheckPort?: string;
  /**
   * @example
   * 10.XXX.XXX.50
   */
  internalIp?: string;
  /**
   * @example
   * 22
   */
  internalPort?: string;
  /**
   * @example
   * Any
   */
  ipProtocol?: string;
  /**
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  /**
   * @example
   * 6666C5A5-75ED-422E-A022-7121FA18C968
   */
  requestId?: string;
  /**
   * @example
   * 101.XXX.XXX.4
   */
  standbyExternalIp?: string;
  /**
   * @example
   * Stopped
   */
  standbyStatus?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryId: 'ForwardEntryId',
      forwardEntryName: 'ForwardEntryName',
      healthCheckPort: 'HealthCheckPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
      requestId: 'RequestId',
      standbyExternalIp: 'StandbyExternalIp',
      standbyStatus: 'StandbyStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryId: 'string',
      forwardEntryName: 'string',
      healthCheckPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
      requestId: 'string',
      standbyExternalIp: 'string',
      standbyStatus: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

