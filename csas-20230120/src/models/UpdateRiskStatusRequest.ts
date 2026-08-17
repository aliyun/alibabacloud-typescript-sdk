// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRiskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The manually confirmed risk conclusion. This parameter is required when `Status` is set to `Processed`. Do not specify this parameter when `Status` is set to `Unprocess` or `Processing`. Valid values:
   * * `Risk`: Confirmed as risky.
   * * `Ignore`: Confirmed as not risky.
   * * `Invalid`: Confirmed as a false positive.
   * 
   * @example
   * Risk
   */
  riskConfirm?: string;
  /**
   * @remarks
   * The description of the risk event handling. The length must be 1 to 128 characters.
   * 
   * @example
   * After verification, this risk event is a real risk
   */
  riskConfirmDesc?: string;
  /**
   * @remarks
   * The risk event ID. You can obtain the value from the following operation:
   * * `ListRiskItems`: Queries the list of risk events.
   * 
   * @example
   * 69ef648034cf53d7bac7a9c9c912****
   */
  riskId?: string;
  /**
   * @remarks
   * The risk scenario. This parameter is optional. If not specified, the system automatically populates it based on RiskId. Valid values:
   * * account_share: Account sharing.
   * * account_stolen: Account stolen.
   * * device_share: Device sharing.
   * * remote_logon: Remote logon.
   * * sensitive_data_leakage: Sensitive data leakage.
   * * lateral_scanning: Lateral scanning.
   * * ai_skill_malware: Malicious skill.
   * * ai_config_check: AI configuration check.
   * * openclaw_vulnerability: OpenClaw vulnerability.
   * 
   * @example
   * account_stolen
   */
  riskScene?: string;
  /**
   * @remarks
   * The handling status of the risk event. Valid values:
   * * `Unprocess`: Unprocessed.
   * * `Processing`: Being processed.
   * * `Processed`: Processed.
   * 
   * @example
   * Processed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      riskConfirm: 'RiskConfirm',
      riskConfirmDesc: 'RiskConfirmDesc',
      riskId: 'RiskId',
      riskScene: 'RiskScene',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskConfirm: 'string',
      riskConfirmDesc: 'string',
      riskId: 'string',
      riskScene: 'string',
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

