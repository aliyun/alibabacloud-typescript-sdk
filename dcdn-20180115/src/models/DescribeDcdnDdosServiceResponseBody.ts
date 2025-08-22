// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDdosServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the renewed service takes effect. The time is displayed in UTC.
   * 
   * @example
   * 2018-03-31T16:00:00Z
   */
  changingAffectTime?: string;
  /**
   * @remarks
   * The metering method after the configuration changes Valid values:
   * 
   * *   **PayByBandwidth**
   * *   **PayByTraffic**
   * *   **PayByBandwidth95**
   * 
   * @example
   * PayByBandwidth
   */
  changingChargeType?: string;
  /**
   * @remarks
   * The number of protected domain names.
   * 
   * @example
   * 30
   */
  changingDomianNum?: number;
  /**
   * @remarks
   * The protection edition for which the configuration changes take effect. Valid values:
   * 
   * *   **poc**: POC Edition
   * *   **basic**: Basic Edition
   * *   **insurance**: Insurance Edition
   * *   **unlimited**: Unlimited Edition
   * 
   * @example
   * basic
   */
  changingEdition?: string;
  /**
   * @remarks
   * The number of mitigation sessions with configuration changes.
   * 
   * @example
   * 100
   */
  changingProtectNum?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **PayByBandwidth**
   * *   **PayByTraffic**
   * *   **PayByBandwidth95**
   * 
   * @example
   * PayByTraffic
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of protected domain names.
   * 
   * @example
   * 20
   */
  domianNum?: number;
  /**
   * @remarks
   * The protection edition. Valid values:
   * 
   * *   **poc**: POC Edition
   * *   **basic**: Basic Edition
   * *   **insurance**: Insurance Edition
   * *   **unlimited**: Unlimited Edition
   * 
   * @example
   * poc
   */
  edition?: string;
  /**
   * @remarks
   * The activation status of the service. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  enabled?: string;
  /**
   * @remarks
   * The service expiration time.
   * 
   * @example
   * 2023-09-26T16:00:00Z
   */
  endingTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * xxx-12345
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the service was enabled.
   * 
   * @example
   * 2021-09-26T16:00:00Z
   */
  openingTime?: string;
  /**
   * @remarks
   * The number of mitigation sessions.
   * 
   * @example
   * 100
   */
  protectNum?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   **Normal**
   * *   **WaitForExpire**
   * *   **expired**
   * *   **Released**
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      changingAffectTime: 'ChangingAffectTime',
      changingChargeType: 'ChangingChargeType',
      changingDomianNum: 'ChangingDomianNum',
      changingEdition: 'ChangingEdition',
      changingProtectNum: 'ChangingProtectNum',
      chargeType: 'ChargeType',
      domianNum: 'DomianNum',
      edition: 'Edition',
      enabled: 'Enabled',
      endingTime: 'EndingTime',
      instanceId: 'InstanceId',
      openingTime: 'OpeningTime',
      protectNum: 'ProtectNum',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changingAffectTime: 'string',
      changingChargeType: 'string',
      changingDomianNum: 'number',
      changingEdition: 'string',
      changingProtectNum: 'number',
      chargeType: 'string',
      domianNum: 'number',
      edition: 'string',
      enabled: 'string',
      endingTime: 'string',
      instanceId: 'string',
      openingTime: 'string',
      protectNum: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

