// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpaPluginStatusResponseBodyInstallStatus extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c60b77fe62093480db6164a3c2fa****
   */
  clusterId?: string;
  /**
   * @remarks
   * Indicates whether the component is installed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  installStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      installStatus: 'InstallStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      installStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpaPluginStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The installation status of the components that are required for clusters protected by proactive defense for containers.
   */
  installStatus?: GetOpaPluginStatusResponseBodyInstallStatus[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      installStatus: 'InstallStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installStatus: { 'type': 'array', 'itemType': GetOpaPluginStatusResponseBodyInstallStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.installStatus)) {
      $dara.Model.validateArray(this.installStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

