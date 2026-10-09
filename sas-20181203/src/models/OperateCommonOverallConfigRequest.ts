// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateCommonOverallConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure request idempotence. Use a different token for each request. Only ASCII characters are supported. The token can be up to 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * The switch status. Valid values:
   * 
   * - **on**: enabled
   * - **off**: disabled
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for this request. Valid values: true: performs only a dry run without executing the actual operation. false: sends the request normally. Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether asset configuration is required. Default value: **false**. Valid values:
   * - **true**: required
   * - **false**: not required
   * > This value takes effect only when **config** is set to **on**.
   * 
   * @example
   * true
   */
  noTargetAsOn?: boolean;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 223.79.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * - **kdump_switch**: proactive defense optimization experience
   * - **threat_detect**: adaptive threat detection capability
   * - **suspicious_aggregation**: alert correlation
   * - **alidetect**: file detection
   * - **USER-ENABLE-SWITCH-TYPE_38857**: Linux entry service executes high-risk operations
   * - **USER-ENABLE-SWITCH-TYPE_50858**: Linux web service executes high-risk operations
   * - **USER-ENABLE-SWITCH-TYPE_50859**: Linux entry service executes suspicious operations
   * - **USER-ENABLE-SWITCH-TYPE_50862**: Linux Cloud Assistant advanced protection
   * - **USER-ENABLE-SWITCH-TYPE_50867**: Linux implants malicious files
   * - **USER-ENABLE-SWITCH-TYPE_50868**: Linux implants suspicious files
   * - **USER-ENABLE-SWITCH-TYPE_64025**: Linux entry service executes commands [enhanced mode]
   * - **USER-ENABLE-SWITCH-TYPE_51229**: Windows browser service executes high-risk operations
   * - **USER-ENABLE-SWITCH-TYPE_51230**: Windows entry service executes suspicious operations
   * - **USER-ENABLE-SWITCH-TYPE_51232**: Windows system process executes high-risk operations
   * - **USER-ENABLE-SWITCH-TYPE_51233**: Windows Java service executes high-risk operations
   * - **USER-ENABLE-SWITCH-TYPE_51234**: Windows Office component executes high-risk operations
   * - **USER-ENABLE-SWITCH-TYPE_51235**: Windows web service executes high-risk operations
   * - **USER-ENABLE-SWITCH-TYPE_52820**: Windows implants malicious files
   * - **USER-ENABLE-SWITCH-TYPE_52826**: Windows entry service executes high-risk operations
   * - **USER-ENABLE-SWITCH-TYPE_55251**: Windows database service executes high-risk operations
   * - **USER-ENABLE-SWITCH-TYPE_63725**: Windows entry service implants suspicious scripts or binary files
   * - **USER-ENABLE-SWITCH-TYPE_3277**: Linux suspicious process startup
   * - **USER-ENABLE-SWITCH-TYPE_50983**: Linux obfuscation commands
   * - **USER-ENABLE-SWITCH-TYPE_51200**: Linux command line downloads and runs malicious files
   * - **USER-ENABLE-SWITCH-TYPE_71131**: Linux entry service executes suspicious behavior sequences
   * - **USER-ENABLE-SWITCH-TYPE_51225**: Windows PowerShell executes high-risk commands
   * - **USER-ENABLE-SWITCH-TYPE_51226**: Windows PowerShell executes suspicious commands
   * - **USER-ENABLE-SWITCH-TYPE_52821**: Windows suspicious process startup
   * - **USER-ENABLE-SWITCH-TYPE_57242**: Windows malicious command execution
   * - **USER-ENABLE-SWITCH-TYPE_57340**: Windows command line downloads and runs malicious files
   * - **USER-ENABLE-SWITCH-TYPE_39659**: Windows sensitive registry key protection
   * - **USER-ENABLE-SWITCH-TYPE_52816**: Windows high-risk account manipulation
   * - **USER-ENABLE-SWITCH-TYPE_54365**: Windows creates service auto-start entry
   * - **USER-ENABLE-SWITCH-TYPE_54366**: Windows creates high-risk auto-start entry
   * - **USER-ENABLE-SWITCH-TYPE_54367**: Windows creates scheduled task auto-start entry
   * - **USER-ENABLE-SWITCH-TYPE_54368**: Windows creates registry auto-start entry
   * - **USER-ENABLE-SWITCH-TYPE_54369**: Windows creates WMI auto-start entry
   * - **USER-ENABLE-SWITCH-TYPE_50869**: Linux unauthorized execution of high-risk commands
   * - **USER-ENABLE-SWITCH-TYPE_53272**: Linux privilege escalation via kernel vulnerability
   * - **USER-ENABLE-SWITCH-TYPE_54395**: Linux unauthorized read/write of sensitive files
   * - **USER-ENABLE-SWITCH-TYPE_57897**: Linux suspected privilege escalation behavior
   * - **USER-ENABLE-SWITCH-TYPE_52825**: Windows unauthorized execution of high-risk commands
   * - **USER-ENABLE-SWITCH-TYPE_5507**: Linux malicious driver
   * - **USER-ENABLE-SWITCH-TYPE_50876**: Linux counters security software
   * - **USER-ENABLE-SWITCH-TYPE_53168**: Linux process debugging
   * - **USER-ENABLE-SWITCH-TYPE_54699**: Linux hijacks dynamic-link library
   * - **USER-ENABLE-SWITCH-TYPE_62981**: Linux bypasses security monitoring
   * - **USER-ENABLE-SWITCH-TYPE_52815**: Windows loads high-risk driver
   * - **USER-ENABLE-SWITCH-TYPE_52823**: Windows runs high-risk ARK tool
   * - **USER-ENABLE-SWITCH-TYPE_54373**: Windows counters security software
   * - **USER-ENABLE-SWITCH-TYPE_54374**: Windows clears intrusion traces
   * - **USER-ENABLE-SWITCH-TYPE_54265**: Linux hijacks PAM module
   * - **USER-ENABLE-SWITCH-TYPE_54953**: Linux HashDump attack
   * - **USER-ENABLE-SWITCH-TYPE_54383**: Windows MimiKatz credential theft
   * - **USER-ENABLE-SWITCH-TYPE_54384**: Windows HashDump attack
   * - **USER-ENABLE-SWITCH-TYPE_50861**: Linux information detection
   * - **USER-ENABLE-SWITCH-TYPE_52818**: Windows information detection
   * - **USER-ENABLE-SWITCH-TYPE_54034**: Linux internal network scan
   * - **USER-ENABLE-SWITCH-TYPE_51228**: Windows high-risk lateral movement tool
   * - **USER-ENABLE-SWITCH-TYPE_50870**: Linux reverse shell
   * - **USER-ENABLE-SWITCH-TYPE_50873**: WebShell command execution
   * - **USER-ENABLE-SWITCH-TYPE_51236**: Windows reverse shell
   * - **USER-ENABLE-SWITCH-TYPE_50877**: Linux malicious program communication
   * - **USER-ENABLE-SWITCH-TYPE_50884**: Linux suspicious worm script behavior
   * - **USER-ENABLE-SWITCH-TYPE_50885**: Linux malicious script behavior
   * - **USER-ENABLE-SWITCH-TYPE_51201**: Linux ransomware
   * - **USER-ENABLE-SWITCH-TYPE_51202**: Linux suspected ransomware behavior
   * - **USER-ENABLE-SWITCH-TYPE_52827**: Windows ransomware
   * - **USER-ENABLE-SWITCH-TYPE_52828**: Windows suspected ransomware behavior
   * - **USER-ENABLE-SWITCH-TYPE_52829**: Windows deletes system backup
   * 
   * This parameter is required.
   * 
   * @example
   * kdump_switch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      config: 'Config',
      dryRun: 'DryRun',
      noTargetAsOn: 'NoTargetAsOn',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      config: 'string',
      dryRun: 'boolean',
      noTargetAsOn: 'boolean',
      sourceIp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

