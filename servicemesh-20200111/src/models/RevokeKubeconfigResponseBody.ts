// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeKubeconfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The new kubeconfig file generated.
   * 
   * @example
   * apiVersion: v1 clusters: - cluster:     server: https://121.**.**.**:6443     certificate-authority-data: *****   name: kubernetes contexts: - context:     cluster: kubernetes     user: "*****"   name: ***** current-context: ***** kind: Config preferences: {} users: - name: "*****"   user:     client-certificate-data: *****     client-key-data: *****
   */
  kubeconfig?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7CF71C8B-79DD-150F-929E-267C51C5E311
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kubeconfig: 'Kubeconfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeconfig: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

