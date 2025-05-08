// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderClusterHealthCheckRiskNoticeRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to disable the notification feature if the risk item occurs.
   * 
   * *   true: disabled
   * *   false: enabled
   * 
   * @example
   * false
   */
  mute?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  noticeType?: string;
  /**
   * @remarks
   * The region in which the cluster resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * The ID of the risk item.
   * 
   * @example
   * 30010010001
   */
  riskCode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      mute: 'Mute',
      noticeType: 'NoticeType',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
      riskCode: 'RiskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      mute: 'boolean',
      noticeType: 'string',
      regionId: 'string',
      requestPars: 'string',
      riskCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

