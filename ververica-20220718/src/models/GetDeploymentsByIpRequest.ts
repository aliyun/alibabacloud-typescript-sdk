// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentsByIpRequest extends $dara.Model {
  /**
   * @example
   * 10.100.2.200
   */
  dstIp?: string;
  /**
   * @example
   * 9092
   */
  dstPort?: string;
  /**
   * @example
   * false
   */
  ignoreJobSummary?: boolean;
  /**
   * @example
   * false
   */
  ignoreResourceSetting?: boolean;
  /**
   * @example
   * 192.168.1.100
   */
  srcIp?: string;
  /**
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

