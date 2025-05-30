// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateComputeSubQuotaRequestSubQuotaInfoListParameter } from "./UpdateComputeSubQuotaRequestSubQuotaInfoListParameter";


export class UpdateComputeSubQuotaRequestSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The nickname of the level-2 quota.
   * 
   * This parameter is required.
   * 
   * @example
   * os_ComputeQuota
   */
  nickName?: string;
  /**
   * @remarks
   * The parameters of the level-2 quota.
   */
  parameter?: UpdateComputeSubQuotaRequestSubQuotaInfoListParameter;
  /**
   * @remarks
   * The type of quota.
   * 
   * > 
   * > - FUXI_OFFLINE(default) : Quotas of this type are used to run batch jobs.
   * 
   * @example
   * FUXI_OFFLINE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'nickName',
      parameter: 'parameter',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      parameter: UpdateComputeSubQuotaRequestSubQuotaInfoListParameter,
      type: 'string',
    };
  }

  validate() {
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

