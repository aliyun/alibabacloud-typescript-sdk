// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RiskEventSyncRequest extends $dara.Model {
  deleted?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  discoveryTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  eventName?: string;
  eventNumber?: string;
  relevanceBu?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  riskDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  riskEffectType?: string;
  riskLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  riskType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  submitter?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'Deleted',
      discoveryTime: 'DiscoveryTime',
      eventName: 'EventName',
      eventNumber: 'EventNumber',
      relevanceBu: 'RelevanceBu',
      riskDetail: 'RiskDetail',
      riskEffectType: 'RiskEffectType',
      riskLevel: 'RiskLevel',
      riskType: 'RiskType',
      source: 'Source',
      submitter: 'Submitter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'boolean',
      discoveryTime: 'number',
      eventName: 'string',
      eventNumber: 'string',
      relevanceBu: 'string',
      riskDetail: 'string',
      riskEffectType: 'string',
      riskLevel: 'string',
      riskType: 'string',
      source: 'string',
      submitter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

