// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsLogstoreInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Logstore of the Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @example
   * ddoscoo-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The Logstore project of the Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @example
   * ddoscoo-project-181071506993****-cn-hangzhou
   */
  project?: string;
  /**
   * @remarks
   * The available log storage capacity. Unit: bytes.
   * 
   * @example
   * 3298534883328
   */
  quota?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @remarks
   * The log storage duration. Unit: days.
   * 
   * @example
   * 180
   */
  ttl?: number;
  /**
   * @remarks
   * The used log storage capacity. Unit: bytes.
   * 
   * > The statistics on Log Service are delayed for about two hours.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      project: 'Project',
      quota: 'Quota',
      requestId: 'RequestId',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      project: 'string',
      quota: 'number',
      requestId: 'string',
      ttl: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

