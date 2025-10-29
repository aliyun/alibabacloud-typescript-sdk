// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarFsQuotaRequestQuotas extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 73
   */
  id?: string;
  /**
   * @remarks
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
   * @example
   * pc-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
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

