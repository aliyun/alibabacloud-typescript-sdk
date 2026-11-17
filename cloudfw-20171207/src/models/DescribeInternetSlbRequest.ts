// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The ID of the SLB instance. Fuzzy matching is supported.
   * 
   * @example
   * lb-2ze8v2x5kd9qyvp2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the SLB instance. Fuzzy matching is supported.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The language in which messages are received.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 63389
   */
  port?: string;
  /**
   * @remarks
   * The public IP address. Fuzzy matching is supported. If not specified, all public IP addresses are queried.
   * 
   * @example
   * 47.108.60.XXX
   */
  publicIp?: string;
  /**
   * @remarks
   * The region. If not specified, all regions are queried.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The source IP address of the client.
   * 
   * @example
   * 112.64.233.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The tag. If not specified, all tags are queried.
   * 
   * @example
   * test
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ipProtocol: 'IpProtocol',
      lang: 'Lang',
      pageSize: 'PageSize',
      port: 'Port',
      publicIp: 'PublicIp',
      regionNo: 'RegionNo',
      sourceIp: 'SourceIp',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      instanceId: 'string',
      instanceName: 'string',
      ipProtocol: 'string',
      lang: 'string',
      pageSize: 'string',
      port: 'string',
      publicIp: 'string',
      regionNo: 'string',
      sourceIp: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

