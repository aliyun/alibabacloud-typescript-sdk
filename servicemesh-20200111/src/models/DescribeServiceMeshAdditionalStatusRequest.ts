// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshAdditionalStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The check mode of the ASM instance. Valid values:
   * 
   * *   `normal`: checks the Server Load Balancer (SLB) instances created for exposing the API server and Istio Pilot, audit logs, and installation of Logtail for clusters on the data plane.
   * *   `full`: checks control plane logs, access logs, security groups, and the elastic IP addresses (EIPs) of the API server in addition to the check items in normal mode.
   * 
   * @example
   * full
   */
  checkMode?: string;
  /**
   * @remarks
   * The ID of the ASM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ca04bc38979214bf2882be79d39b4****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      checkMode: 'CheckMode',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMode: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

