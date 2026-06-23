// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserKubeConfigStatesResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserKubeConfigStatesResponseBodyStates extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the KubeConfig certificate. Format: UTC time in RFC 3339 format.
   * 
   * @example
   * 2028-04-09T06:20:47Z
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The current status of the KubeConfig certificate. Valid values:
   * 
   * - Expired: The certificate has expired.
   * - Unexpired: The certificate has not expired.
   * - Unissued: The certificate has not been issued.
   * - Unknown: The status is unknown.
   * 
   * - Removed: The certificate has been revoked. An issuance record exists for the certificate.
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
   * The cluster name.
   * 
   * @example
   * cluster-demo
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - `initial`: The cluster is being created.
   * - `failed`: The cluster failed to be created.
   * - `running`: The cluster is running.
   * - `updating`: The cluster is being upgraded.
   * - `updating_failed`: The cluster failed to be upgraded.
   * - `scaling`: The cluster is being scaled.
   * - `stopped`: The cluster has stopped running.
   * - `deleting`: The cluster is being deleted.
   * - `deleted`: The cluster has been deleted.
   * - `delete_failed`: The cluster failed to be deleted.
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

export class ListUserKubeConfigStatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: ListUserKubeConfigStatesResponseBodyPage;
  /**
   * @remarks
   * The KubeConfig status details of the user.
   */
  states?: ListUserKubeConfigStatesResponseBodyStates[];
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListUserKubeConfigStatesResponseBodyPage,
      states: { 'type': 'array', 'itemType': ListUserKubeConfigStatesResponseBodyStates },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.states)) {
      $dara.Model.validateArray(this.states);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

