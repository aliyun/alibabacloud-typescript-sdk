// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLayer4RulesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of forwarding protocol. Values:
   * - **tcp**: Indicates TCP protocol.
   * - **udp**: Indicates UDP protocol.
   * 
   * @example
   * tcp
   */
  forwardProtocol?: string;
  /**
   * @remarks
   * The forwarding port.
   * 
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @remarks
   * The ID of the DDoS protection instance to be queried.
   * 
   * > You can call [DescribeInstances](https://help.aliyun.com/document_detail/91478.html) to query all DDoS protection instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-zvp2ay9b****
   */
  instanceId?: string;
  /**
   * @remarks
   * In paginated queries, specifies which page of data to return. The minimum value is **1**, indicating the first page of data.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * In paginated queries, specifies the number of results per page. The maximum value is **50**, indicating that each page can contain up to 50 results.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to fill this in; it is automatically obtained by the system.
   * 
   * @example
   * 192.0.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      offset: 'Offset',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardProtocol: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      offset: 'number',
      pageSize: 'string',
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

