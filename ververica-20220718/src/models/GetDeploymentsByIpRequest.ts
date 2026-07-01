// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentsByIpRequest extends $dara.Model {
  /**
   * @remarks
   * The destination IP address. This parameter is used to match the destination sink address of a job.
   * 
   * @example
   * 10.100.2.200
   */
  dstIp?: string;
  /**
   * @remarks
   * The destination port. Use this parameter with dstIp.
   * 
   * @example
   * 9092
   */
  dstPort?: string;
  /**
   * @remarks
   * Specifies whether to exclude the job summary from the response. If you exclude the summary, only deployment information is returned. This improves performance.
   * 
   * @example
   * false
   */
  ignoreJobSummary?: boolean;
  /**
   * @remarks
   * Specifies whether to exclude resource configuration information. This reduces the size of the returned data.
   * 
   * @example
   * false
   */
  ignoreResourceSetting?: boolean;
  /**
   * @remarks
   * The source IP address. This parameter is used to match the input source address of a job.
   * 
   * @example
   * 192.168.1.100
   */
  srcIp?: string;
  /**
   * @remarks
   * The source port. Use this parameter with srcIp for an exact match of the connection.
   * 
   * @example
   * 54321
   */
  srcPort?: string;
  static names(): { [key: string]: string } {
    return {
      dstIp: 'dstIp',
      dstPort: 'dstPort',
      ignoreJobSummary: 'ignoreJobSummary',
      ignoreResourceSetting: 'ignoreResourceSetting',
      srcIp: 'srcIp',
      srcPort: 'srcPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIp: 'string',
      dstPort: 'string',
      ignoreJobSummary: 'boolean',
      ignoreResourceSetting: 'boolean',
      srcIp: 'string',
      srcPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

