// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpaClusterPluginResponseBodyInstallStatus extends $dara.Model {
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

export class CreateOpaClusterPluginResponseBody extends $dara.Model {
  /**
   * @remarks
   * The installation status of the components.
   */
  installStatus?: CreateOpaClusterPluginResponseBodyInstallStatus[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53C0DC1F8
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
      installStatus: { 'type': 'array', 'itemType': CreateOpaClusterPluginResponseBodyInstallStatus },
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

