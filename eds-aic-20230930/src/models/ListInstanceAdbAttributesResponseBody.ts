// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceAdbAttributesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 183.201.219.157
   */
  externalIp?: string;
  /**
   * @example
   * 14840/14849
   */
  externalPort?: string;
  /**
   * @example
   * 2024-05-15 17:33:59
   */
  gmtCreated?: string;
  /**
   * @example
   * 2024-05-15 17:33:59
   */
  gmtModified?: string;
  /**
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @example
   * 10.0.0.239
   */
  internalIp?: string;
  /**
   * @example
   * 5555/5555
   */
  internalPort?: string;
  /**
   * @example
   * TCP
   */
  ipProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAdbAttributesResponseBody extends $dara.Model {
  data?: ListInstanceAdbAttributesResponseBodyData[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @example
   * CB95E410-FD1D-53C5-9F7D-93CC44D7****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListInstanceAdbAttributesResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

