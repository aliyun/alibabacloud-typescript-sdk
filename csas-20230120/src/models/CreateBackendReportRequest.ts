// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackendReportRequestReportObjects extends $dara.Model {
  /**
   * @remarks
   * The ID of the private access application. This parameter is required when PolicyType is set to PrivateAccessBlock. You can call ListPrivateAccessApplications to query the application ID.
   * 
   * @example
   * pa-app-****************1234
   */
  applicationId?: string;
  /**
   * @remarks
   * The operating system of the endpoint. This parameter is required when PolicyType is set to PeripheralBlock. Valid values:
   * * windows: Windows
   * * macOS: macOS
   * 
   * @example
   * windows
   */
  devType?: string;
  /**
   * @remarks
   * The peripheral channel. This parameter is required when PolicyType is set to PeripheralBlock. Windows supports usbStorage, printer, mobile, cardReader, cdrom, and bluetooth. macOS supports usbStorage, airDrop, mobile, and bluetooth.
   * 
   * @example
   * usbStorage
   */
  deviceType?: string;
  /**
   * @remarks
   * The MD5 hash of the file. This parameter is required when PolicyType is set to DlpSend. The value must be a 32-character hexadecimal string and is not case-sensitive.
   * 
   * @example
   * c936226c4745125b5786527d205a****
   */
  fileMd5?: string;
  /**
   * @remarks
   * The domain name to be reported. This parameter is required when PolicyType is set to DomainWhitelist or DomainBlacklist. Regular domain names and wildcard domain names starting with *. are supported. Protocols, ports, and paths are not supported.
   * 
   * @example
   * *.example.com
   */
  reportDomain?: string;
  /**
   * @remarks
   * The reporting granularity for peripherals. This parameter is required when PolicyType is set to PeripheralBlock. Only Channel is supported, which indicates reporting by peripheral channel.
   * 
   * @example
   * Channel
   */
  scope?: string;
  /**
   * @remarks
   * The ID of the blocked software. This parameter is required when PolicyType is set to SoftwareBlock.
   * 
   * @example
   * swb-c717ee516145****
   */
  softwareId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      devType: 'DevType',
      deviceType: 'DeviceType',
      fileMd5: 'FileMd5',
      reportDomain: 'ReportDomain',
      scope: 'Scope',
      softwareId: 'SoftwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      devType: 'string',
      deviceType: 'string',
      fileMd5: 'string',
      reportDomain: 'string',
      scope: 'string',
      softwareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackendReportRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The SASE user ID. You can call ListUsers to query the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * su_8548af20c3b30e931e75cd847a4c****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackendReportRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the report, which is a UNIX timestamp in seconds. This parameter is required when ValidityType is set to FixedTime or is not specified, and the value must be later than the current time. When ValidityType is set to Permanent, do not specify this parameter or set it to 0.
   * 
   * @example
   * 1788192000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The policy type. Valid values:
   * * PrivateAccessBlock: private network access
   * * DomainWhitelist: domain name whitelist
   * * DomainBlacklist: domain name blacklist
   * * SoftwareBlock: software blocking
   * * DlpSend: outbound file transfer
   * * PeripheralBlock: peripheral control
   * 
   * This parameter is required.
   * 
   * @example
   * PrivateAccessBlock
   */
  policyType?: string;
  /**
   * @remarks
   * The reason for the report. The value must be 1 to 1,024 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Temporary access for a project
   */
  reason?: string;
  /**
   * @remarks
   * The list of report objects in flat serialization format. You can specify 1 to 100 report objects of the same policy type. The object fields must match the policy type.
   * 
   * This parameter is required.
   */
  reportObjects?: CreateBackendReportRequestReportObjects[];
  /**
   * @remarks
   * The list of target users in flat serialization format. You can specify 1 to 100 users. Only specific SASE users under the current Alibaba Cloud account are supported. The product of the number of deduplicated users and the number of report objects cannot exceed 100.
   * 
   * This parameter is required.
   */
  targets?: CreateBackendReportRequestTargets[];
  /**
   * @remarks
   * The validity type. If you do not specify this parameter, the default value is FixedTime. Valid values:
   * * FixedTime: The exemption expires at the specified time.
   * * Permanent: The exemption is permanently valid.
   * 
   * @example
   * FixedTime
   */
  validityType?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      policyType: 'PolicyType',
      reason: 'Reason',
      reportObjects: 'ReportObjects',
      targets: 'Targets',
      validityType: 'ValidityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      policyType: 'string',
      reason: 'string',
      reportObjects: { 'type': 'array', 'itemType': CreateBackendReportRequestReportObjects },
      targets: { 'type': 'array', 'itemType': CreateBackendReportRequestTargets },
      validityType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportObjects)) {
      $dara.Model.validateArray(this.reportObjects);
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

