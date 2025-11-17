// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceAdbAttributesRequest extends $dara.Model {
  /**
   * @example
   * 106.38.188.223
   */
  externalIp?: string;
  instanceIds?: string[];
  /**
   * @example
   * 10.0.3.23
   */
  internalIp?: string;
  /**
   * @example
   * 5555
   */
  internalPort?: string;
  /**
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
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

