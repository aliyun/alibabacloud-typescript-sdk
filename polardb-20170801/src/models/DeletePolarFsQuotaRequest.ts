// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarFsQuotaRequestQuotas extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota.
   * 
   * This parameter is required.
   * 
   * @example
   * 73
   */
  id?: string;
  /**
   * @remarks
   * The name of the quota.
   * 
   * This parameter is required.
   * 
   * @example
   * sftest
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolarFsQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view the details of all clusters under your account, including the cluster ID.
   * 
   * @example
   * pc-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the Polarlakebase instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The details of the quota rules.
   * 
   * This parameter is required.
   */
  quotas?: DeletePolarFsQuotaRequestQuotas[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      polarFsInstanceId: 'PolarFsInstanceId',
      quotas: 'Quotas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      polarFsInstanceId: 'string',
      quotas: { 'type': 'array', 'itemType': DeletePolarFsQuotaRequestQuotas },
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

