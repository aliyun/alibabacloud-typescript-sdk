// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The ID of the SLB instance. Fuzzy search is supported.
   * 
   * @example
   * lb-2ze8v2x5kd9qyvp2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the SLB instance. Fuzzy search is supported.
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
   * The language of the response message.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return.
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
   * The public IP address. Fuzzy search is supported. If you do not specify this parameter, all public IP addresses are queried.
   * 
   * @example
   * 47.108.60.XXX
   */
  publicIp?: string;
  /**
   * @remarks
   * The region. If you do not specify this parameter, all regions are queried.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 112.64.233.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The tag. If you do not specify this parameter, all tags are searched.
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

