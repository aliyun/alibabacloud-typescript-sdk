// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceAdbAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 106.38.188.223
   */
  externalIp?: string;
  /**
   * @remarks
   * The list of cloud phone instance IDs. You can specify from 1 to 100 IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.0.3.23
   */
  internalIp?: string;
  /**
   * @remarks
   * The ADB port number.
   * 
   * @example
   * 5555
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
  /**
   * @remarks
   * The maximum number of records to return on each page for a paged query. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that indicates the position from which the query starts. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      instanceIds: 'InstanceIds',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

