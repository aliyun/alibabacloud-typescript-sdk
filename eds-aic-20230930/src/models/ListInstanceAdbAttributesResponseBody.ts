// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceAdbAttributesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 183.201.219.157
   */
  externalIp?: string;
  /**
   * @remarks
   * The public network port number.
   * 
   * @example
   * 14840/14849
   */
  externalPort?: string;
  /**
   * @remarks
   * The time when the connection was created.
   * 
   * @example
   * 2024-05-15 17:33:59
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the connection was last modified.
   * 
   * @example
   * 2024-05-15 17:33:59
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.0.0.239
   */
  internalIp?: string;
  /**
   * @remarks
   * The private network port number.
   * 
   * @example
   * 5555/5555
   */
  internalPort?: string;
  /**
   * @remarks
   * The network protocol type.
   * 
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
  /**
   * @remarks
   * The ADB connection information for the instances.
   */
  data?: ListInstanceAdbAttributesResponseBodyData[];
  /**
   * @remarks
   * The maximum number of records returned in this query.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to start the next query. If a query does not return all results, NextToken is not empty. Use the returned NextToken value to query the next page.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB95E410-FD1D-53C5-9F7D-93CC44D7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

