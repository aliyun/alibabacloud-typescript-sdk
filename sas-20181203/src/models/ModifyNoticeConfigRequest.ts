// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNoticeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The notification configuration type. By default, notifications are sent by SMS, email, or internal message. Valid values:
   * 
   * - **cms**: CloudMonitor push.
   * 
   * @example
   * cms
   */
  bizType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Use a different token for each request. Only ASCII characters are supported. The token can be up to 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - true: performs a dry run without executing the actual operation.
   * - false: performs the actual operation.
   * 
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The focus level. Separate multiple levels with commas (,).
   * 
   * When **Project** is set to **yundun_soar_incident_generate** or **yundun_soar_incident_update**, valid values:
   * 
   * - **CRITICAL**: Critical.
   * - **HIGH**: High.
   * - **MEDIUM**: Medium.
   * - **LOW**: Low.
   * - **INFO**: Informational.
   * 
   * When **Project** is set to **yundun_sas_antiransomware_task**, valid values:
   * 
   * - **Success**: Execution succeeded.
   * - **Failed**: Execution failed.
   * 
   * @example
   * CRITICAL,HIGH
   */
  focusLevel?: string;
  /**
   * @remarks
   * ### Project identity
   * 
   * #### When the BizType field is empty: valid values
   * - **yundun_security_Weekreport**: Security weekly report (email only)
   * - **sas_healthcheck**: Baseline check
   * - **yundun_defennce_antiRansomware_overflow**: Anti-ransomware storage space exceeded
   * - **yundun_sas_cloudsiem_log**: Threat analysis log excess notification
   * - **sas_suspicious**: Security alert
   * - **yundun_aegis_AV_true**: Precise defense
   * - **yundun_sas_ak_leakage AccessKey**: AccessKey leak intelligence
   * - **yundun_sas_config_alert**: Cloud platform configuration check
   * - **yundun_sas_vul_Emergency**: Emergency vulnerability intelligence
   * - **yundun_webguard_event**: Web tamper-proofing
   * - **yundun_sas_cloud_native_firewall**: Container firewall anomaly alert notification (email only)
   * - **yundun_sas_cloud_native_firewall_Defense**: Container firewall active defense notification (email only)
   * - **yundun_IP_Blocking**: Malicious IP blocking alerting notification
   * - **yundun_sas_anti_virus_config**: Virus scan notification
   * - **yundun_sas_log**: Log storage exceeded
   * - **yundun_honeypot_alarm**: Cloud honeypot alerting
   * - **aliyun_rasp_alarm**: Application protection alerting
   * - **yundun_soar_incident_generate**: New security incident
   * - **yundun_soar_incident_update**: Updated security incident
   * > **yundun_security_Weekreport** is sent as a weekly report to notify you of unresolved vulnerabilities.
   * 
   * ---
   * 
   * #### When the BizType field is `cms`: valid values
   * - **Vul_event**: Vulnerability result details
   * - **Hc_summary**: Baseline check result summary
   * - **Cspm_summary**: Cloud Security Posture Management (CSPM) result summary
   * - **Vul_summary**: Vulnerability result summary
   * - **Agentless_event**: Agentless detection result details
   * - **Filedetect_event**: Malicious file SDK result details
   * - **Rasp_event**: Application protection result details
   * 
   * @example
   * yundun_webguard_event
   */
  project?: string;
  /**
   * @remarks
   * ### Notification method
   * 
   * #### When BizType is empty
   * - 0: disabled
   * - 1: SMS enabled
   * - 2: email enabled
   * - 4: internal message enabled
   * - 3: SMS and email enabled
   * - 5: SMS and internal message enabled
   * - 6: email and internal message enabled
   * - 7: SMS, email, and internal message all enabled
   * 
   * #### When BizType is `cms`
   * - 0: CloudMonitor push disabled
   * - 1: CloudMonitor push enabled
   * 
   * @example
   * 4
   */
  route?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 42.178.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * ### Notification time limit
   * 
   * #### When the BizType field is empty: valid values
   * - **0**: No limit.
   * - **1**: Notifications are sent only during 08:00-22:00.
   * 
   * #### When the BizType field is `cms`
   * Specifies the push frequency limit, in seconds. The minimum value is **60**.
   * 
   * @example
   * 1
   */
  timeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      focusLevel: 'FocusLevel',
      project: 'Project',
      route: 'Route',
      sourceIp: 'SourceIp',
      timeLimit: 'TimeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      focusLevel: 'string',
      project: 'string',
      route: 'number',
      sourceIp: 'string',
      timeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

