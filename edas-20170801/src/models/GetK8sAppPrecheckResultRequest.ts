// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetK8sAppPrecheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * testapp
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster in Enterprise Distributed Application Service (EDAS).
   * 
   * This parameter is required.
   * 
   * @example
   * c37aec2a-bcca-4ec1-****-************
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

