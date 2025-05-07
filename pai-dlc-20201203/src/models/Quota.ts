// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotaConfig } from "./QuotaConfig";
import { QuotaDetail } from "./QuotaDetail";


export class Quota extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  quotaConfig?: QuotaConfig;
  /**
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  /**
   * @example
   * dlc-quota
   */
  quotaName?: string;
  /**
   * @example
   * asiquota
   */
  quotaType?: string;
  totalQuota?: QuotaDetail;
  totalTideQuota?: QuotaDetail;
  usedQuota?: QuotaDetail;
  usedTideQuota?: QuotaDetail;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      quotaConfig: 'QuotaConfig',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      quotaType: 'QuotaType',
      totalQuota: 'TotalQuota',
      totalTideQuota: 'TotalTideQuota',
      usedQuota: 'UsedQuota',
      usedTideQuota: 'UsedTideQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      quotaConfig: QuotaConfig,
      quotaId: 'string',
      quotaName: 'string',
      quotaType: 'string',
      totalQuota: QuotaDetail,
      totalTideQuota: QuotaDetail,
      usedQuota: QuotaDetail,
      usedTideQuota: QuotaDetail,
    };
  }

  validate() {
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    if(this.totalQuota && typeof (this.totalQuota as any).validate === 'function') {
      (this.totalQuota as any).validate();
    }
    if(this.totalTideQuota && typeof (this.totalTideQuota as any).validate === 'function') {
      (this.totalTideQuota as any).validate();
    }
    if(this.usedQuota && typeof (this.usedQuota as any).validate === 'function') {
      (this.usedQuota as any).validate();
    }
    if(this.usedTideQuota && typeof (this.usedTideQuota as any).validate === 'function') {
      (this.usedTideQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

