// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserKubeConfigStatesResponseBodyStates extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the certificate used in a kubeconfig file. Format: the UTC time in the RFC3339 format.
   * 
   * @example
   * 2026-11-30T07:41:50Z
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The current status of the certificate used in a kubeconfig file. Valid values:
   * 
   * *   Expired: The certificate is expired.
   * *   Unexpired: The certificate is not expired.
   * *   Unissued: The certificate is not issued.
   * *   Unknown: The status of the certificate is unknown.
   * *   Removed: The certificate is removed. An issue record is found for the certificate.
   * 
   * @example
   * Unissued
   */
  certState?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c5b5e80b0b64a4bf6939d2d8fbbc5****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, underscores (_), and hyphens (-). The name must start with a letter or number.
   * 
   * @example
   * cluster-demo
   */
  clusterName?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   `initial`: The cluster is being created.
   * *   `failed`: The cluster failed to be created.
   * *   `running`: The cluster is running.
   * *   `updating`: The cluster is being upgraded.
   * *   `updating_failed`: The cluster failed to be updated.
   * *   `scaling`: The cluster is being scaled.
   * *   `stopped`: The cluster is stopped.
   * *   `deleting`: The cluster is being deleted.
   * *   `deleted`: The cluster is deleted.
   * *   `delete_failed`: The cluster failed to be deleted.
   * 
   * @example
   * running
   */
  clusterState?: string;
  static names(): { [key: string]: string } {
    return {
      certExpireTime: 'cert_expire_time',
      certState: 'cert_state',
      clusterId: 'cluster_id',
      clusterName: 'cluster_name',
      clusterState: 'cluster_state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpireTime: 'string',
      certState: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

