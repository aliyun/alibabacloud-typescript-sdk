// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBInstanceConnectivityDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.110.180.62
   */
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      srcIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

