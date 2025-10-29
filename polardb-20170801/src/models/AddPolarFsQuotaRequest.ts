// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddPolarFsQuotaRequestQuotas extends $dara.Model {
  /**
   * @example
   * 7200
   */
  accessTTL?: number;
  /**
   * @example
   * 7200
   */
  changeTTL?: number;
  /**
   * @example
   * quota_policy
   */
  description?: string;
  /**
   * @example
   * True
   */
  enabled?: boolean;
  /**
   * @example
   * /a/*project*
   */
  exclude?: string;
  /**
   * @example
   * 222
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /b/*project*
   */
  include?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rule1
   */
  name?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      accessTTL: 'AccessTTL',
      changeTTL: 'ChangeTTL',
      description: 'Description',
      enabled: 'Enabled',
      exclude: 'Exclude',
      fileCountLimit: 'FileCountLimit',
      include: 'Include',
      name: 'Name',
      priority: 'Priority',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTTL: 'number',
      changeTTL: 'number',
      description: 'string',
      enabled: 'boolean',
      exclude: 'string',
      fileCountLimit: 'number',
      include: 'string',
      name: 'string',
      priority: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPolarFsQuotaRequest extends $dara.Model {
  /**
   * @example
   * pc-**************
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
  quotas?: AddPolarFsQuotaRequestQuotas[];
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
      quotas: { 'type': 'array', 'itemType': AddPolarFsQuotaRequestQuotas },
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

