// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateApprovalProcessRequestMatchSchemas extends $dara.Model {
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  appUninstallSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  deviceRegistrationSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  dlpSendSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  domainBlacklistSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  domainWhitelistSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  peripheralBlockSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  softwareBlockSchemaId?: string;
  static names(): { [key: string]: string } {
    return {
      appUninstallSchemaId: 'AppUninstallSchemaId',
      deviceRegistrationSchemaId: 'DeviceRegistrationSchemaId',
      dlpSendSchemaId: 'DlpSendSchemaId',
      domainBlacklistSchemaId: 'DomainBlacklistSchemaId',
      domainWhitelistSchemaId: 'DomainWhitelistSchemaId',
      peripheralBlockSchemaId: 'PeripheralBlockSchemaId',
      softwareBlockSchemaId: 'SoftwareBlockSchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUninstallSchemaId: 'string',
      deviceRegistrationSchemaId: 'string',
      dlpSendSchemaId: 'string',
      domainBlacklistSchemaId: 'string',
      domainWhitelistSchemaId: 'string',
      peripheralBlockSchemaId: 'string',
      softwareBlockSchemaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponseBodyProcessAppUninstallPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponseBodyProcessDlpSendPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponseBodyProcessDomainBlacklistPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponseBodyProcessDomainWhitelistPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponseBodyProcessPeripheralBlockPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponseBodyProcessProcessNodes extends $dara.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponseBodyProcessSoftwareBlockPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponseBodyProcess extends $dara.Model {
  appUninstallPolicies?: CreateApprovalProcessResponseBodyProcessAppUninstallPolicies;
  /**
   * @example
   * 2022-10-25 10:44:09
   */
  createTime?: string;
  description?: string;
  deviceRegistrationPolicies?: CreateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies;
  dlpSendPolicies?: CreateApprovalProcessResponseBodyProcessDlpSendPolicies;
  domainBlacklistPolicies?: CreateApprovalProcessResponseBodyProcessDomainBlacklistPolicies;
  domainWhitelistPolicies?: CreateApprovalProcessResponseBodyProcessDomainWhitelistPolicies;
  peripheralBlockPolicies?: CreateApprovalProcessResponseBodyProcessPeripheralBlockPolicies;
  /**
   * @example
   * approval-process-dc61e92ba5c5****
   */
  processId?: string;
  processName?: string;
  processNodes?: CreateApprovalProcessResponseBodyProcessProcessNodes[][];
  softwareBlockPolicies?: CreateApprovalProcessResponseBodyProcessSoftwareBlockPolicies;
  static names(): { [key: string]: string } {
    return {
      appUninstallPolicies: 'AppUninstallPolicies',
      createTime: 'CreateTime',
      description: 'Description',
      deviceRegistrationPolicies: 'DeviceRegistrationPolicies',
      dlpSendPolicies: 'DlpSendPolicies',
      domainBlacklistPolicies: 'DomainBlacklistPolicies',
      domainWhitelistPolicies: 'DomainWhitelistPolicies',
      peripheralBlockPolicies: 'PeripheralBlockPolicies',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
      softwareBlockPolicies: 'SoftwareBlockPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUninstallPolicies: CreateApprovalProcessResponseBodyProcessAppUninstallPolicies,
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: CreateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies,
      dlpSendPolicies: CreateApprovalProcessResponseBodyProcessDlpSendPolicies,
      domainBlacklistPolicies: CreateApprovalProcessResponseBodyProcessDomainBlacklistPolicies,
      domainWhitelistPolicies: CreateApprovalProcessResponseBodyProcessDomainWhitelistPolicies,
      peripheralBlockPolicies: CreateApprovalProcessResponseBodyProcessPeripheralBlockPolicies,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': CreateApprovalProcessResponseBodyProcessProcessNodes } },
      softwareBlockPolicies: CreateApprovalProcessResponseBodyProcessSoftwareBlockPolicies,
    };
  }

  validate() {
    if(this.appUninstallPolicies && typeof (this.appUninstallPolicies as any).validate === 'function') {
      (this.appUninstallPolicies as any).validate();
    }
    if(this.deviceRegistrationPolicies && typeof (this.deviceRegistrationPolicies as any).validate === 'function') {
      (this.deviceRegistrationPolicies as any).validate();
    }
    if(this.dlpSendPolicies && typeof (this.dlpSendPolicies as any).validate === 'function') {
      (this.dlpSendPolicies as any).validate();
    }
    if(this.domainBlacklistPolicies && typeof (this.domainBlacklistPolicies as any).validate === 'function') {
      (this.domainBlacklistPolicies as any).validate();
    }
    if(this.domainWhitelistPolicies && typeof (this.domainWhitelistPolicies as any).validate === 'function') {
      (this.domainWhitelistPolicies as any).validate();
    }
    if(this.peripheralBlockPolicies && typeof (this.peripheralBlockPolicies as any).validate === 'function') {
      (this.peripheralBlockPolicies as any).validate();
    }
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    if(this.softwareBlockPolicies && typeof (this.softwareBlockPolicies as any).validate === 'function') {
      (this.softwareBlockPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessApplicationRequestPortRanges extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80
   */
  begin?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessPolicyRequestCustomUserAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyRequestCompanyLimitCount extends $dara.Model {
  /**
   * @example
   * 1
   */
  all?: number;
  /**
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @example
   * 0
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyRequestPersonalLimitCount extends $dara.Model {
  /**
   * @example
   * 0
   */
  all?: number;
  /**
   * @example
   * 3
   */
  mobile?: number;
  /**
   * @example
   * 2
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount extends $dara.Model {
  /**
   * @example
   * 0
   */
  all?: number;
  /**
   * @example
   * 3
   */
  mobile?: number;
  /**
   * @example
   * 2
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyResponseBodyPolicyLimitDetail extends $dara.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: CreateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount;
  /**
   * @example
   * LimitDiff
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: CreateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  validate() {
    if(this.limitCount && typeof (this.limitCount as any).validate === 'function') {
      (this.limitCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: CreateRegistrationPolicyResponseBodyPolicyLimitDetail[];
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': CreateRegistrationPolicyResponseBodyPolicyLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'string',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.limitDetail)) {
      $dara.Model.validateArray(this.limitDetail);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequestAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmBaseImageResponseBodyData extends $dara.Model {
  /**
   * @example
   * fafb432cdede9b20640e12105845386e-496883833-8242409229217337*****
   */
  imageId?: string;
  /**
   * @example
   * https://example.com/test-*****.png
   */
  imageUrl?: string;
  /**
   * @example
   * 17185*****
   */
  imageUrlExp?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      imageUrlExp: 'ImageUrlExp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageUrl: 'string',
      imageUrlExp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestCsvControl extends $dara.Model {
  embedBitsNumberInEachTime?: number;
  embedColumn?: number;
  embedDensity?: string;
  embedPrecision?: number;
  embedTimePosition?: string;
  method?: string;
  timeFormat?: string;
  static names(): { [key: string]: string } {
    return {
      embedBitsNumberInEachTime: 'EmbedBitsNumberInEachTime',
      embedColumn: 'EmbedColumn',
      embedDensity: 'EmbedDensity',
      embedPrecision: 'EmbedPrecision',
      embedTimePosition: 'EmbedTimePosition',
      method: 'Method',
      timeFormat: 'TimeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedBitsNumberInEachTime: 'number',
      embedColumn: 'number',
      embedDensity: 'string',
      embedPrecision: 'number',
      embedTimePosition: 'string',
      method: 'string',
      timeFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl extends $dara.Model {
  /**
   * @example
   * 10
   */
  opacity?: number;
  static names(): { [key: string]: string } {
    return {
      opacity: 'Opacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl extends $dara.Model {
  /**
   * @example
   * 30
   */
  angle?: number;
  /**
   * @example
   * 0x000000
   */
  fontColor?: string;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @example
   * 3
   */
  horizontalNumber?: number;
  /**
   * @example
   * pos
   */
  mode?: string;
  /**
   * @example
   * 100
   */
  opacity?: number;
  /**
   * @example
   * 0.5
   */
  posX?: string;
  /**
   * @example
   * 0.5
   */
  posY?: string;
  /**
   * @example
   * 3
   */
  verticalNumber?: number;
  /**
   * @example
   * hello ****
   */
  visibleText?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      horizontalNumber: 'HorizontalNumber',
      mode: 'Mode',
      opacity: 'Opacity',
      posX: 'PosX',
      posY: 'PosY',
      verticalNumber: 'VerticalNumber',
      visibleText: 'VisibleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      fontColor: 'string',
      fontSize: 'number',
      horizontalNumber: 'number',
      mode: 'string',
      opacity: 'number',
      posX: 'string',
      posY: 'string',
      verticalNumber: 'number',
      visibleText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControl extends $dara.Model {
  /**
   * @example
   * true
   */
  bgAddInvisible?: boolean;
  /**
   * @example
   * true
   */
  bgAddVisible?: boolean;
  bgInvisibleControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl;
  bgVisibleControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl;
  static names(): { [key: string]: string } {
    return {
      bgAddInvisible: 'BgAddInvisible',
      bgAddVisible: 'BgAddVisible',
      bgInvisibleControl: 'BgInvisibleControl',
      bgVisibleControl: 'BgVisibleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgAddInvisible: 'boolean',
      bgAddVisible: 'boolean',
      bgInvisibleControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl,
      bgVisibleControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl,
    };
  }

  validate() {
    if(this.bgInvisibleControl && typeof (this.bgInvisibleControl as any).validate === 'function') {
      (this.bgInvisibleControl as any).validate();
    }
    if(this.bgVisibleControl && typeof (this.bgVisibleControl as any).validate === 'function') {
      (this.bgVisibleControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControl extends $dara.Model {
  backgroundControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControl;
  /**
   * @example
   * true
   */
  invisibleAntiAllCopy?: boolean;
  /**
   * @example
   * true
   */
  invisibleAntiTextCopy?: boolean;
  static names(): { [key: string]: string } {
    return {
      backgroundControl: 'BackgroundControl',
      invisibleAntiAllCopy: 'InvisibleAntiAllCopy',
      invisibleAntiTextCopy: 'InvisibleAntiTextCopy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControl,
      invisibleAntiAllCopy: 'boolean',
      invisibleAntiTextCopy: 'boolean',
    };
  }

  validate() {
    if(this.backgroundControl && typeof (this.backgroundControl as any).validate === 'function') {
      (this.backgroundControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * job:5GfrJYsoaffmCE7Z5bZtjUefzxfd****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskRequestCsvControl extends $dara.Model {
  embedBitsNumberInEachTime?: number;
  embedColumn?: number;
  embedPrecision?: number;
  embedTimePosition?: string;
  method?: string;
  timeFormat?: string;
  static names(): { [key: string]: string } {
    return {
      embedBitsNumberInEachTime: 'EmbedBitsNumberInEachTime',
      embedColumn: 'EmbedColumn',
      embedPrecision: 'EmbedPrecision',
      embedTimePosition: 'EmbedTimePosition',
      method: 'Method',
      timeFormat: 'TimeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedBitsNumberInEachTime: 'number',
      embedColumn: 'number',
      embedPrecision: 'number',
      embedTimePosition: 'string',
      method: 'string',
      timeFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * wmt-9648c22d2eb2cb57bb855dcae7898464********
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmInfoMappingResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123***
   */
  wmInfoUint?: number;
  static names(): { [key: string]: string } {
    return {
      wmInfoUint: 'WmInfoUint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoUint: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActiveIdpConfigResponseBodyData extends $dara.Model {
  description?: string;
  /**
   * @example
   * idp-cfg001
   */
  id?: string;
  name?: string;
  /**
   * @example
   * DingTalk
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
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

export class GetApprovalResponseBodyApprovalApprovalProgressesOperators extends $dara.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalResponseBodyApprovalApprovalProgresses extends $dara.Model {
  /**
   * @example
   * Approve
   */
  action?: string;
  comment?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  executor?: string;
  operators?: GetApprovalResponseBodyApprovalApprovalProgressesOperators[];
  /**
   * @example
   * Approved
   */
  status?: string;
  /**
   * @example
   * 1736752000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      comment: 'Comment',
      executor: 'Executor',
      operators: 'Operators',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      comment: 'string',
      executor: 'string',
      operators: { 'type': 'array', 'itemType': GetApprovalResponseBodyApprovalApprovalProgressesOperators },
      status: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.operators)) {
      $dara.Model.validateArray(this.operators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalResponseBodyApproval extends $dara.Model {
  approvalDetail?: string;
  /**
   * @example
   * approval-3564b140642f****
   */
  approvalId?: string;
  approvalProgresses?: GetApprovalResponseBodyApprovalApprovalProgresses[];
  /**
   * @example
   * 2022-11-15 22:11:55
   */
  createTime?: string;
  creatorDepartment?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  creatorDevTag?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  creatorUserId?: string;
  creatorUsername?: string;
  /**
   * @example
   * 1757952000
   */
  endTimestamp?: number;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  processName?: string;
  reason?: string;
  /**
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  schemaName?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      approvalDetail: 'ApprovalDetail',
      approvalId: 'ApprovalId',
      approvalProgresses: 'ApprovalProgresses',
      createTime: 'CreateTime',
      creatorDepartment: 'CreatorDepartment',
      creatorDevTag: 'CreatorDevTag',
      creatorUserId: 'CreatorUserId',
      creatorUsername: 'CreatorUsername',
      endTimestamp: 'EndTimestamp',
      policyType: 'PolicyType',
      processId: 'ProcessId',
      processName: 'ProcessName',
      reason: 'Reason',
      schemaContent: 'SchemaContent',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDetail: 'string',
      approvalId: 'string',
      approvalProgresses: { 'type': 'array', 'itemType': GetApprovalResponseBodyApprovalApprovalProgresses },
      createTime: 'string',
      creatorDepartment: 'string',
      creatorDevTag: 'string',
      creatorUserId: 'string',
      creatorUsername: 'string',
      endTimestamp: 'number',
      policyType: 'string',
      processId: 'string',
      processName: 'string',
      reason: 'string',
      schemaContent: 'string',
      schemaId: 'string',
      schemaName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approvalProgresses)) {
      $dara.Model.validateArray(this.approvalProgresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessAppUninstallPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDlpSendPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessProcessNodes extends $dara.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcess extends $dara.Model {
  appUninstallPolicies?: GetApprovalProcessResponseBodyProcessAppUninstallPolicies;
  /**
   * @example
   * 2022-10-25 10:44:09
   */
  createTime?: string;
  description?: string;
  deviceRegistrationPolicies?: GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies;
  dlpSendPolicies?: GetApprovalProcessResponseBodyProcessDlpSendPolicies;
  domainBlacklistPolicies?: GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies;
  domainWhitelistPolicies?: GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies;
  peripheralBlockPolicies?: GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies;
  /**
   * @example
   * approval-process-35ee09077ee9****
   */
  processId?: string;
  processName?: string;
  processNodes?: GetApprovalProcessResponseBodyProcessProcessNodes[][];
  softwareBlockPolicies?: GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies;
  static names(): { [key: string]: string } {
    return {
      appUninstallPolicies: 'AppUninstallPolicies',
      createTime: 'CreateTime',
      description: 'Description',
      deviceRegistrationPolicies: 'DeviceRegistrationPolicies',
      dlpSendPolicies: 'DlpSendPolicies',
      domainBlacklistPolicies: 'DomainBlacklistPolicies',
      domainWhitelistPolicies: 'DomainWhitelistPolicies',
      peripheralBlockPolicies: 'PeripheralBlockPolicies',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
      softwareBlockPolicies: 'SoftwareBlockPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUninstallPolicies: GetApprovalProcessResponseBodyProcessAppUninstallPolicies,
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies,
      dlpSendPolicies: GetApprovalProcessResponseBodyProcessDlpSendPolicies,
      domainBlacklistPolicies: GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies,
      domainWhitelistPolicies: GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies,
      peripheralBlockPolicies: GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessProcessNodes } },
      softwareBlockPolicies: GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies,
    };
  }

  validate() {
    if(this.appUninstallPolicies && typeof (this.appUninstallPolicies as any).validate === 'function') {
      (this.appUninstallPolicies as any).validate();
    }
    if(this.deviceRegistrationPolicies && typeof (this.deviceRegistrationPolicies as any).validate === 'function') {
      (this.deviceRegistrationPolicies as any).validate();
    }
    if(this.dlpSendPolicies && typeof (this.dlpSendPolicies as any).validate === 'function') {
      (this.dlpSendPolicies as any).validate();
    }
    if(this.domainBlacklistPolicies && typeof (this.domainBlacklistPolicies as any).validate === 'function') {
      (this.domainBlacklistPolicies as any).validate();
    }
    if(this.domainWhitelistPolicies && typeof (this.domainWhitelistPolicies as any).validate === 'function') {
      (this.domainWhitelistPolicies as any).validate();
    }
    if(this.peripheralBlockPolicies && typeof (this.peripheralBlockPolicies as any).validate === 'function') {
      (this.peripheralBlockPolicies as any).validate();
    }
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    if(this.softwareBlockPolicies && typeof (this.softwareBlockPolicies as any).validate === 'function') {
      (this.softwareBlockPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalSchemaResponseBodySchema extends $dara.Model {
  /**
   * @example
   * 2022-02-14 11:57:51
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  schemaName?: string;
  /**
   * @example
   * 1715680940
   */
  schemaVersion?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      policyType: 'PolicyType',
      schemaContent: 'SchemaContent',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      policyType: 'string',
      schemaContent: 'string',
      schemaId: 'string',
      schemaName: 'string',
      schemaVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn extends $dara.Model {
  /**
   * @example
   * After uninstalling, the device can no longer be used for company work, and it will lose access to the company\\"s intranet!
   */
  content?: string;
  /**
   * @example
   * Report
   */
  mainButtonText?: string;
  /**
   * @example
   * Ignore
   */
  minorButtonText?: string;
  /**
   * @example
   * Anti-Uninstall Warning
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mainButtonText: 'MainButtonText',
      minorButtonText: 'MinorButtonText',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mainButtonText: 'string',
      minorButtonText: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh extends $dara.Model {
  content?: string;
  mainButtonText?: string;
  minorButtonText?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mainButtonText: 'MainButtonText',
      minorButtonText: 'MinorButtonText',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mainButtonText: 'string',
      minorButtonText: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent extends $dara.Model {
  blockTextEn?: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn;
  blockTextZh?: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh;
  static names(): { [key: string]: string } {
    return {
      blockTextEn: 'BlockTextEn',
      blockTextZh: 'BlockTextZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockTextEn: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn,
      blockTextZh: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh,
    };
  }

  validate() {
    if(this.blockTextEn && typeof (this.blockTextEn as any).validate === 'function') {
      (this.blockTextEn as any).validate();
    }
    if(this.blockTextZh && typeof (this.blockTextZh as any).validate === 'function') {
      (this.blockTextZh as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBootAndAntiUninstallPolicyResponseBodyStrategy extends $dara.Model {
  /**
   * @example
   * true
   */
  allowReport?: boolean;
  blockContent?: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent;
  /**
   * @example
   * 2023-04-16 10:50:05
   */
  createTime?: string;
  /**
   * @example
   * true
   */
  isAntiUninstall?: boolean;
  /**
   * @example
   * true
   */
  isBoot?: boolean;
  /**
   * @example
   * auto-boot-anti-uninstall-6f6cbf5f6605****
   */
  policyId?: string;
  /**
   * @example
   * approval-process-300abfb970cc****
   */
  reportProcessId?: string;
  /**
   * @example
   * 2024-06-14 10:17:14
   */
  updateTime?: string;
  userGroupIds?: string[];
  whitelistUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      allowReport: 'AllowReport',
      blockContent: 'BlockContent',
      createTime: 'CreateTime',
      isAntiUninstall: 'IsAntiUninstall',
      isBoot: 'IsBoot',
      policyId: 'PolicyId',
      reportProcessId: 'ReportProcessId',
      updateTime: 'UpdateTime',
      userGroupIds: 'UserGroupIds',
      whitelistUsers: 'WhitelistUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowReport: 'boolean',
      blockContent: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent,
      createTime: 'string',
      isAntiUninstall: 'boolean',
      isBoot: 'boolean',
      policyId: 'string',
      reportProcessId: 'string',
      updateTime: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelistUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.blockContent && typeof (this.blockContent as any).validate === 'function') {
      (this.blockContent as any).validate();
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelistUsers)) {
      $dara.Model.validateArray(this.whitelistUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserResponseBodyDataDepartment extends $dara.Model {
  /**
   * @example
   * 107
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserResponseBodyData extends $dara.Model {
  department?: GetClientUserResponseBodyDataDepartment;
  /**
   * @example
   * 10713
   */
  departmentId?: string;
  description?: string;
  /**
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @example
   * 83
   */
  id?: string;
  /**
   * @example
   * 598
   */
  idpConfigId?: string;
  /**
   * @example
   * 13641966835
   */
  mobileNumber?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * su_abcd7215****
   */
  userId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      id: 'Id',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      status: 'Status',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: GetClientUserResponseBodyDataDepartment,
      departmentId: 'string',
      description: 'string',
      email: 'string',
      id: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      status: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(this.department && typeof (this.department as any).validate === 'function') {
      (this.department as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicRouteResponseBodyDynamicRoute extends $dara.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2023-02-09 10:31:47
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * dr-16ff07c8207d****
   */
  dynamicRouteId?: string;
  /**
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  regionIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      description: 'Description',
      dynamicRouteId: 'DynamicRouteId',
      dynamicRouteType: 'DynamicRouteType',
      name: 'Name',
      nextHop: 'NextHop',
      priority: 'Priority',
      regionIds: 'RegionIds',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      createTime: 'string',
      description: 'string',
      dynamicRouteId: 'string',
      dynamicRouteType: 'string',
      name: 'string',
      nextHop: 'string',
      priority: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdpConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AccessKey ID
   * 
   * @example
   * LTAI5tJVztnh6Nn***
   */
  accessKey?: string;
  /**
   * @remarks
   * AccessKey Secret
   * 
   * @example
   * E75ktr5jENiR3ssjC***
   */
  accessKeySecret?: string;
  description?: string;
  /**
   * @example
   * https://172.10.10.2:4321/getGroup?name=%s&pass=%s
   */
  getGroupUrl?: string;
  /**
   * @example
   * 1465
   */
  id?: string;
  /**
   * @example
   * <?xml version="1.0" encoding="utf-8"?>***
   */
  idpMetadata?: string;
  /**
   * @example
   * totp
   */
  mfaConfigType?: string;
  /**
   * @example
   * password
   */
  mobileLoginType?: string;
  /**
   * @example
   * totp
   */
  mobileMfaConfigType?: string;
  /**
   * @example
   * 1482,1355
   */
  multiIdpInfo?: string;
  name?: string;
  /**
   * @example
   * password
   */
  pcLoginType?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * CSAS
   */
  type?: string;
  /**
   * @example
   * 2024-02-26T02:02:42Z
   */
  updateTime?: string;
  /**
   * @example
   * QVhaU0RDR0JIWVV***
   */
  verifyAesKey?: string;
  /**
   * @example
   * 7JAr3fYtnl***
   */
  verifyToken?: string;
  /**
   * @example
   * http://172.10.10.1:1234/otp_verify
   */
  verifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessKeySecret: 'AccessKeySecret',
      description: 'Description',
      getGroupUrl: 'GetGroupUrl',
      id: 'Id',
      idpMetadata: 'IdpMetadata',
      mfaConfigType: 'MfaConfigType',
      mobileLoginType: 'MobileLoginType',
      mobileMfaConfigType: 'MobileMfaConfigType',
      multiIdpInfo: 'MultiIdpInfo',
      name: 'Name',
      pcLoginType: 'PcLoginType',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      verifyAesKey: 'VerifyAesKey',
      verifyToken: 'VerifyToken',
      verifyUrl: 'VerifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessKeySecret: 'string',
      description: 'string',
      getGroupUrl: 'string',
      id: 'string',
      idpMetadata: 'string',
      mfaConfigType: 'string',
      mobileLoginType: 'string',
      mobileMfaConfigType: 'string',
      multiIdpInfo: 'string',
      name: 'string',
      pcLoginType: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
      verifyAesKey: 'string',
      verifyToken: 'string',
      verifyUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessApplicationResponseBodyApplicationPortRanges extends $dara.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessApplicationResponseBodyApplication extends $dara.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  browserAccessStatus?: string;
  connectorIds?: string[];
  /**
   * @example
   * 2022-08-30 16:50:32
   */
  createTime?: string;
  description?: string;
  l7ProxyDomainAutomatic?: string;
  l7ProxyDomainCustom?: string;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  policyIds?: string[];
  portRanges?: GetPrivateAccessApplicationResponseBodyApplicationPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      browserAccessStatus: 'BrowserAccessStatus',
      connectorIds: 'ConnectorIds',
      createTime: 'CreateTime',
      description: 'Description',
      l7ProxyDomainAutomatic: 'L7ProxyDomainAutomatic',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      name: 'Name',
      policyIds: 'PolicyIds',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      browserAccessStatus: 'string',
      connectorIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      l7ProxyDomainAutomatic: 'string',
      l7ProxyDomainCustom: 'string',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      portRanges: { 'type': 'array', 'itemType': GetPrivateAccessApplicationResponseBodyApplicationPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.connectorIds)) {
      $dara.Model.validateArray(this.connectorIds);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessPolicyResponseBodyPolicy extends $dara.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2021-07-29 11:26:02
   */
  createTime?: string;
  customUserAttributes?: GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes[];
  description?: string;
  deviceAttributeAction?: string;
  deviceAttributeId?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  triggerTemplateId?: string;
  userGroupIds?: string[];
  /**
   * @example
   * Normal
   */
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      deviceAttributeAction: 'DeviceAttributeAction',
      deviceAttributeId: 'DeviceAttributeId',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      tagIds: 'TagIds',
      triggerTemplateId: 'TriggerTemplateId',
      userGroupIds: 'UserGroupIds',
      userGroupMode: 'UserGroupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      triggerTemplateId: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistrationPolicyResponseBodyLimitDetailLimitCount extends $dara.Model {
  /**
   * @example
   * 0
   */
  all?: number;
  /**
   * @example
   * 2
   */
  mobile?: number;
  /**
   * @example
   * 2
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistrationPolicyResponseBodyLimitDetail extends $dara.Model {
  /**
   * @example
   * Personal
   */
  deviceBelong?: string;
  limitCount?: GetRegistrationPolicyResponseBodyLimitDetailLimitCount;
  /**
   * @example
   * LimitDiff
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: GetRegistrationPolicyResponseBodyLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  validate() {
    if(this.limitCount && typeof (this.limitCount as any).validate === 'function') {
      (this.limitCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponseBodyDeviceHistoryUsers extends $dara.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponseBodyDeviceNetInterfaceInfo extends $dara.Model {
  mac?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mac: 'Mac',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mac: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponseBodyDevice extends $dara.Model {
  /**
   * @example
   * Online
   */
  appStatus?: string;
  /**
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @example
   * Unauthorized
   */
  dlpStatus?: string;
  edrStatus?: string;
  historyUsers?: GetUserDeviceResponseBodyDeviceHistoryUsers[];
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * Disabled
   */
  iaStatus?: string;
  /**
   * @example
   * 172.16.XX.XX
   */
  innerIP?: string;
  /**
   * @example
   * 48:9e:XX:XX:02:80
   */
  mac?: string;
  /**
   * @example
   * 16
   */
  memory?: string;
  /**
   * @example
   * Unprovisioned
   */
  nacStatus?: string;
  netInterfaceInfo?: GetUserDeviceResponseBodyDeviceNetInterfaceInfo[];
  /**
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @example
   * 106.14.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      appVersion: 'AppVersion',
      CPU: 'CPU',
      createTime: 'CreateTime',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceModel: 'DeviceModel',
      deviceStatus: 'DeviceStatus',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      deviceVersion: 'DeviceVersion',
      disk: 'Disk',
      dlpStatus: 'DlpStatus',
      edrStatus: 'EdrStatus',
      historyUsers: 'HistoryUsers',
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      mac: 'Mac',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      netInterfaceInfo: 'NetInterfaceInfo',
      paStatus: 'PaStatus',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      srcIP: 'SrcIP',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      appVersion: 'string',
      CPU: 'string',
      createTime: 'string',
      department: 'string',
      deviceBelong: 'string',
      deviceModel: 'string',
      deviceStatus: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      deviceVersion: 'string',
      disk: 'string',
      dlpStatus: 'string',
      edrStatus: 'string',
      historyUsers: { 'type': 'array', 'itemType': GetUserDeviceResponseBodyDeviceHistoryUsers },
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      memory: 'string',
      nacStatus: 'string',
      netInterfaceInfo: { 'type': 'array', 'itemType': GetUserDeviceResponseBodyDeviceNetInterfaceInfo },
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyUsers)) {
      $dara.Model.validateArray(this.historyUsers);
    }
    if(Array.isArray(this.netInterfaceInfo)) {
      $dara.Model.validateArray(this.netInterfaceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBodyUserGroupAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBodyUserGroup extends $dara.Model {
  attributes?: GetUserGroupResponseBodyUserGroupAttributes[];
  /**
   * @example
   * 2022-10-10 11:39:22
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': GetUserGroupResponseBodyUserGroupAttributes },
      createTime: 'string',
      description: 'string',
      name: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmEmbedTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * https://example.com/embed-****.pdf
   */
  fileUrl?: string;
  /**
   * @example
   * 171859****
   */
  fileUrlExp?: string;
  /**
   * @example
   * embed-****.pdf
   */
  filename?: string;
  /**
   * @example
   * d41d8cd98f00b204e9800998ecf8****
   */
  outFileHashMd5?: string;
  /**
   * @example
   * 123**
   */
  outFileSize?: number;
  /**
   * @example
   * job:5GfrJYsoaffmCE7Z5bZtjUxxxxxxxxxx
   */
  taskId?: string;
  /**
   * @example
   * Success
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      fileUrlExp: 'FileUrlExp',
      filename: 'Filename',
      outFileHashMd5: 'OutFileHashMd5',
      outFileSize: 'OutFileSize',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      fileUrlExp: 'string',
      filename: 'string',
      outFileHashMd5: 'string',
      outFileSize: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmExtractTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-01-01 11:22:33
   */
  createTime?: string;
  /**
   * @example
   * test-****.pdf
   */
  filename?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * wmt-9648c22d2eb2cb57bb855dcae7898464********
   */
  taskId?: string;
  /**
   * @example
   * aGVsbG8gc2Fz****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 123**
   */
  wmInfoUint?: number;
  /**
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      filename: 'Filename',
      status: 'Status',
      taskId: 'TaskId',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      filename: 'string',
      status: 'string',
      taskId: 'string',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'number',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges extends $dara.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplications extends $dara.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-7a9243dd02f4****
   */
  applicationId?: string;
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * application_name
   */
  name?: string;
  portRanges?: ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges[];
  /**
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      createTime: 'string',
      description: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBodyPolices extends $dara.Model {
  applications?: ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplications[];
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplications },
      policyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBodyTagsApplicationsPortRanges extends $dara.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBodyTagsApplications extends $dara.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-7a9243dd02f4****
   */
  applicationId?: string;
  /**
   * @remarks
   * 内网访问应用创建时间。
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  portRanges?: ListApplicationsForPrivateAccessTagResponseBodyTagsApplicationsPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      createTime: 'string',
      description: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessTagResponseBodyTagsApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBodyTags extends $dara.Model {
  applications?: ListApplicationsForPrivateAccessTagResponseBodyTagsApplications[];
  /**
   * @example
   * tag-7ffc82853476****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessTagResponseBodyTagsApplications },
      tagId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesAppUninstallPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesDeviceRegistrationPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesDlpSendPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesDomainBlacklistPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesDomainWhitelistPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesPeripheralBlockPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesProcessNodes extends $dara.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesSoftwareBlockPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcesses extends $dara.Model {
  appUninstallPolicies?: ListApprovalProcessesResponseBodyProcessesAppUninstallPolicies;
  /**
   * @example
   * 2024-02-27 14:04:27
   */
  createTime?: string;
  description?: string;
  deviceRegistrationPolicies?: ListApprovalProcessesResponseBodyProcessesDeviceRegistrationPolicies;
  dlpSendPolicies?: ListApprovalProcessesResponseBodyProcessesDlpSendPolicies;
  domainBlacklistPolicies?: ListApprovalProcessesResponseBodyProcessesDomainBlacklistPolicies;
  domainWhitelistPolicies?: ListApprovalProcessesResponseBodyProcessesDomainWhitelistPolicies;
  peripheralBlockPolicies?: ListApprovalProcessesResponseBodyProcessesPeripheralBlockPolicies;
  /**
   * @example
   * approval-process-35ee09077ee9****
   */
  processId?: string;
  processName?: string;
  processNodes?: ListApprovalProcessesResponseBodyProcessesProcessNodes[][];
  softwareBlockPolicies?: ListApprovalProcessesResponseBodyProcessesSoftwareBlockPolicies;
  static names(): { [key: string]: string } {
    return {
      appUninstallPolicies: 'AppUninstallPolicies',
      createTime: 'CreateTime',
      description: 'Description',
      deviceRegistrationPolicies: 'DeviceRegistrationPolicies',
      dlpSendPolicies: 'DlpSendPolicies',
      domainBlacklistPolicies: 'DomainBlacklistPolicies',
      domainWhitelistPolicies: 'DomainWhitelistPolicies',
      peripheralBlockPolicies: 'PeripheralBlockPolicies',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
      softwareBlockPolicies: 'SoftwareBlockPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUninstallPolicies: ListApprovalProcessesResponseBodyProcessesAppUninstallPolicies,
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: ListApprovalProcessesResponseBodyProcessesDeviceRegistrationPolicies,
      dlpSendPolicies: ListApprovalProcessesResponseBodyProcessesDlpSendPolicies,
      domainBlacklistPolicies: ListApprovalProcessesResponseBodyProcessesDomainBlacklistPolicies,
      domainWhitelistPolicies: ListApprovalProcessesResponseBodyProcessesDomainWhitelistPolicies,
      peripheralBlockPolicies: ListApprovalProcessesResponseBodyProcessesPeripheralBlockPolicies,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': ListApprovalProcessesResponseBodyProcessesProcessNodes } },
      softwareBlockPolicies: ListApprovalProcessesResponseBodyProcessesSoftwareBlockPolicies,
    };
  }

  validate() {
    if(this.appUninstallPolicies && typeof (this.appUninstallPolicies as any).validate === 'function') {
      (this.appUninstallPolicies as any).validate();
    }
    if(this.deviceRegistrationPolicies && typeof (this.deviceRegistrationPolicies as any).validate === 'function') {
      (this.deviceRegistrationPolicies as any).validate();
    }
    if(this.dlpSendPolicies && typeof (this.dlpSendPolicies as any).validate === 'function') {
      (this.dlpSendPolicies as any).validate();
    }
    if(this.domainBlacklistPolicies && typeof (this.domainBlacklistPolicies as any).validate === 'function') {
      (this.domainBlacklistPolicies as any).validate();
    }
    if(this.domainWhitelistPolicies && typeof (this.domainWhitelistPolicies as any).validate === 'function') {
      (this.domainWhitelistPolicies as any).validate();
    }
    if(this.peripheralBlockPolicies && typeof (this.peripheralBlockPolicies as any).validate === 'function') {
      (this.peripheralBlockPolicies as any).validate();
    }
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    if(this.softwareBlockPolicies && typeof (this.softwareBlockPolicies as any).validate === 'function') {
      (this.softwareBlockPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesForApprovalSchemasResponseBodySchemasProcesses extends $dara.Model {
  /**
   * @example
   * 2022-10-25 10:44:09
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * approval-process-dc61e92ba5c5****
   */
  processId?: string;
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      processId: 'ProcessId',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      processId: 'string',
      processName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesForApprovalSchemasResponseBodySchemas extends $dara.Model {
  processes?: ListApprovalProcessesForApprovalSchemasResponseBodySchemasProcesses[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      processes: 'Processes',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processes: { 'type': 'array', 'itemType': ListApprovalProcessesForApprovalSchemasResponseBodySchemasProcesses },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processes)) {
      $dara.Model.validateArray(this.processes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalSchemasResponseBodySchemas extends $dara.Model {
  /**
   * @example
   * 2024-03-15 14:44:07
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  schemaName?: string;
  /**
   * @example
   * 1715680940
   */
  schemaVersion?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      policyType: 'PolicyType',
      schemaContent: 'SchemaContent',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      policyType: 'string',
      schemaContent: 'string',
      schemaId: 'string',
      schemaName: 'string',
      schemaVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalSchemasForApprovalProcessesResponseBodyProcessesSchemas extends $dara.Model {
  /**
   * @example
   * 2024-03-15 14:44:07
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  schemaName?: string;
  /**
   * @example
   * 1715680940
   */
  schemaVersion?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      policyType: 'PolicyType',
      schemaContent: 'SchemaContent',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      policyType: 'string',
      schemaContent: 'string',
      schemaId: 'string',
      schemaName: 'string',
      schemaVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalSchemasForApprovalProcessesResponseBodyProcesses extends $dara.Model {
  /**
   * @example
   * approval-process-35ee09077ee9****
   */
  processId?: string;
  schemas?: ListApprovalSchemasForApprovalProcessesResponseBodyProcessesSchemas[];
  static names(): { [key: string]: string } {
    return {
      processId: 'ProcessId',
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processId: 'string',
      schemas: { 'type': 'array', 'itemType': ListApprovalSchemasForApprovalProcessesResponseBodyProcessesSchemas },
    };
  }

  validate() {
    if(Array.isArray(this.schemas)) {
      $dara.Model.validateArray(this.schemas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalsResponseBodyApprovalsApprovalProgressesOperators extends $dara.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalsResponseBodyApprovalsApprovalProgresses extends $dara.Model {
  /**
   * @example
   * Approve
   */
  action?: string;
  comment?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  executor?: string;
  operators?: ListApprovalsResponseBodyApprovalsApprovalProgressesOperators[];
  /**
   * @example
   * Approved
   */
  status?: string;
  /**
   * @example
   * 1736752000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      comment: 'Comment',
      executor: 'Executor',
      operators: 'Operators',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      comment: 'string',
      executor: 'string',
      operators: { 'type': 'array', 'itemType': ListApprovalsResponseBodyApprovalsApprovalProgressesOperators },
      status: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.operators)) {
      $dara.Model.validateArray(this.operators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalsResponseBodyApprovals extends $dara.Model {
  approvalDetail?: string;
  /**
   * @example
   * approval-872b5e911b35****
   */
  approvalId?: string;
  approvalProgresses?: ListApprovalsResponseBodyApprovalsApprovalProgresses[];
  /**
   * @example
   * 2022-11-15 22:11:55
   */
  createTime?: string;
  creatorDepartment?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  creatorDevTag?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  creatorUserId?: string;
  creatorUsername?: string;
  /**
   * @example
   * 1757952000
   */
  endTimestamp?: number;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  processName?: string;
  reason?: string;
  /**
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  schemaName?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      approvalDetail: 'ApprovalDetail',
      approvalId: 'ApprovalId',
      approvalProgresses: 'ApprovalProgresses',
      createTime: 'CreateTime',
      creatorDepartment: 'CreatorDepartment',
      creatorDevTag: 'CreatorDevTag',
      creatorUserId: 'CreatorUserId',
      creatorUsername: 'CreatorUsername',
      endTimestamp: 'EndTimestamp',
      policyType: 'PolicyType',
      processId: 'ProcessId',
      processName: 'ProcessName',
      reason: 'Reason',
      schemaContent: 'SchemaContent',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDetail: 'string',
      approvalId: 'string',
      approvalProgresses: { 'type': 'array', 'itemType': ListApprovalsResponseBodyApprovalsApprovalProgresses },
      createTime: 'string',
      creatorDepartment: 'string',
      creatorDevTag: 'string',
      creatorUserId: 'string',
      creatorUsername: 'string',
      endTimestamp: 'number',
      policyType: 'string',
      processId: 'string',
      processName: 'string',
      reason: 'string',
      schemaContent: 'string',
      schemaId: 'string',
      schemaName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approvalProgresses)) {
      $dara.Model.validateArray(this.approvalProgresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponseBodyDataDataListDepartment extends $dara.Model {
  /**
   * @example
   * 105
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponseBodyDataDataList extends $dara.Model {
  department?: ListClientUsersResponseBodyDataDataListDepartment;
  /**
   * @example
   * 10800
   */
  departmentId?: string;
  description?: string;
  /**
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @example
   * 1970
   */
  id?: string;
  /**
   * @example
   * 1026
   */
  idpConfigId?: string;
  /**
   * @example
   * 15800820468
   */
  mobileNumber?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * su_dead7216****
   */
  userId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      id: 'Id',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      status: 'Status',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: ListClientUsersResponseBodyDataDataListDepartment,
      departmentId: 'string',
      description: 'string',
      email: 'string',
      id: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      status: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(this.department && typeof (this.department as any).validate === 'function') {
      (this.department as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponseBodyData extends $dara.Model {
  dataList?: ListClientUsersResponseBodyDataDataList[];
  /**
   * @example
   * 2
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListClientUsersResponseBodyDataDataList },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectorsApplications extends $dara.Model {
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @example
   * application_name
   */
  applicationName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectorsConnectorClients extends $dara.Model {
  connectionStatus?: string;
  devTag?: string;
  hostname?: string;
  publicIp?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      devTag: 'DevTag',
      hostname: 'Hostname',
      publicIp: 'PublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      devTag: 'string',
      hostname: 'string',
      publicIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectorsUpgradeTime extends $dara.Model {
  /**
   * @example
   * 23:00
   */
  end?: string;
  /**
   * @example
   * 20:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectors extends $dara.Model {
  applications?: ListConnectorsResponseBodyConnectorsApplications[];
  connectorClients?: ListConnectorsResponseBodyConnectorsConnectorClients[];
  /**
   * @remarks
   * ConnectorID。
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  /**
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Online
   */
  status?: string;
  /**
   * @example
   * Enabled
   */
  switchStatus?: string;
  upgradeTime?: ListConnectorsResponseBodyConnectorsUpgradeTime;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      connectorClients: 'ConnectorClients',
      connectorId: 'ConnectorId',
      createTime: 'CreateTime',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      switchStatus: 'SwitchStatus',
      upgradeTime: 'UpgradeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectorsApplications },
      connectorClients: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectorsConnectorClients },
      connectorId: 'string',
      createTime: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      switchStatus: 'string',
      upgradeTime: ListConnectorsResponseBodyConnectorsUpgradeTime,
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    if(Array.isArray(this.connectorClients)) {
      $dara.Model.validateArray(this.connectorClients);
    }
    if(this.upgradeTime && typeof (this.upgradeTime as any).validate === 'function') {
      (this.upgradeTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRoutesResponseBodyDynamicRoutes extends $dara.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2023-03-21 11:50:03
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * dr-a0ca843f53cf****
   */
  dynamicRouteId?: string;
  /**
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  regionIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      description: 'Description',
      dynamicRouteId: 'DynamicRouteId',
      dynamicRouteType: 'DynamicRouteType',
      name: 'Name',
      nextHop: 'NextHop',
      priority: 'Priority',
      regionIds: 'RegionIds',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      createTime: 'string',
      description: 'string',
      dynamicRouteId: 'string',
      dynamicRouteType: 'string',
      name: 'string',
      nextHop: 'string',
      priority: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExcessiveDeviceRegistrationApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * reg-application-0f4a127b7e78****
   */
  applicationId?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  description?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * false
   */
  isUsed?: boolean;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * Approved
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      department: 'Department',
      description: 'Description',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      hostname: 'Hostname',
      isUsed: 'IsUsed',
      mac: 'Mac',
      saseUserId: 'SaseUserId',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      createTime: 'string',
      department: 'string',
      description: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      hostname: 'string',
      isUsed: 'boolean',
      mac: 'string',
      saseUserId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsResponseBodyDataDataList extends $dara.Model {
  description?: string;
  /**
   * @example
   * 277
   */
  id?: string;
  /**
   * @example
   * totp
   */
  mfa?: string;
  /**
   * @example
   * password
   */
  mobileLoginType?: string;
  /**
   * @example
   * password
   */
  mobileMfaConfigType?: string;
  /**
   * @example
   * 1482,1355
   */
  multiIdpInfo?: string;
  name?: string;
  /**
   * @example
   * password
   */
  pcLoginType?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * DingTalk
   */
  type?: string;
  /**
   * @example
   * 2023-05-09T02:22:41.430Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      mfa: 'Mfa',
      mobileLoginType: 'MobileLoginType',
      mobileMfaConfigType: 'MobileMfaConfigType',
      multiIdpInfo: 'MultiIdpInfo',
      name: 'Name',
      pcLoginType: 'PcLoginType',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      mfa: 'string',
      mobileLoginType: 'string',
      mobileMfaConfigType: 'string',
      multiIdpInfo: 'string',
      name: 'string',
      pcLoginType: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsResponseBodyData extends $dara.Model {
  dataList?: ListIdpConfigsResponseBodyDataDataList[];
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListIdpConfigsResponseBodyDataDataList },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsResponseBodyDataDataList extends $dara.Model {
  /**
   * @example
   * 30520
   */
  id?: string;
  /**
   * @example
   * 1440
   */
  idpConfigId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      idpConfigId: 'IdpConfigId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      idpConfigId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsResponseBodyData extends $dara.Model {
  dataList?: ListIdpDepartmentsResponseBodyDataDataList[];
  /**
   * @example
   * 2
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListIdpDepartmentsResponseBodyDataDataList },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacUserCertResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1
   */
  aliuid?: string;
  department?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @example
   * windows
   */
  deviceType?: string;
  /**
   * @example
   * 2029-06-30 09:31:54
   */
  expiredTime?: string;
  /**
   * @example
   * MS-XU****
   */
  hostname?: string;
  /**
   * @example
   * 08:f8:**:**:**:5e
   */
  mac?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  userId?: string;
  /**
   * @example
   * zhang**
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      department: 'Department',
      devTag: 'DevTag',
      deviceType: 'DeviceType',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      mac: 'Mac',
      status: 'Status',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      department: 'string',
      devTag: 'string',
      deviceType: 'string',
      expiredTime: 'string',
      hostname: 'string',
      mac: 'string',
      status: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies extends $dara.Model {
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  customUserAttributes?: ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes[];
  description?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * Normal
   */
  userGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupType: 'UserGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes },
      description: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * pa-application-b927baf3e592****
   */
  applicationId?: string;
  policies?: ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      policies: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * 用户组的身份源ID。当自定义用户组类型为**department**时，存在该值。
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * 用户组的关系。取值：
   * - **Equal**：等于。
   * - **Unequal**：不等于。
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * 用户组的类型。取值：
   * - **username**：用户名。
   * - **department**：部门。
   * - **email**：邮箱。
   * - **telephone**：手机。
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * 用户组属性的值。
   * - 当用户组类型为**username**时，表示用户名的值。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
   * - 当用户组类型为**department**时，表示部门的值。如：OU=部门1,OU=SASE钉钉。
   * - 当用户组类型为**email**时，表示邮箱的值。如：username@example.com。
   * - 当用户组类型为**telephone**时，表示手机的值。如：13900001234。
   * 
   * @example
   * OU=部门1,OU=SASE钉钉
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponseBodyTagsPolices extends $dara.Model {
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * 内网访问策略创建时间。
   * 
   * @example
   * 2023-02-21 14:10:16
   */
  createTime?: string;
  /**
   * @remarks
   * 自定义用户组属性集合。多个自定义用户组属性之间是或的关系，按照合集生效。
   */
  customUserAttributes?: ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes[];
  description?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * Normal
   */
  userGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupType: 'UserGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes },
      description: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponseBodyTags extends $dara.Model {
  polices?: ListPolicesForPrivateAccessTagResponseBodyTagsPolices[];
  /**
   * @example
   * tag-b927baf3e592****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessTagResponseBodyTagsPolices },
      tagId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupResponseBodyUserGroupsPolices extends $dara.Model {
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * pa-policy-ce2bf7236fab****
   */
  policyId?: string;
  /**
   * @example
   * PrivateAccess
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policyId: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupResponseBodyUserGroups extends $dara.Model {
  polices?: ListPolicesForUserGroupResponseBodyUserGroupsPolices[];
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPolicesForUserGroupResponseBodyUserGroupsPolices },
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints extends $dara.Model {
  /**
   * @example
   * 15325
   */
  average?: number;
  /**
   * @example
   * 2023-12-06 15:29:00
   */
  dateTime?: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      dateTime: 'DateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      dateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsResponseBodyTrafficData extends $dara.Model {
  datapoints?: ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints[];
  /**
   * @example
   * InternetTx
   */
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      metricName: 'MetricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: { 'type': 'array', 'itemType': ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints },
      metricName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datapoints)) {
      $dara.Model.validateArray(this.datapoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges extends $dara.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsResponseBodyApplications extends $dara.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  browserAccessStatus?: string;
  connectorIds?: string[];
  /**
   * @example
   * 2022-12-16 15:03:42
   */
  createTime?: string;
  description?: string;
  l7ProxyDomainAutomatic?: string;
  l7ProxyDomainCustom?: string;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  policyIds?: string[];
  portRanges?: ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      browserAccessStatus: 'BrowserAccessStatus',
      connectorIds: 'ConnectorIds',
      createTime: 'CreateTime',
      description: 'Description',
      l7ProxyDomainAutomatic: 'L7ProxyDomainAutomatic',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      name: 'Name',
      policyIds: 'PolicyIds',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      browserAccessStatus: 'string',
      connectorIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      l7ProxyDomainAutomatic: 'string',
      l7ProxyDomainCustom: 'string',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      portRanges: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.connectorIds)) {
      $dara.Model.validateArray(this.connectorIds);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplicationsPortRanges extends $dara.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplications extends $dara.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-7a9243dd02f4****
   */
  applicationId?: string;
  /**
   * @example
   * 2022-04-13 13:33:24
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * application_name
   */
  name?: string;
  portRanges?: ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplicationsPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      createTime: 'string',
      description: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutes extends $dara.Model {
  applications?: ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplications[];
  /**
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      dynamicRouteId: 'DynamicRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplications },
      dynamicRouteId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessPolicesResponseBodyPolices extends $dara.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2022-07-10 15:50:23
   */
  createTime?: string;
  customUserAttributes?: ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes[];
  description?: string;
  deviceAttributeAction?: string;
  deviceAttributeId?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  triggerTemplateId?: string;
  userGroupIds?: string[];
  /**
   * @example
   * Normal
   */
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      deviceAttributeAction: 'DeviceAttributeAction',
      deviceAttributeId: 'DeviceAttributeId',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      tagIds: 'TagIds',
      triggerTemplateId: 'TriggerTemplateId',
      userGroupIds: 'UserGroupIds',
      userGroupMode: 'UserGroupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      triggerTemplateId: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The IDs of the internal access applications.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The time when the internal access tag was created.
   * 
   * @example
   * 2022-10-10 11:39:34
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the internal access tag.
   */
  description?: string;
  /**
   * @remarks
   * The name of the internal access tag.
   * 
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the internal access policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the internal access tag.
   * 
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @remarks
   * The type of the internal access tag. Valid values:
   * 
   * *   **Default**
   * *   **Custom**
   * 
   * @example
   * Default
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      policyIds: 'PolicyIds',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      tagId: 'string',
      tagType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutesTags extends $dara.Model {
  /**
   * @example
   * 2022-10-23 14:02:56
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @example
   * Custom
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      tagId: 'string',
      tagType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutes extends $dara.Model {
  /**
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  tags?: ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutesTags[];
  static names(): { [key: string]: string } {
    return {
      dynamicRouteId: 'DynamicRouteId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteId: 'string',
      tags: { 'type': 'array', 'itemType': ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount extends $dara.Model {
  /**
   * @example
   * 3
   */
  all?: number;
  /**
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @example
   * 0
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBodyPoliciesLimitDetail extends $dara.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount;
  /**
   * @example
   * LimitAll
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  validate() {
    if(this.limitCount && typeof (this.limitCount as any).validate === 'function') {
      (this.limitCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetail[];
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': ListRegistrationPoliciesResponseBodyPoliciesLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.limitDetail)) {
      $dara.Model.validateArray(this.limitDetail);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetailLimitCount extends $dara.Model {
  /**
   * @example
   * 3
   */
  all?: string;
  /**
   * @example
   * 0
   */
  mobile?: string;
  /**
   * @example
   * 0
   */
  PC?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'string',
      mobile: 'string',
      PC: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetail extends $dara.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetailLimitCount;
  /**
   * @example
   * LimitAll
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  validate() {
    if(this.limitCount && typeof (this.limitCount as any).validate === 'function') {
      (this.limitCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies extends $dara.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetail[];
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.limitDetail)) {
      $dara.Model.validateArray(this.limitDetail);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroups extends $dara.Model {
  policies?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies[];
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies },
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwareForUserDeviceResponseBodySoftware extends $dara.Model {
  /**
   * @example
   * Alibaba (China) Network Technology Co.,Ltd.
   */
  inc?: string;
  /**
   * @example
   * 2023-08-18 02:43:02
   */
  installTime?: string;
  name?: string;
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      inc: 'Inc',
      installTime: 'InstallTime',
      name: 'Name',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inc: 'string',
      installTime: 'string',
      name: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags extends $dara.Model {
  /**
   * @example
   * 2022-07-01 16:05:26
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @example
   * tag-c0cb77857a99****
   */
  tagId?: string;
  /**
   * @example
   * Default
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      tagId: 'string',
      tagType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessApplicationResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * pa-application-7a4445897856****
   */
  applicationId?: string;
  tags?: ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyResponseBodyPolicesTags extends $dara.Model {
  /**
   * @remarks
   * 内网访问标签创建时间。
   * 
   * @example
   * 2023-02-21 14:10:16
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @example
   * Default
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      tagId: 'string',
      tagType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyResponseBodyPolices extends $dara.Model {
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  tags?: ListTagsForPrivateAccessPolicyResponseBodyPolicesTags[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsForPrivateAccessPolicyResponseBodyPolicesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUninstallApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * uninstall-app-6646831ac314****
   */
  applicationId?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @example
   * Windows
   */
  devType?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  idpName?: string;
  /**
   * @example
   * false
   */
  isUninstall?: boolean;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  reason?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * Approved
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      department: 'Department',
      devTag: 'DevTag',
      devType: 'DevType',
      hostname: 'Hostname',
      idpName: 'IdpName',
      isUninstall: 'IsUninstall',
      mac: 'Mac',
      reason: 'Reason',
      saseUserId: 'SaseUserId',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      createTime: 'string',
      department: 'string',
      devTag: 'string',
      devType: 'string',
      hostname: 'string',
      idpName: 'string',
      isUninstall: 'boolean',
      mac: 'string',
      reason: 'string',
      saseUserId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserApplicationsResponseBodyApplicationsPortRanges extends $dara.Model {
  /**
   * @example
   * 80
   */
  begin?: string;
  /**
   * @example
   * 81
   */
  end?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'string',
      end: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * Block
   */
  action?: string;
  addresses?: string[];
  /**
   * @example
   * pa-application-b927baf3e592****
   */
  applicationId?: string;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  portRanges?: ListUserApplicationsResponseBodyApplicationsPortRanges[];
  /**
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListUserApplicationsResponseBodyApplicationsPortRanges },
      protocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDevicesResponseBodyDevicesNetInterfaceInfo extends $dara.Model {
  mac?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mac: 'Mac',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mac: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @example
   * Online
   */
  appStatus?: string;
  /**
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @example
   * Enabled
   */
  dlpStatus?: string;
  edrStatus?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * Enabled
   */
  iaStatus?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  innerIP?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @example
   * 16
   */
  memory?: string;
  /**
   * @example
   * Enabled
   */
  nacStatus?: string;
  netInterfaceInfo?: ListUserDevicesResponseBodyDevicesNetInterfaceInfo[];
  /**
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @example
   * 11.49.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      appVersion: 'AppVersion',
      CPU: 'CPU',
      createTime: 'CreateTime',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceModel: 'DeviceModel',
      deviceStatus: 'DeviceStatus',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      deviceVersion: 'DeviceVersion',
      disk: 'Disk',
      dlpStatus: 'DlpStatus',
      edrStatus: 'EdrStatus',
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      mac: 'Mac',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      netInterfaceInfo: 'NetInterfaceInfo',
      paStatus: 'PaStatus',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      srcIP: 'SrcIP',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      appVersion: 'string',
      CPU: 'string',
      createTime: 'string',
      department: 'string',
      deviceBelong: 'string',
      deviceModel: 'string',
      deviceStatus: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      deviceVersion: 'string',
      disk: 'string',
      dlpStatus: 'string',
      edrStatus: 'string',
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      memory: 'string',
      nacStatus: 'string',
      netInterfaceInfo: { 'type': 'array', 'itemType': ListUserDevicesResponseBodyDevicesNetInterfaceInfo },
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.netInterfaceInfo)) {
      $dara.Model.validateArray(this.netInterfaceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyUserGroupsAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyUserGroups extends $dara.Model {
  attributes?: ListUserGroupsResponseBodyUserGroupsAttributes[];
  /**
   * @example
   * 2022-10-10 11:39:22
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyUserGroupsAttributes },
      createTime: 'string',
      description: 'string',
      name: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups extends $dara.Model {
  attributes?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes[];
  /**
   * @remarks
   * 用户组创建时间。
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes },
      createTime: 'string',
      description: 'string',
      name: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolices extends $dara.Model {
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  userGroups?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups extends $dara.Model {
  attributes?: ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes[];
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes },
      createTime: 'string',
      description: 'string',
      name: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponseBodyPolicies extends $dara.Model {
  /**
   * @example
   * reg-policy-f25c9e5872e5****
   */
  policyId?: string;
  userGroups?: ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPrivateAccessPoliciesResponseBodyPolices extends $dara.Model {
  customUserAttributes?: ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes[];
  /**
   * @example
   * device_attribute_name
   */
  deviceAttributeName?: string;
  /**
   * @example
   * user_group_name
   */
  matchedUserGroup?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Custom
   */
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      customUserAttributes: 'CustomUserAttributes',
      deviceAttributeName: 'DeviceAttributeName',
      matchedUserGroup: 'MatchedUserGroup',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      userGroupMode: 'UserGroupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserAttributes: { 'type': 'array', 'itemType': ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes },
      deviceAttributeName: 'string',
      matchedUserGroup: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      userGroupMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $dara.Model {
  department?: string;
  /**
   * @example
   * a***@example.net
   */
  email?: string;
  idpName?: string;
  /**
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      email: 'Email',
      idpName: 'IdpName',
      phone: 'Phone',
      saseUserId: 'SaseUserId',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      email: 'string',
      idpName: 'string',
      phone: 'string',
      saseUserId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupWmInfoMappingResponseBodyData extends $dara.Model {
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  static names(): { [key: string]: string } {
    return {
      wmInfoBytesB64: 'WmInfoBytesB64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoBytesB64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemas extends $dara.Model {
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  appUninstallSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  deviceRegistrationSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  dlpSendSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  domainBlacklistSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  domainWhitelistSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  peripheralBlockSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  softwareBlockSchemaId?: string;
  static names(): { [key: string]: string } {
    return {
      appUninstallSchemaId: 'AppUninstallSchemaId',
      deviceRegistrationSchemaId: 'DeviceRegistrationSchemaId',
      dlpSendSchemaId: 'DlpSendSchemaId',
      domainBlacklistSchemaId: 'DomainBlacklistSchemaId',
      domainWhitelistSchemaId: 'DomainWhitelistSchemaId',
      peripheralBlockSchemaId: 'PeripheralBlockSchemaId',
      softwareBlockSchemaId: 'SoftwareBlockSchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUninstallSchemaId: 'string',
      deviceRegistrationSchemaId: 'string',
      dlpSendSchemaId: 'string',
      domainBlacklistSchemaId: 'string',
      domainWhitelistSchemaId: 'string',
      peripheralBlockSchemaId: 'string',
      softwareBlockSchemaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponseBodyProcessAppUninstallPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponseBodyProcessDlpSendPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponseBodyProcessDomainBlacklistPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponseBodyProcessDomainWhitelistPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponseBodyProcessPeripheraBlockPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponseBodyProcessProcessNodes extends $dara.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponseBodyProcessSoftwareBlockPolicies extends $dara.Model {
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponseBodyProcess extends $dara.Model {
  appUninstallPolicies?: UpdateApprovalProcessResponseBodyProcessAppUninstallPolicies;
  /**
   * @example
   * 2022-07-11 15:31:39
   */
  createTime?: string;
  description?: string;
  deviceRegistrationPolicies?: UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies;
  dlpSendPolicies?: UpdateApprovalProcessResponseBodyProcessDlpSendPolicies;
  domainBlacklistPolicies?: UpdateApprovalProcessResponseBodyProcessDomainBlacklistPolicies;
  domainWhitelistPolicies?: UpdateApprovalProcessResponseBodyProcessDomainWhitelistPolicies;
  peripheraBlockPolicies?: UpdateApprovalProcessResponseBodyProcessPeripheraBlockPolicies;
  /**
   * @example
   * approval-process-2677fcf063f5****
   */
  processId?: string;
  processName?: string;
  processNodes?: UpdateApprovalProcessResponseBodyProcessProcessNodes[][];
  softwareBlockPolicies?: UpdateApprovalProcessResponseBodyProcessSoftwareBlockPolicies;
  static names(): { [key: string]: string } {
    return {
      appUninstallPolicies: 'AppUninstallPolicies',
      createTime: 'CreateTime',
      description: 'Description',
      deviceRegistrationPolicies: 'DeviceRegistrationPolicies',
      dlpSendPolicies: 'DlpSendPolicies',
      domainBlacklistPolicies: 'DomainBlacklistPolicies',
      domainWhitelistPolicies: 'DomainWhitelistPolicies',
      peripheraBlockPolicies: 'PeripheraBlockPolicies',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
      softwareBlockPolicies: 'SoftwareBlockPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUninstallPolicies: UpdateApprovalProcessResponseBodyProcessAppUninstallPolicies,
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies,
      dlpSendPolicies: UpdateApprovalProcessResponseBodyProcessDlpSendPolicies,
      domainBlacklistPolicies: UpdateApprovalProcessResponseBodyProcessDomainBlacklistPolicies,
      domainWhitelistPolicies: UpdateApprovalProcessResponseBodyProcessDomainWhitelistPolicies,
      peripheraBlockPolicies: UpdateApprovalProcessResponseBodyProcessPeripheraBlockPolicies,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessProcessNodes } },
      softwareBlockPolicies: UpdateApprovalProcessResponseBodyProcessSoftwareBlockPolicies,
    };
  }

  validate() {
    if(this.appUninstallPolicies && typeof (this.appUninstallPolicies as any).validate === 'function') {
      (this.appUninstallPolicies as any).validate();
    }
    if(this.deviceRegistrationPolicies && typeof (this.deviceRegistrationPolicies as any).validate === 'function') {
      (this.deviceRegistrationPolicies as any).validate();
    }
    if(this.dlpSendPolicies && typeof (this.dlpSendPolicies as any).validate === 'function') {
      (this.dlpSendPolicies as any).validate();
    }
    if(this.domainBlacklistPolicies && typeof (this.domainBlacklistPolicies as any).validate === 'function') {
      (this.domainBlacklistPolicies as any).validate();
    }
    if(this.domainWhitelistPolicies && typeof (this.domainWhitelistPolicies as any).validate === 'function') {
      (this.domainWhitelistPolicies as any).validate();
    }
    if(this.peripheraBlockPolicies && typeof (this.peripheraBlockPolicies as any).validate === 'function') {
      (this.peripheraBlockPolicies as any).validate();
    }
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    if(this.softwareBlockPolicies && typeof (this.softwareBlockPolicies as any).validate === 'function') {
      (this.softwareBlockPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalStatusResponseBodyApprovalApprovalProgressesOperators extends $dara.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalStatusResponseBodyApprovalApprovalProgresses extends $dara.Model {
  /**
   * @example
   * Approve
   */
  action?: string;
  comment?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  executor?: string;
  operators?: UpdateApprovalStatusResponseBodyApprovalApprovalProgressesOperators[];
  /**
   * @example
   * Approved
   */
  status?: string;
  /**
   * @example
   * 1736752000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      comment: 'Comment',
      executor: 'Executor',
      operators: 'Operators',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      comment: 'string',
      executor: 'string',
      operators: { 'type': 'array', 'itemType': UpdateApprovalStatusResponseBodyApprovalApprovalProgressesOperators },
      status: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.operators)) {
      $dara.Model.validateArray(this.operators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalStatusResponseBodyApproval extends $dara.Model {
  approvalDetail?: string;
  /**
   * @example
   * approval-165e6738ad9d****
   */
  approvalId?: string;
  approvalProgresses?: UpdateApprovalStatusResponseBodyApprovalApprovalProgresses[];
  /**
   * @example
   * 2022-11-15 22:11:55
   */
  createTime?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  creatorDevTag?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  creatorUserId?: string;
  /**
   * @example
   * 1757952000
   */
  endTimestamp?: number;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  processName?: string;
  reason?: string;
  /**
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  schemaName?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      approvalDetail: 'ApprovalDetail',
      approvalId: 'ApprovalId',
      approvalProgresses: 'ApprovalProgresses',
      createTime: 'CreateTime',
      creatorDevTag: 'CreatorDevTag',
      creatorUserId: 'CreatorUserId',
      endTimestamp: 'EndTimestamp',
      policyType: 'PolicyType',
      processId: 'ProcessId',
      processName: 'ProcessName',
      reason: 'Reason',
      schemaContent: 'SchemaContent',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDetail: 'string',
      approvalId: 'string',
      approvalProgresses: { 'type': 'array', 'itemType': UpdateApprovalStatusResponseBodyApprovalApprovalProgresses },
      createTime: 'string',
      creatorDevTag: 'string',
      creatorUserId: 'string',
      endTimestamp: 'number',
      policyType: 'string',
      processId: 'string',
      processName: 'string',
      reason: 'string',
      schemaContent: 'string',
      schemaId: 'string',
      schemaName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approvalProgresses)) {
      $dara.Model.validateArray(this.approvalProgresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn extends $dara.Model {
  /**
   * @example
   * After uninstalling, the device can no longer be used for company work, and it will lose access to the company\\"s intranet!
   */
  content?: string;
  /**
   * @example
   * Report
   */
  mainButtonText?: string;
  /**
   * @example
   * Ignore
   */
  minorButtonText?: string;
  /**
   * @example
   * Anti-Uninstall Warning
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mainButtonText: 'MainButtonText',
      minorButtonText: 'MinorButtonText',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mainButtonText: 'string',
      minorButtonText: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextZh extends $dara.Model {
  content?: string;
  mainButtonText?: string;
  minorButtonText?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mainButtonText: 'MainButtonText',
      minorButtonText: 'MinorButtonText',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mainButtonText: 'string',
      minorButtonText: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyRequestBlockContent extends $dara.Model {
  blockTextEn?: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn;
  blockTextZh?: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextZh;
  static names(): { [key: string]: string } {
    return {
      blockTextEn: 'BlockTextEn',
      blockTextZh: 'BlockTextZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockTextEn: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn,
      blockTextZh: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextZh,
    };
  }

  validate() {
    if(this.blockTextEn && typeof (this.blockTextEn as any).validate === 'function') {
      (this.blockTextEn as any).validate();
    }
    if(this.blockTextZh && typeof (this.blockTextZh as any).validate === 'function') {
      (this.blockTextZh as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn extends $dara.Model {
  /**
   * @example
   * After uninstalling, the device can no longer be used for company work, and it will lose access to the company\\"s intranet!
   */
  content?: string;
  /**
   * @example
   * Report
   */
  mainButtonText?: string;
  /**
   * @example
   * Ignore
   */
  minorButtonText?: string;
  /**
   * @example
   * Anti-Uninstall Warning
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mainButtonText: 'MainButtonText',
      minorButtonText: 'MinorButtonText',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mainButtonText: 'string',
      minorButtonText: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh extends $dara.Model {
  content?: string;
  mainButtonText?: string;
  minorButtonText?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mainButtonText: 'MainButtonText',
      minorButtonText: 'MinorButtonText',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mainButtonText: 'string',
      minorButtonText: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent extends $dara.Model {
  blockTextEn?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn;
  blockTextZh?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh;
  static names(): { [key: string]: string } {
    return {
      blockTextEn: 'BlockTextEn',
      blockTextZh: 'BlockTextZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockTextEn: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn,
      blockTextZh: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh,
    };
  }

  validate() {
    if(this.blockTextEn && typeof (this.blockTextEn as any).validate === 'function') {
      (this.blockTextEn as any).validate();
    }
    if(this.blockTextZh && typeof (this.blockTextZh as any).validate === 'function') {
      (this.blockTextZh as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyResponseBodyStrategy extends $dara.Model {
  /**
   * @example
   * true
   */
  allowReport?: boolean;
  blockContent?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent;
  /**
   * @example
   * 2023-04-16 10:50:05
   */
  createTime?: string;
  /**
   * @example
   * true
   */
  isAntiUninstall?: boolean;
  /**
   * @example
   * true
   */
  isBoot?: boolean;
  /**
   * @example
   * auto-boot-anti-uninstall-6f6cbf5f6605****
   */
  policyId?: string;
  /**
   * @example
   * approval-process-65c255598826****
   */
  reportProcessId?: string;
  /**
   * @example
   * 2024-06-14 10:17:14
   */
  updateTime?: string;
  userGroupIds?: string[];
  whitelistUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      allowReport: 'AllowReport',
      blockContent: 'BlockContent',
      createTime: 'CreateTime',
      isAntiUninstall: 'IsAntiUninstall',
      isBoot: 'IsBoot',
      policyId: 'PolicyId',
      reportProcessId: 'ReportProcessId',
      updateTime: 'UpdateTime',
      userGroupIds: 'UserGroupIds',
      whitelistUsers: 'WhitelistUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowReport: 'boolean',
      blockContent: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent,
      createTime: 'string',
      isAntiUninstall: 'boolean',
      isBoot: 'boolean',
      policyId: 'string',
      reportProcessId: 'string',
      updateTime: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelistUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.blockContent && typeof (this.blockContent as any).validate === 'function') {
      (this.blockContent as any).validate();
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelistUsers)) {
      $dara.Model.validateArray(this.whitelistUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * reg-application-0f4a127b7e78****
   */
  applicationId?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  description?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * false
   */
  isUsed?: boolean;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * Approved
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      department: 'Department',
      description: 'Description',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      hostname: 'Hostname',
      isUsed: 'IsUsed',
      mac: 'Mac',
      saseUserId: 'SaseUserId',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      createTime: 'string',
      department: 'string',
      description: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      hostname: 'string',
      isUsed: 'boolean',
      mac: 'string',
      saseUserId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacUserCertStatusRequestIdList extends $dara.Model {
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      devTag: 'DevTag',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTag: 'string',
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

export class UpdatePrivateAccessApplicationRequestPortRanges extends $dara.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessPolicyRequestCustomUserAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyRequestCompanyLimitCount extends $dara.Model {
  /**
   * @example
   * 1
   */
  all?: number;
  /**
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @example
   * 0
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyRequestPersonalLimitCount extends $dara.Model {
  /**
   * @example
   * 0
   */
  all?: number;
  /**
   * @example
   * 1
   */
  mobile?: number;
  /**
   * @example
   * 2
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount extends $dara.Model {
  /**
   * @example
   * 1
   */
  all?: number;
  /**
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @example
   * 0
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyResponseBodyPolicyLimitDetail extends $dara.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount;
  /**
   * @example
   * LimitAll
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  validate() {
    if(this.limitCount && typeof (this.limitCount as any).validate === 'function') {
      (this.limitCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: UpdateRegistrationPolicyResponseBodyPolicyLimitDetail[];
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': UpdateRegistrationPolicyResponseBodyPolicyLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'string',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.limitDetail)) {
      $dara.Model.validateArray(this.limitDetail);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUninstallApplicationsStatusResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * uninstall-app-6646831ac314****
   */
  applicationId?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @example
   * Windows
   */
  devType?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  idpName?: string;
  /**
   * @example
   * false
   */
  isUninstall?: boolean;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  reason?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * Approved
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      department: 'Department',
      devTag: 'DevTag',
      devType: 'DevType',
      hostname: 'Hostname',
      idpName: 'IdpName',
      isUninstall: 'IsUninstall',
      mac: 'Mac',
      reason: 'Reason',
      saseUserId: 'SaseUserId',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      createTime: 'string',
      department: 'string',
      devTag: 'string',
      devType: 'string',
      hostname: 'string',
      idpName: 'string',
      isUninstall: 'boolean',
      mac: 'string',
      reason: 'string',
      saseUserId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesSharingStatusResponseBodyDevicesNetInterfaceInfo extends $dara.Model {
  mac?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mac: 'Mac',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mac: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesSharingStatusResponseBodyDevices extends $dara.Model {
  /**
   * @example
   * Online
   */
  appStatus?: string;
  /**
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @example
   * Enabled
   */
  dlpStatus?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * Enabled
   */
  iaStatus?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  innerIP?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @example
   * 16
   */
  memory?: string;
  /**
   * @example
   * Enabled
   */
  nacStatus?: string;
  netInterfaceInfo?: UpdateUserDevicesSharingStatusResponseBodyDevicesNetInterfaceInfo[];
  /**
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @example
   * 11.49.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      appVersion: 'AppVersion',
      CPU: 'CPU',
      createTime: 'CreateTime',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceModel: 'DeviceModel',
      deviceStatus: 'DeviceStatus',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      deviceVersion: 'DeviceVersion',
      disk: 'Disk',
      dlpStatus: 'DlpStatus',
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      mac: 'Mac',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      netInterfaceInfo: 'NetInterfaceInfo',
      paStatus: 'PaStatus',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      srcIP: 'SrcIP',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      appVersion: 'string',
      CPU: 'string',
      createTime: 'string',
      department: 'string',
      deviceBelong: 'string',
      deviceModel: 'string',
      deviceStatus: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      deviceVersion: 'string',
      disk: 'string',
      dlpStatus: 'string',
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      memory: 'string',
      nacStatus: 'string',
      netInterfaceInfo: { 'type': 'array', 'itemType': UpdateUserDevicesSharingStatusResponseBodyDevicesNetInterfaceInfo },
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.netInterfaceInfo)) {
      $dara.Model.validateArray(this.netInterfaceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesStatusResponseBodyDevicesNetInterfaceInfo extends $dara.Model {
  mac?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mac: 'Mac',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mac: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesStatusResponseBodyDevices extends $dara.Model {
  /**
   * @example
   * Online
   */
  appStatus?: string;
  /**
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @example
   * Enabled
   */
  dlpStatus?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * Enabled
   */
  iaStatus?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  innerIP?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @example
   * 16
   */
  memory?: string;
  /**
   * @example
   * Enabled
   */
  nacStatus?: string;
  netInterfaceInfo?: UpdateUserDevicesStatusResponseBodyDevicesNetInterfaceInfo[];
  /**
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @example
   * 11.49.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      appVersion: 'AppVersion',
      CPU: 'CPU',
      createTime: 'CreateTime',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceModel: 'DeviceModel',
      deviceStatus: 'DeviceStatus',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      deviceVersion: 'DeviceVersion',
      disk: 'Disk',
      dlpStatus: 'DlpStatus',
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      mac: 'Mac',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      netInterfaceInfo: 'NetInterfaceInfo',
      paStatus: 'PaStatus',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      srcIP: 'SrcIP',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      appVersion: 'string',
      CPU: 'string',
      createTime: 'string',
      department: 'string',
      deviceBelong: 'string',
      deviceModel: 'string',
      deviceStatus: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      deviceVersion: 'string',
      disk: 'string',
      dlpStatus: 'string',
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      memory: 'string',
      nacStatus: 'string',
      netInterfaceInfo: { 'type': 'array', 'itemType': UpdateUserDevicesStatusResponseBodyDevicesNetInterfaceInfo },
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.netInterfaceInfo)) {
      $dara.Model.validateArray(this.netInterfaceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequestAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthReportInterval extends $dara.Model {
  timeUnit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timeUnit: 'TimeUnit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeUnit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposalContent extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  alertContent?: string;
  /**
   * **if can be null:**
   * true
   */
  alertTitle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * true
   */
  notifyActions?: string[];
  prohibitActions?: string[];
  static names(): { [key: string]: string } {
    return {
      alertContent: 'AlertContent',
      alertTitle: 'AlertTitle',
      notifyActions: 'NotifyActions',
      prohibitActions: 'ProhibitActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContent: 'string',
      alertTitle: 'string',
      notifyActions: { 'type': 'array', 'itemType': 'string' },
      prohibitActions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.notifyActions)) {
      $dara.Model.validateArray(this.notifyActions);
    }
    if(Array.isArray(this.prohibitActions)) {
      $dara.Model.validateArray(this.prohibitActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryContent extends $dara.Model {
  authReportInterval?: AuthReportInterval;
  /**
   * @remarks
   * This parameter is required.
   */
  recoveryActions?: string[];
  static names(): { [key: string]: string } {
    return {
      authReportInterval: 'AuthReportInterval',
      recoveryActions: 'RecoveryActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authReportInterval: AuthReportInterval,
      recoveryActions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.authReportInterval && typeof (this.authReportInterval as any).validate === 'function') {
      (this.authReportInterval as any).validate();
    }
    if(Array.isArray(this.recoveryActions)) {
      $dara.Model.validateArray(this.recoveryActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Rule extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  combinator?: string;
  id?: string;
  /**
   * **if can be null:**
   * true
   */
  name?: string;
  /**
   * **if can be null:**
   * true
   */
  operator?: string;
  /**
   * **if can be null:**
   * true
   */
  ruleSubType?: string;
  /**
   * **if can be null:**
   * true
   */
  ruleType?: string;
  rules?: Rule[];
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      combinator: 'Combinator',
      id: 'Id',
      name: 'Name',
      operator: 'Operator',
      ruleSubType: 'RuleSubType',
      ruleType: 'RuleType',
      rules: 'Rules',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combinator: 'string',
      id: 'string',
      name: 'string',
      operator: 'string',
      ruleSubType: 'string',
      ruleType: 'string',
      rules: { 'type': 'array', 'itemType': Rule },
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachApplication2ConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * ConnectorID。
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      connectorId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachApplication2ConnectorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIdsShrink?: string;
  /**
   * @remarks
   * ConnectorID。
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIdsShrink: 'ApplicationIds',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIdsShrink: 'string',
      connectorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachApplication2ConnectorResponseBody extends $dara.Model {
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachApplication2ConnectorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachApplication2ConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachApplication2ConnectorResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicy2ApprovalProcessRequest extends $dara.Model {
  /**
   * @example
   * ladp-27a4fedf5e73****
   */
  policyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-process-2677fcf063f5****
   */
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyType: 'PolicyType',
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      policyType: 'string',
      processId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicy2ApprovalProcessResponseBody extends $dara.Model {
  /**
   * @example
   * C51D9340-4604-5331-AE62-407F3B408F86
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicy2ApprovalProcessResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachPolicy2ApprovalProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachPolicy2ApprovalProcessResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessRequest extends $dara.Model {
  description?: string;
  matchSchemas?: CreateApprovalProcessRequestMatchSchemas;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_process
   */
  processName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  processNodes?: string[][];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      matchSchemas: 'MatchSchemas',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      matchSchemas: CreateApprovalProcessRequestMatchSchemas,
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(this.matchSchemas && typeof (this.matchSchemas as any).validate === 'function') {
      (this.matchSchemas as any).validate();
    }
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessShrinkRequest extends $dara.Model {
  description?: string;
  matchSchemasShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_process
   */
  processName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  processNodes?: string[][];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      matchSchemasShrink: 'MatchSchemas',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      matchSchemasShrink: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponseBody extends $dara.Model {
  process?: CreateApprovalProcessResponseBodyProcess;
  /**
   * @example
   * 2CABFEBB-0CE7-575E-833A-266F75D46713
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: CreateApprovalProcessResponseBodyProcess,
      requestId: 'string',
    };
  }

  validate() {
    if(this.process && typeof (this.process as any).validate === 'function') {
      (this.process as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApprovalProcessResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApprovalProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApprovalProcessResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientUserRequest extends $dara.Model {
  /**
   * @example
   * 10797
   */
  departmentId?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 727
   */
  idpConfigId?: string;
  /**
   * @example
   * 13641966835
   */
  mobileNumber?: string;
  /**
   * @example
   * kehudiyi
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      description: 'string',
      email: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientUserResponseBody extends $dara.Model {
  /**
   * @example
   * 726
   */
  data?: string;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClientUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicRouteRequest extends $dara.Model {
  applicationIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Disabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      description: 'Description',
      dynamicRouteType: 'DynamicRouteType',
      name: 'Name',
      nextHop: 'NextHop',
      priority: 'Priority',
      regionIds: 'RegionIds',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      description: 'string',
      dynamicRouteType: 'string',
      name: 'string',
      nextHop: 'string',
      priority: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicRouteResponseBody extends $dara.Model {
  /**
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRouteId: 'DynamicRouteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicRouteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDynamicRouteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdpDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  departmentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1222
   */
  idpConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      idpConfigId: 'IdpConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      idpConfigId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdpDepartmentResponseBody extends $dara.Model {
  /**
   * @example
   * 726
   */
  data?: string;
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdpDepartmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIdpDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIdpDepartmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addresses?: string[];
  browserAccessStatus?: string;
  description?: string;
  l7ProxyDomainAutomaticPrefix?: string;
  l7ProxyDomainCustom?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  portRanges?: CreatePrivateAccessApplicationRequestPortRanges[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * All
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      browserAccessStatus: 'BrowserAccessStatus',
      description: 'Description',
      l7ProxyDomainAutomaticPrefix: 'L7ProxyDomainAutomaticPrefix',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      browserAccessStatus: 'string',
      description: 'string',
      l7ProxyDomainAutomaticPrefix: 'string',
      l7ProxyDomainCustom: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': CreatePrivateAccessApplicationRequestPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessApplicationResponseBody extends $dara.Model {
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePrivateAccessApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessPolicyRequest extends $dara.Model {
  applicationIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  customUserAttributes?: CreatePrivateAccessPolicyRequestCustomUserAttributes[];
  description?: string;
  deviceAttributeAction?: string;
  deviceAttributeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * 内网访问标签ID集合。最多可输入100个内网访问标签ID。当**ApplicationType**为**Tag时**，必填。和**ApplicationIds**互斥。
   */
  tagIds?: string[];
  triggerTemplateId?: string;
  userGroupIds?: string[];
  /**
   * @remarks
   * 内网访问策略的用户组类型。取值：
   * - **Normal**：普通用户组。
   * - **Custom**：自定义用户组。
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      deviceAttributeAction: 'DeviceAttributeAction',
      deviceAttributeId: 'DeviceAttributeId',
      name: 'Name',
      policyAction: 'PolicyAction',
      priority: 'Priority',
      status: 'Status',
      tagIds: 'TagIds',
      triggerTemplateId: 'TriggerTemplateId',
      userGroupIds: 'UserGroupIds',
      userGroupMode: 'UserGroupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': CreatePrivateAccessPolicyRequestCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
      name: 'string',
      policyAction: 'string',
      priority: 'number',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      triggerTemplateId: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  /**
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePrivateAccessPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessTagRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tag_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessTagResponseBody extends $dara.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePrivateAccessTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePrivateAccessTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyRequest extends $dara.Model {
  companyLimitCount?: CreateRegistrationPolicyRequestCompanyLimitCount;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registration_policy_name
   */
  name?: string;
  personalLimitCount?: CreateRegistrationPolicyRequestPersonalLimitCount;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      companyLimitCount: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCount: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCount: CreateRegistrationPolicyRequestCompanyLimitCount,
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCount: CreateRegistrationPolicyRequestPersonalLimitCount,
      personalLimitType: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.companyLimitCount && typeof (this.companyLimitCount as any).validate === 'function') {
      (this.companyLimitCount as any).validate();
    }
    if(this.personalLimitCount && typeof (this.personalLimitCount as any).validate === 'function') {
      (this.personalLimitCount as any).validate();
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyShrinkRequest extends $dara.Model {
  companyLimitCountShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registration_policy_name
   */
  name?: string;
  personalLimitCountShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      companyLimitCountShrink: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCountShrink: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCountShrink: 'string',
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCountShrink: 'string',
      personalLimitType: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyResponseBody extends $dara.Model {
  policy?: CreateRegistrationPolicyResponseBodyPolicy;
  /**
   * @example
   * FEF1144C-95D1-5F7C-81EF-9DB70EA49FCE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: CreateRegistrationPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRegistrationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRegistrationPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: CreateUserGroupRequestAttributes[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_group_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': CreateUserGroupRequestAttributes },
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmBaseImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scale?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1920
   */
  width?: number;
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 12*****
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureWebappInvisible
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      opacity: 'Opacity',
      scale: 'Scale',
      width: 'Width',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      opacity: 'number',
      scale: 'number',
      width: 'number',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmBaseImageResponseBody extends $dara.Model {
  data?: CreateWmBaseImageResponseBodyData;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateWmBaseImageResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmBaseImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWmBaseImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWmBaseImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequest extends $dara.Model {
  csvControl?: CreateWmEmbedTaskRequestCsvControl;
  documentControl?: CreateWmEmbedTaskRequestDocumentControl;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/abc****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc****.pdf
   */
  filename?: string;
  /**
   * @example
   * 95
   */
  imageEmbedJpegQuality?: number;
  /**
   * @example
   * 2
   */
  imageEmbedLevel?: number;
  /**
   * @example
   * 3000k
   */
  videoBitrate?: string;
  /**
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      csvControl: 'CsvControl',
      documentControl: 'DocumentControl',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      imageEmbedJpegQuality: 'ImageEmbedJpegQuality',
      imageEmbedLevel: 'ImageEmbedLevel',
      videoBitrate: 'VideoBitrate',
      videoIsLong: 'VideoIsLong',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csvControl: CreateWmEmbedTaskRequestCsvControl,
      documentControl: CreateWmEmbedTaskRequestDocumentControl,
      fileUrl: 'string',
      filename: 'string',
      imageEmbedJpegQuality: 'number',
      imageEmbedLevel: 'number',
      videoBitrate: 'string',
      videoIsLong: 'boolean',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  validate() {
    if(this.csvControl && typeof (this.csvControl as any).validate === 'function') {
      (this.csvControl as any).validate();
    }
    if(this.documentControl && typeof (this.documentControl as any).validate === 'function') {
      (this.documentControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskShrinkRequest extends $dara.Model {
  csvControlShrink?: string;
  documentControlShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/abc****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc****.pdf
   */
  filename?: string;
  /**
   * @example
   * 95
   */
  imageEmbedJpegQuality?: number;
  /**
   * @example
   * 2
   */
  imageEmbedLevel?: number;
  /**
   * @example
   * 3000k
   */
  videoBitrate?: string;
  /**
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      csvControlShrink: 'CsvControl',
      documentControlShrink: 'DocumentControl',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      imageEmbedJpegQuality: 'ImageEmbedJpegQuality',
      imageEmbedLevel: 'ImageEmbedLevel',
      videoBitrate: 'VideoBitrate',
      videoIsLong: 'VideoIsLong',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csvControlShrink: 'string',
      documentControlShrink: 'string',
      fileUrl: 'string',
      filename: 'string',
      imageEmbedJpegQuality: 'number',
      imageEmbedLevel: 'number',
      videoBitrate: 'string',
      videoIsLong: 'boolean',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskResponseBody extends $dara.Model {
  data?: CreateWmEmbedTaskResponseBodyData;
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateWmEmbedTaskResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWmEmbedTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWmEmbedTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskRequest extends $dara.Model {
  csvControl?: CreateWmExtractTaskRequestCsvControl;
  /**
   * @example
   * false
   */
  documentIsCapture?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/test-****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-****.pdf
   */
  filename?: string;
  /**
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @example
   * 1
   */
  videoSpeed?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      csvControl: 'CsvControl',
      documentIsCapture: 'DocumentIsCapture',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      videoIsLong: 'VideoIsLong',
      videoSpeed: 'VideoSpeed',
      wmInfoSize: 'WmInfoSize',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csvControl: CreateWmExtractTaskRequestCsvControl,
      documentIsCapture: 'boolean',
      fileUrl: 'string',
      filename: 'string',
      videoIsLong: 'boolean',
      videoSpeed: 'string',
      wmInfoSize: 'number',
      wmType: 'string',
    };
  }

  validate() {
    if(this.csvControl && typeof (this.csvControl as any).validate === 'function') {
      (this.csvControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskShrinkRequest extends $dara.Model {
  csvControlShrink?: string;
  /**
   * @example
   * false
   */
  documentIsCapture?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/test-****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-****.pdf
   */
  filename?: string;
  /**
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @example
   * 1
   */
  videoSpeed?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      csvControlShrink: 'CsvControl',
      documentIsCapture: 'DocumentIsCapture',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      videoIsLong: 'VideoIsLong',
      videoSpeed: 'VideoSpeed',
      wmInfoSize: 'WmInfoSize',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csvControlShrink: 'string',
      documentIsCapture: 'boolean',
      fileUrl: 'string',
      filename: 'string',
      videoIsLong: 'boolean',
      videoSpeed: 'string',
      wmInfoSize: 'number',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskResponseBody extends $dara.Model {
  data?: CreateWmExtractTaskResponseBodyData;
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateWmExtractTaskResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWmExtractTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWmExtractTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmInfoMappingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmInfoMappingResponseBody extends $dara.Model {
  data?: CreateWmInfoMappingResponseBodyData;
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateWmInfoMappingResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmInfoMappingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWmInfoMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWmInfoMappingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApprovalProcessesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  processIds?: string[];
  static names(): { [key: string]: string } {
    return {
      processIds: 'ProcessIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.processIds)) {
      $dara.Model.validateArray(this.processIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApprovalProcessesResponseBody extends $dara.Model {
  /**
   * @example
   * B608C6AE-623D-55C4-9454-601B88AE937E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApprovalProcessesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApprovalProcessesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApprovalProcessesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientUserRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27058
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientUserResponseBody extends $dara.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClientUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicRouteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRouteId: 'DynamicRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicRouteResponseBody extends $dara.Model {
  /**
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicRouteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDynamicRouteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdpDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10829
   */
  departmentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 507
   */
  idpConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      idpConfigId: 'IdpConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      idpConfigId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdpDepartmentResponseBody extends $dara.Model {
  /**
   * @example
   * FEF1144C-95D1-5F7C-81EF-9DB70EA49FCE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdpDepartmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIdpDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIdpDepartmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessApplicationResponseBody extends $dara.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePrivateAccessApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePrivateAccessPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessTagResponseBody extends $dara.Model {
  /**
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePrivateAccessTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePrivateAccessTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRegistrationPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRegistrationPoliciesResponseBody extends $dara.Model {
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRegistrationPoliciesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRegistrationPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRegistrationPoliciesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDevicesRequest extends $dara.Model {
  deviceTags?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceTags: 'DeviceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deviceTags)) {
      $dara.Model.validateArray(this.deviceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserDevicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachApplication2ConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * ConnectorID。
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      connectorId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachApplication2ConnectorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIdsShrink?: string;
  /**
   * @remarks
   * ConnectorID。
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIdsShrink: 'ApplicationIds',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIdsShrink: 'string',
      connectorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachApplication2ConnectorResponseBody extends $dara.Model {
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachApplication2ConnectorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachApplication2ConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachApplication2ConnectorResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicy2ApprovalProcessRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ladp-27a4fedf5e73****
   */
  policyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PeripheralBlock
   */
  policyType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-process-2677fcf063f5****
   */
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyType: 'PolicyType',
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      policyType: 'string',
      processId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicy2ApprovalProcessResponseBody extends $dara.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicy2ApprovalProcessResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachPolicy2ApprovalProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachPolicy2ApprovalProcessResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportUserDevicesRequest extends $dara.Model {
  appStatuses?: string[];
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  deviceStatuses?: string[];
  deviceTags?: string[];
  deviceTypes?: string[];
  dlpStatuses?: string[];
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  iaStatuses?: string[];
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  nacStatuses?: string[];
  paStatuses?: string[];
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatuses: 'AppStatuses',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceStatuses: 'DeviceStatuses',
      deviceTags: 'DeviceTags',
      deviceTypes: 'DeviceTypes',
      dlpStatuses: 'DlpStatuses',
      hostname: 'Hostname',
      iaStatuses: 'IaStatuses',
      mac: 'Mac',
      nacStatuses: 'NacStatuses',
      paStatuses: 'PaStatuses',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatuses: { 'type': 'array', 'itemType': 'string' },
      department: 'string',
      deviceBelong: 'string',
      deviceStatuses: { 'type': 'array', 'itemType': 'string' },
      deviceTags: { 'type': 'array', 'itemType': 'string' },
      deviceTypes: { 'type': 'array', 'itemType': 'string' },
      dlpStatuses: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      iaStatuses: { 'type': 'array', 'itemType': 'string' },
      mac: 'string',
      nacStatuses: { 'type': 'array', 'itemType': 'string' },
      paStatuses: { 'type': 'array', 'itemType': 'string' },
      saseUserId: 'string',
      sharingStatus: 'boolean',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appStatuses)) {
      $dara.Model.validateArray(this.appStatuses);
    }
    if(Array.isArray(this.deviceStatuses)) {
      $dara.Model.validateArray(this.deviceStatuses);
    }
    if(Array.isArray(this.deviceTags)) {
      $dara.Model.validateArray(this.deviceTags);
    }
    if(Array.isArray(this.deviceTypes)) {
      $dara.Model.validateArray(this.deviceTypes);
    }
    if(Array.isArray(this.dlpStatuses)) {
      $dara.Model.validateArray(this.dlpStatuses);
    }
    if(Array.isArray(this.iaStatuses)) {
      $dara.Model.validateArray(this.iaStatuses);
    }
    if(Array.isArray(this.nacStatuses)) {
      $dara.Model.validateArray(this.nacStatuses);
    }
    if(Array.isArray(this.paStatuses)) {
      $dara.Model.validateArray(this.paStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportUserDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  /**
   * @example
   * https://sase-export.oss-cn-hangzhou.aliyuncs.com/export%2Fapp-device%2F20240607154831.xlsx?Expires=1717746571&OSSAccessKeyId=********************
   */
  signedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signedUrl: 'SignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signedUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportUserDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportUserDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportUserDevicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActiveIdpConfigResponseBody extends $dara.Model {
  data?: GetActiveIdpConfigResponseBodyData;
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetActiveIdpConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActiveIdpConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetActiveIdpConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetActiveIdpConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-872b5e911b35****
   */
  approvalId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalResponseBody extends $dara.Model {
  approval?: GetApprovalResponseBodyApproval[];
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approval: 'Approval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approval: { 'type': 'array', 'itemType': GetApprovalResponseBodyApproval },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approval)) {
      $dara.Model.validateArray(this.approval);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApprovalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApprovalResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBody extends $dara.Model {
  process?: GetApprovalProcessResponseBodyProcess;
  /**
   * @example
   * C81E0B4B-AAEB-5FDD-B27E-3F5AF7EBD7EF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: GetApprovalProcessResponseBodyProcess,
      requestId: 'string',
    };
  }

  validate() {
    if(this.process && typeof (this.process as any).validate === 'function') {
      (this.process as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApprovalProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApprovalProcessResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalSchemaResponseBody extends $dara.Model {
  /**
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  schema?: GetApprovalSchemaResponseBodySchema;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schema: GetApprovalSchemaResponseBodySchema,
    };
  }

  validate() {
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalSchemaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApprovalSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApprovalSchemaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBootAndAntiUninstallPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * CB67D866-1E54-5106-89DF-6D70C73E5989
   */
  requestId?: string;
  strategy?: GetBootAndAntiUninstallPolicyResponseBodyStrategy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategy: GetBootAndAntiUninstallPolicyResponseBodyStrategy,
    };
  }

  validate() {
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBootAndAntiUninstallPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBootAndAntiUninstallPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBootAndAntiUninstallPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 598
   */
  idpConfigId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      idpConfigId: 'IdpConfigId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpConfigId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserResponseBody extends $dara.Model {
  data?: GetClientUserResponseBodyData;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetClientUserResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClientUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicRouteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dr-16ff07c8207d****
   */
  dynamicRouteId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRouteId: 'DynamicRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicRouteResponseBody extends $dara.Model {
  dynamicRoute?: GetDynamicRouteResponseBodyDynamicRoute;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRoute: 'DynamicRoute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoute: GetDynamicRouteResponseBodyDynamicRoute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dynamicRoute && typeof (this.dynamicRoute as any).validate === 'function') {
      (this.dynamicRoute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicRouteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDynamicRouteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdpConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1465
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdpConfigResponseBody extends $dara.Model {
  data?: GetIdpConfigResponseBodyData;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetIdpConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdpConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIdpConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIdpConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessApplicationResponseBody extends $dara.Model {
  application?: GetPrivateAccessApplicationResponseBodyApplication;
  /**
   * @example
   * 3ACC5EDC-2B7D-5032-8C58-D7615D66C1D4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetPrivateAccessApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  validate() {
    if(this.application && typeof (this.application as any).validate === 'function') {
      (this.application as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPrivateAccessApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessPolicyResponseBody extends $dara.Model {
  policy?: GetPrivateAccessPolicyResponseBodyPolicy;
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetPrivateAccessPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPrivateAccessPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistrationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistrationPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: GetRegistrationPolicyResponseBodyLimitDetail[];
  /**
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @example
   * 99
   */
  priority?: number;
  /**
   * @example
   * 47363C2B-1AAA-5954-8847-0E50FCC54117
   */
  requestId?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      requestId: 'RequestId',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': GetRegistrationPolicyResponseBodyLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'number',
      requestId: 'string',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.limitDetail)) {
      $dara.Model.validateArray(this.limitDetail);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistrationPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRegistrationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRegistrationPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  static names(): { [key: string]: string } {
    return {
      deviceTag: 'DeviceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponseBody extends $dara.Model {
  device?: GetUserDeviceResponseBodyDevice;
  /**
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: GetUserDeviceResponseBodyDevice,
      requestId: 'string',
    };
  }

  validate() {
    if(this.device && typeof (this.device as any).validate === 'function') {
      (this.device as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 1310DBC7-7E1F-55D3-B4B4-E4BE912517FB
   */
  requestId?: string;
  userGroup?: GetUserGroupResponseBodyUserGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroup: GetUserGroupResponseBodyUserGroup,
    };
  }

  validate() {
    if(this.userGroup && typeof (this.userGroup as any).validate === 'function') {
      (this.userGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmEmbedTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job:5GfrJYsoaffmCE7Z5bZtjU********
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmEmbedTaskResponseBody extends $dara.Model {
  data?: GetWmEmbedTaskResponseBodyData;
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWmEmbedTaskResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmEmbedTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWmEmbedTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWmEmbedTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmExtractTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wmt-9648c22d2eb2cb57bb855dcae7898464********
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmExtractTaskResponseBody extends $dara.Model {
  data?: GetWmExtractTaskResponseBodyData;
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWmExtractTaskResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmExtractTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWmExtractTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWmExtractTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBody extends $dara.Model {
  polices?: ListApplicationsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsForPrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsForPrivateAccessPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBody extends $dara.Model {
  /**
   * @example
   * B608C6AE-623D-55C4-9454-601B88AE937E
   */
  requestId?: string;
  tags?: ListApplicationsForPrivateAccessTagResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessTagResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsForPrivateAccessTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsForPrivateAccessTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * pid-6d6ad77d5b52****
   */
  policyId?: string;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  processIds?: string[];
  /**
   * @example
   * test
   */
  processName?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
      processIds: 'ProcessIds',
      processName: 'ProcessName',
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      policyId: 'string',
      policyType: 'string',
      processIds: { 'type': 'array', 'itemType': 'string' },
      processName: 'string',
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processIds)) {
      $dara.Model.validateArray(this.processIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBody extends $dara.Model {
  processes?: ListApprovalProcessesResponseBodyProcesses[];
  /**
   * @example
   * 7E39C33B-F565-55C6-ACC2-953FCE7DA7D6
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      processes: 'Processes',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processes: { 'type': 'array', 'itemType': ListApprovalProcessesResponseBodyProcesses },
      requestId: 'string',
      totalNum: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processes)) {
      $dara.Model.validateArray(this.processes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApprovalProcessesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApprovalProcessesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesForApprovalSchemasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  schemaIds?: string[];
  static names(): { [key: string]: string } {
    return {
      schemaIds: 'SchemaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.schemaIds)) {
      $dara.Model.validateArray(this.schemaIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesForApprovalSchemasResponseBody extends $dara.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  schemas?: ListApprovalProcessesForApprovalSchemasResponseBodySchemas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': ListApprovalProcessesForApprovalSchemasResponseBodySchemas },
    };
  }

  validate() {
    if(Array.isArray(this.schemas)) {
      $dara.Model.validateArray(this.schemas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesForApprovalSchemasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApprovalProcessesForApprovalSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApprovalProcessesForApprovalSchemasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalSchemasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  schemaIds?: string[];
  /**
   * @example
   * test
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
      schemaIds: 'SchemaIds',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      policyType: 'string',
      schemaIds: { 'type': 'array', 'itemType': 'string' },
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.schemaIds)) {
      $dara.Model.validateArray(this.schemaIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalSchemasResponseBody extends $dara.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  schemas?: ListApprovalSchemasResponseBodySchemas[];
  /**
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schemas: 'Schemas',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': ListApprovalSchemasResponseBodySchemas },
      totalNum: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.schemas)) {
      $dara.Model.validateArray(this.schemas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalSchemasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApprovalSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApprovalSchemasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalSchemasForApprovalProcessesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  processIds?: string[];
  static names(): { [key: string]: string } {
    return {
      processIds: 'ProcessIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.processIds)) {
      $dara.Model.validateArray(this.processIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalSchemasForApprovalProcessesResponseBody extends $dara.Model {
  processes?: ListApprovalSchemasForApprovalProcessesResponseBodyProcesses[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      processes: 'Processes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processes: { 'type': 'array', 'itemType': ListApprovalSchemasForApprovalProcessesResponseBodyProcesses },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processes)) {
      $dara.Model.validateArray(this.processes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalSchemasForApprovalProcessesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApprovalSchemasForApprovalProcessesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApprovalSchemasForApprovalProcessesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalsRequest extends $dara.Model {
  approvalIds?: string[];
  /**
   * @example
   * 1736750500
   */
  createEndTime?: number;
  /**
   * @example
   * 1730000000
   */
  createStartTime?: number;
  creatorDepartment?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  creatorDevTag?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  creatorUserId?: string;
  creatorUsername?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  operatorUserId?: string;
  operatorUsername?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  processName?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  /**
   * @example
   * test
   */
  schemaName?: string;
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      approvalIds: 'ApprovalIds',
      createEndTime: 'CreateEndTime',
      createStartTime: 'CreateStartTime',
      creatorDepartment: 'CreatorDepartment',
      creatorDevTag: 'CreatorDevTag',
      creatorUserId: 'CreatorUserId',
      creatorUsername: 'CreatorUsername',
      currentPage: 'CurrentPage',
      operatorUserId: 'OperatorUserId',
      operatorUsername: 'OperatorUsername',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
      processId: 'ProcessId',
      processName: 'ProcessName',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalIds: { 'type': 'array', 'itemType': 'string' },
      createEndTime: 'number',
      createStartTime: 'number',
      creatorDepartment: 'string',
      creatorDevTag: 'string',
      creatorUserId: 'string',
      creatorUsername: 'string',
      currentPage: 'number',
      operatorUserId: 'string',
      operatorUsername: 'string',
      pageSize: 'number',
      policyType: 'string',
      processId: 'string',
      processName: 'string',
      schemaId: 'string',
      schemaName: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.approvalIds)) {
      $dara.Model.validateArray(this.approvalIds);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalsResponseBody extends $dara.Model {
  approvals?: ListApprovalsResponseBodyApprovals[];
  /**
   * @example
   * 6965F5BA-53B6-5650-A708-51F090F843BB
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      approvals: 'Approvals',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvals: { 'type': 'array', 'itemType': ListApprovalsResponseBodyApprovals },
      requestId: 'string',
      totalNum: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approvals)) {
      $dara.Model.validateArray(this.approvals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApprovalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApprovalsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10785
   */
  departmentId?: string;
  /**
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1071
   */
  idpConfigId?: string;
  /**
   * @example
   * 18980976559
   */
  mobileNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      email: 'Email',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      pageSize: 'PageSize',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      departmentId: 'string',
      email: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      pageSize: 'number',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponseBody extends $dara.Model {
  data?: ListClientUsersResponseBodyData;
  /**
   * @example
   * FEF1144C-95D1-5F7C-81EF-9DB70EA49FCE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListClientUsersResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClientUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClientUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsRequest extends $dara.Model {
  connectorIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  status?: string;
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      connectorIds: 'ConnectorIds',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      status: 'Status',
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorIds: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      status: 'string',
      switchStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectorIds)) {
      $dara.Model.validateArray(this.connectorIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBody extends $dara.Model {
  connectors?: ListConnectorsResponseBodyConnectors[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      connectors: 'Connectors',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectors: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectors },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.connectors)) {
      $dara.Model.validateArray(this.connectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConnectorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConnectorsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRouteRegionsResponseBody extends $dara.Model {
  regions?: string[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRouteRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDynamicRouteRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDynamicRouteRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRoutesRequest extends $dara.Model {
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  dynamicRouteIds?: string[];
  /**
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      currentPage: 'CurrentPage',
      dynamicRouteIds: 'DynamicRouteIds',
      name: 'Name',
      nextHop: 'NextHop',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
      status: 'Status',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      currentPage: 'number',
      dynamicRouteIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      nextHop: 'string',
      pageSize: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRouteIds)) {
      $dara.Model.validateArray(this.dynamicRouteIds);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRoutesResponseBody extends $dara.Model {
  dynamicRoutes?: ListDynamicRoutesResponseBodyDynamicRoutes[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicRoutes: 'DynamicRoutes',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoutes: { 'type': 'array', 'itemType': ListDynamicRoutesResponseBodyDynamicRoutes },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRoutes)) {
      $dara.Model.validateArray(this.dynamicRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRoutesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDynamicRoutesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDynamicRoutesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExcessiveDeviceRegistrationApplicationsRequest extends $dara.Model {
  applicationIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  department?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  statuses?: string[];
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      currentPage: 'CurrentPage',
      department: 'Department',
      deviceTag: 'DeviceTag',
      hostname: 'Hostname',
      mac: 'Mac',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
      statuses: 'Statuses',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      department: 'string',
      deviceTag: 'string',
      hostname: 'string',
      mac: 'string',
      pageSize: 'number',
      saseUserId: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExcessiveDeviceRegistrationApplicationsResponseBody extends $dara.Model {
  applications?: ListExcessiveDeviceRegistrationApplicationsResponseBodyApplications[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListExcessiveDeviceRegistrationApplicationsResponseBodyApplications },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExcessiveDeviceRegistrationApplicationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExcessiveDeviceRegistrationApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExcessiveDeviceRegistrationApplicationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * CSAS,DingTalk,LDAP
   */
  include?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      include: 'Include',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      include: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsResponseBody extends $dara.Model {
  data?: ListIdpConfigsResponseBodyData;
  /**
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListIdpConfigsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIdpConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIdpConfigsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1440
   */
  idpConfigId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      idpConfigId: 'IdpConfigId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      idpConfigId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsResponseBody extends $dara.Model {
  data?: ListIdpDepartmentsResponseBodyData;
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListIdpDepartmentsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIdpDepartmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIdpDepartmentsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacUserCertRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  department?: string;
  /**
   * @example
   * windows
   */
  deviceType?: string;
  /**
   * @example
   * 1702770400
   */
  endTime?: number;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 1702260834
   */
  startTime?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * zhang**
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      department: 'Department',
      deviceType: 'DeviceType',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      department: 'string',
      deviceType: 'string',
      endTime: 'number',
      pageSize: 'string',
      startTime: 'number',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacUserCertResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  dataList?: ListNacUserCertResponseBodyDataList[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      message: 'Message',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataList: { 'type': 'array', 'itemType': ListNacUserCertResponseBodyDataList },
      message: 'string',
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacUserCertResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNacUserCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNacUserCertResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponseBody extends $dara.Model {
  applications?: ListPolicesForPrivateAccessApplicationResponseBodyApplications[];
  /**
   * @example
   * 4AB972E2-D702-5464-B132-B1911498B8BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplications },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicesForPrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicesForPrivateAccessApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponseBody extends $dara.Model {
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  tags?: ListPolicesForPrivateAccessTagResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessTagResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicesForPrivateAccessTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicesForPrivateAccessTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 5F04DFBD-3F48-5F70-AE72-474026670128
   */
  requestId?: string;
  userGroups?: ListPolicesForUserGroupResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListPolicesForUserGroupResponseBodyUserGroups },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicesForUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicesForUserGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsRequest extends $dara.Model {
  /**
   * @example
   * 1681293719
   */
  endTime?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 1681035708
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      region: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  trafficData?: ListPopTrafficStatisticsResponseBodyTrafficData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficData: 'TrafficData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficData: { 'type': 'array', 'itemType': ListPopTrafficStatisticsResponseBodyTrafficData },
    };
  }

  validate() {
    if(Array.isArray(this.trafficData)) {
      $dara.Model.validateArray(this.trafficData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPopTrafficStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPopTrafficStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsRequest extends $dara.Model {
  accessModes?: string;
  /**
   * @example
   * 192.168.0.0/16
   */
  address?: string;
  applicationIds?: string[];
  connectorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * pa-policy-54a7838a48bf****
   */
  policyId?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      accessModes: 'AccessModes',
      address: 'Address',
      applicationIds: 'ApplicationIds',
      connectorId: 'ConnectorId',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      status: 'Status',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessModes: 'string',
      address: 'string',
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      connectorId: 'string',
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyId: 'string',
      status: 'string',
      tagId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsResponseBody extends $dara.Model {
  applications?: ListPrivateAccessApplicationsResponseBodyApplications[];
  /**
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsResponseBodyApplications },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivateAccessApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivateAccessApplicationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dynamicRouteIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dynamicRouteIds: 'DynamicRouteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRouteIds)) {
      $dara.Model.validateArray(this.dynamicRouteIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBody extends $dara.Model {
  dynamicRoutes?: ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutes[];
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRoutes: 'DynamicRoutes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoutes: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRoutes)) {
      $dara.Model.validateArray(this.dynamicRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivateAccessApplicationsForDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivateAccessApplicationsForDynamicRouteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessPolicesRequest extends $dara.Model {
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  applicationName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  policyIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * tag-c0cb77857a99****
   */
  tagId?: string;
  tagName?: string;
  /**
   * @remarks
   * 用户组ID。取值来源：
   * - [ListUserGroups](~~ListUserGroups~~)：批量查询用户组。
   * - [CreateUserGroup](~~CreateUserGroup~~)：创建用户组。
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyAction: 'PolicyAction',
      policyIds: 'PolicyIds',
      status: 'Status',
      tagId: 'TagId',
      tagName: 'TagName',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyAction: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagId: 'string',
      tagName: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessPolicesResponseBody extends $dara.Model {
  polices?: ListPrivateAccessPolicesResponseBodyPolices[];
  /**
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPrivateAccessPolicesResponseBodyPolices },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessPolicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivateAccessPolicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivateAccessPolicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal access application. You can obtain the application ID by calling the following operations:
   * 
   * *   [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): queries all internal access applications.
   * *   [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): creates an internal access application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the internal access tag. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the internal access policy. You can obtain the policy ID by calling the following operations:
   * 
   * *   [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): queries all internal access policies.
   * *   [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): creates an internal access policy.
   * 
   * @example
   * pa-policy-54a7838a48bf****
   */
  policyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the simple query mode. A value of true specifies that policy IDs are not queried.
   * 
   * @example
   * true
   */
  simpleMode?: boolean;
  /**
   * @remarks
   * The IDs of internal access tags. You can specify up to 100 tag IDs.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      simpleMode: 'SimpleMode',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyId: 'string',
      simpleMode: 'boolean',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54C1D236-CDB9-586C-B44D-AFDCEA195545
   */
  requestId?: string;
  /**
   * @remarks
   * The internal access tags.
   */
  tags?: ListPrivateAccessTagsResponseBodyTags[];
  /**
   * @remarks
   * The total number of internal access tags.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListPrivateAccessTagsResponseBodyTags },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivateAccessTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivateAccessTagsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dynamicRouteIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dynamicRouteIds: 'DynamicRouteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRouteIds)) {
      $dara.Model.validateArray(this.dynamicRouteIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteResponseBody extends $dara.Model {
  dynamicRoutes?: ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutes[];
  /**
   * @example
   * B608C6AE-623D-55C4-9454-601B88AE937E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRoutes: 'DynamicRoutes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoutes: { 'type': 'array', 'itemType': ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRoutes)) {
      $dara.Model.validateArray(this.dynamicRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivateAccessTagsForDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivateAccessTagsForDynamicRouteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesRequest extends $dara.Model {
  /**
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  policyIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      companyLimitType: 'CompanyLimitType',
      currentPage: 'CurrentPage',
      matchMode: 'MatchMode',
      name: 'Name',
      pageSize: 'PageSize',
      personalLimitType: 'PersonalLimitType',
      policyIds: 'PolicyIds',
      status: 'Status',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitType: 'string',
      currentPage: 'number',
      matchMode: 'string',
      name: 'string',
      pageSize: 'number',
      personalLimitType: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBody extends $dara.Model {
  policies?: ListRegistrationPoliciesResponseBodyPolicies[];
  /**
   * @example
   * 7A8FE38A-E29C-5678-B84A-FEDBCB83552F
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListRegistrationPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalNum: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegistrationPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegistrationPoliciesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  userGroups?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListRegistrationPoliciesForUserGroupResponseBodyUserGroups },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegistrationPoliciesForUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegistrationPoliciesForUserGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwareForUserDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceTag: 'DeviceTag',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceTag: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwareForUserDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  software?: ListSoftwareForUserDeviceResponseBodySoftware[];
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      software: 'Software',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      software: { 'type': 'array', 'itemType': ListSoftwareForUserDeviceResponseBodySoftware },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.software)) {
      $dara.Model.validateArray(this.software);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwareForUserDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSoftwareForUserDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSoftwareForUserDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessApplicationResponseBody extends $dara.Model {
  applications?: ListTagsForPrivateAccessApplicationResponseBodyApplications[];
  /**
   * @example
   * 7241F45B-E8D3-5BA3-8172-8A58AC2AB0FC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListTagsForPrivateAccessApplicationResponseBodyApplications },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagsForPrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagsForPrivateAccessApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyResponseBody extends $dara.Model {
  polices?: ListTagsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @example
   * 9EE61139-A6A8-5E13-80AF-83435C21B26B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListTagsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagsForPrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagsForPrivateAccessPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUninstallApplicationsRequest extends $dara.Model {
  applicationIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  department?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  statuses?: string[];
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      currentPage: 'CurrentPage',
      department: 'Department',
      hostname: 'Hostname',
      mac: 'Mac',
      pageSize: 'PageSize',
      statuses: 'Statuses',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      department: 'string',
      hostname: 'string',
      mac: 'string',
      pageSize: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUninstallApplicationsResponseBody extends $dara.Model {
  applications?: ListUninstallApplicationsResponseBodyApplications[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListUninstallApplicationsResponseBodyApplications },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUninstallApplicationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUninstallApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUninstallApplicationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      saseUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserApplicationsResponseBody extends $dara.Model {
  applications?: ListUserApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListUserApplicationsResponseBodyApplications },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserApplicationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserApplicationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDevicesRequest extends $dara.Model {
  appStatuses?: string[];
  appVersions?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  deviceStatuses?: string[];
  deviceTags?: string[];
  deviceTypes?: string[];
  dlpStatuses?: string[];
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  iaStatuses?: string[];
  innerIp?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  nacStatuses?: string[];
  paStatuses?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  sortBy?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatuses: 'AppStatuses',
      appVersions: 'AppVersions',
      currentPage: 'CurrentPage',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceStatuses: 'DeviceStatuses',
      deviceTags: 'DeviceTags',
      deviceTypes: 'DeviceTypes',
      dlpStatuses: 'DlpStatuses',
      hostname: 'Hostname',
      iaStatuses: 'IaStatuses',
      innerIp: 'InnerIp',
      mac: 'Mac',
      nacStatuses: 'NacStatuses',
      paStatuses: 'PaStatuses',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      sortBy: 'SortBy',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatuses: { 'type': 'array', 'itemType': 'string' },
      appVersions: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      department: 'string',
      deviceBelong: 'string',
      deviceStatuses: { 'type': 'array', 'itemType': 'string' },
      deviceTags: { 'type': 'array', 'itemType': 'string' },
      deviceTypes: { 'type': 'array', 'itemType': 'string' },
      dlpStatuses: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      iaStatuses: { 'type': 'array', 'itemType': 'string' },
      innerIp: 'string',
      mac: 'string',
      nacStatuses: { 'type': 'array', 'itemType': 'string' },
      paStatuses: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      sortBy: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appStatuses)) {
      $dara.Model.validateArray(this.appStatuses);
    }
    if(Array.isArray(this.appVersions)) {
      $dara.Model.validateArray(this.appVersions);
    }
    if(Array.isArray(this.deviceStatuses)) {
      $dara.Model.validateArray(this.deviceStatuses);
    }
    if(Array.isArray(this.deviceTags)) {
      $dara.Model.validateArray(this.deviceTags);
    }
    if(Array.isArray(this.deviceTypes)) {
      $dara.Model.validateArray(this.deviceTypes);
    }
    if(Array.isArray(this.dlpStatuses)) {
      $dara.Model.validateArray(this.dlpStatuses);
    }
    if(Array.isArray(this.iaStatuses)) {
      $dara.Model.validateArray(this.iaStatuses);
    }
    if(Array.isArray(this.nacStatuses)) {
      $dara.Model.validateArray(this.nacStatuses);
    }
    if(Array.isArray(this.paStatuses)) {
      $dara.Model.validateArray(this.paStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDevicesResponseBody extends $dara.Model {
  devices?: ListUserDevicesResponseBodyDevices[];
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': ListUserDevicesResponseBodyDevices },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserDevicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsRequest extends $dara.Model {
  /**
   * @example
   * username
   */
  attributeValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * 用户组名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
   * 
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @example
   * pa-policy-54a7838a48bf****
   */
  PAPolicyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      attributeValue: 'AttributeValue',
      currentPage: 'CurrentPage',
      name: 'Name',
      PAPolicyId: 'PAPolicyId',
      pageSize: 'PageSize',
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValue: 'string',
      currentPage: 'number',
      name: 'string',
      PAPolicyId: 'string',
      pageSize: 'number',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * 4AB972E2-D702-5464-B132-B1911498B8BF
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  userGroups?: ListUserGroupsResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalNum: 'number',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyUserGroups },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyResponseBody extends $dara.Model {
  polices?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsForPrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserGroupsForPrivateAccessPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponseBody extends $dara.Model {
  policies?: ListUserGroupsForRegistrationPolicyResponseBodyPolicies[];
  /**
   * @example
   * D89009C7-54C6-51B6-BAE7-3F373920C6BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListUserGroupsForRegistrationPolicyResponseBodyPolicies },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsForRegistrationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserGroupsForRegistrationPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPrivateAccessPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      saseUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPrivateAccessPoliciesResponseBody extends $dara.Model {
  polices?: ListUserPrivateAccessPoliciesResponseBodyPolices[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9D852F87-AFB5-51B8-AACD-F7D0EFB8277D
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListUserPrivateAccessPoliciesResponseBodyPolices },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPrivateAccessPoliciesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserPrivateAccessPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserPrivateAccessPoliciesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  department?: string;
  fuzzyUsername?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  preciseUsername?: string;
  saseUserIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      department: 'Department',
      fuzzyUsername: 'FuzzyUsername',
      pageSize: 'PageSize',
      preciseUsername: 'PreciseUsername',
      saseUserIds: 'SaseUserIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      department: 'string',
      fuzzyUsername: 'string',
      pageSize: 'number',
      preciseUsername: 'string',
      saseUserIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.saseUserIds)) {
      $dara.Model.validateArray(this.saseUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: string;
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalNum: 'string',
      users: { 'type': 'array', 'itemType': ListUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupWmInfoMappingRequest extends $dara.Model {
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupWmInfoMappingResponseBody extends $dara.Model {
  data?: LookupWmInfoMappingResponseBodyData;
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: LookupWmInfoMappingResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupWmInfoMappingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LookupWmInfoMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LookupWmInfoMappingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeUserSessionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  externalIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * idp-cfg9vcrqylo39c39uxnw
   */
  idpId?: string;
  static names(): { [key: string]: string } {
    return {
      externalIds: 'ExternalIds',
      idpId: 'IdpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIds: 'string',
      idpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeUserSessionResponseBody extends $dara.Model {
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeUserSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeUserSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeUserSessionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequest extends $dara.Model {
  description?: string;
  matchSchemas?: UpdateApprovalProcessRequestMatchSchemas;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-process-f16bf74b2b29****
   */
  processId?: string;
  processName?: string;
  processNodes?: string[][];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      matchSchemas: 'MatchSchemas',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      matchSchemas: UpdateApprovalProcessRequestMatchSchemas,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(this.matchSchemas && typeof (this.matchSchemas as any).validate === 'function') {
      (this.matchSchemas as any).validate();
    }
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessShrinkRequest extends $dara.Model {
  description?: string;
  matchSchemasShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-process-f16bf74b2b29****
   */
  processId?: string;
  processName?: string;
  processNodes?: string[][];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      matchSchemasShrink: 'MatchSchemas',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      matchSchemasShrink: 'string',
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponseBody extends $dara.Model {
  process?: UpdateApprovalProcessResponseBodyProcess;
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: UpdateApprovalProcessResponseBodyProcess,
      requestId: 'string',
    };
  }

  validate() {
    if(this.process && typeof (this.process as any).validate === 'function') {
      (this.process as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApprovalProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApprovalProcessResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-872b5e911b35****
   */
  approvalId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Approved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
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

export class UpdateApprovalStatusResponseBody extends $dara.Model {
  approval?: UpdateApprovalStatusResponseBodyApproval[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approval: 'Approval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approval: { 'type': 'array', 'itemType': UpdateApprovalStatusResponseBodyApproval },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approval)) {
      $dara.Model.validateArray(this.approval);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApprovalStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApprovalStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowReport?: boolean;
  blockContent?: UpdateBootAndAntiUninstallPolicyRequestBlockContent;
  /**
   * @example
   * true
   */
  isAntiUninstall?: boolean;
  /**
   * @example
   * true
   */
  isBoot?: boolean;
  userGroupIds?: string[];
  whitelistUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      allowReport: 'AllowReport',
      blockContent: 'BlockContent',
      isAntiUninstall: 'IsAntiUninstall',
      isBoot: 'IsBoot',
      userGroupIds: 'UserGroupIds',
      whitelistUsers: 'WhitelistUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowReport: 'boolean',
      blockContent: UpdateBootAndAntiUninstallPolicyRequestBlockContent,
      isAntiUninstall: 'boolean',
      isBoot: 'boolean',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelistUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.blockContent && typeof (this.blockContent as any).validate === 'function') {
      (this.blockContent as any).validate();
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelistUsers)) {
      $dara.Model.validateArray(this.whitelistUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowReport?: boolean;
  blockContentShrink?: string;
  /**
   * @example
   * true
   */
  isAntiUninstall?: boolean;
  /**
   * @example
   * true
   */
  isBoot?: boolean;
  userGroupIds?: string[];
  whitelistUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      allowReport: 'AllowReport',
      blockContentShrink: 'BlockContent',
      isAntiUninstall: 'IsAntiUninstall',
      isBoot: 'IsBoot',
      userGroupIds: 'UserGroupIds',
      whitelistUsers: 'WhitelistUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowReport: 'boolean',
      blockContentShrink: 'string',
      isAntiUninstall: 'boolean',
      isBoot: 'boolean',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelistUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelistUsers)) {
      $dara.Model.validateArray(this.whitelistUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * CB67D866-1E54-5106-89DF-6D70C73E5989
   */
  requestId?: string;
  strategy?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategy: UpdateBootAndAntiUninstallPolicyResponseBodyStrategy,
    };
  }

  validate() {
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBootAndAntiUninstallPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBootAndAntiUninstallPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserRequest extends $dara.Model {
  /**
   * @example
   * 10701
   */
  departmentId?: string;
  description?: string;
  /**
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20644
   */
  id?: string;
  /**
   * @example
   * 13641966835
   */
  mobileNumber?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      id: 'Id',
      mobileNumber: 'MobileNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      description: 'string',
      email: 'string',
      id: 'string',
      mobileNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserResponseBody extends $dara.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClientUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserPasswordRequest extends $dara.Model {
  /**
   * @example
   * 1128
   */
  id?: string;
  /**
   * @example
   * kehudiyidj
   */
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserPasswordResponseBody extends $dara.Model {
  /**
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClientUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClientUserPasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1495
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class UpdateClientUserStatusResponseBody extends $dara.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClientUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClientUserStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDynamicRouteRequest extends $dara.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  /**
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @example
   * 99
   */
  priority?: number;
  regionIds?: string[];
  /**
   * @example
   * Disabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      description: 'Description',
      dynamicRouteId: 'DynamicRouteId',
      dynamicRouteType: 'DynamicRouteType',
      modifyType: 'ModifyType',
      name: 'Name',
      nextHop: 'NextHop',
      priority: 'Priority',
      regionIds: 'RegionIds',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      description: 'string',
      dynamicRouteId: 'string',
      dynamicRouteType: 'string',
      modifyType: 'string',
      name: 'string',
      nextHop: 'string',
      priority: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDynamicRouteResponseBody extends $dara.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDynamicRouteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDynamicRouteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExcessiveDeviceRegistrationApplicationsStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Approved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBody extends $dara.Model {
  applications?: UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications[];
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdpDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10653
   */
  departmentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  departmentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 598
   */
  idpConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      idpConfigId: 'IdpConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      departmentName: 'string',
      idpConfigId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdpDepartmentResponseBody extends $dara.Model {
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdpDepartmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIdpDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIdpDepartmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacUserCertStatusRequest extends $dara.Model {
  idList?: UpdateNacUserCertStatusRequestIdList[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      idList: 'IdList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idList: { 'type': 'array', 'itemType': UpdateNacUserCertStatusRequestIdList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacUserCertStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacUserCertStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNacUserCertStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNacUserCertStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessApplicationRequest extends $dara.Model {
  addresses?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * **if can be null:**
   * true
   */
  description?: string;
  l7ProxyDomainAutomaticPrefix?: string;
  l7ProxyDomainCustom?: string;
  l7ProxyDomainPrivate?: string;
  /**
   * @example
   * Cover
   */
  modifyType?: string;
  portRanges?: UpdatePrivateAccessApplicationRequestPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * **if can be null:**
   * true
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      description: 'Description',
      l7ProxyDomainAutomaticPrefix: 'L7ProxyDomainAutomaticPrefix',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      l7ProxyDomainPrivate: 'L7ProxyDomainPrivate',
      modifyType: 'ModifyType',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      description: 'string',
      l7ProxyDomainAutomaticPrefix: 'string',
      l7ProxyDomainCustom: 'string',
      l7ProxyDomainPrivate: 'string',
      modifyType: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdatePrivateAccessApplicationRequestPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessApplicationResponseBody extends $dara.Model {
  /**
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePrivateAccessApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessPolicyRequest extends $dara.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  customUserAttributes?: UpdatePrivateAccessPolicyRequestCustomUserAttributes[];
  /**
   * **if can be null:**
   * true
   */
  description?: string;
  deviceAttributeAction?: string;
  deviceAttributeId?: string;
  /**
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * 内网访问标签ID集合。一条策略最多支持100个内网访问标签ID。
   */
  tagIds?: string[];
  triggerTemplateId?: string;
  userGroupIds?: string[];
  /**
   * @remarks
   * 内网访问策略的用户组类型。取值：
   * - **Normal**：普通用户组。
   * - **Custom**：自定义用户组。
   * 
   * @example
   * Normal
   */
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      deviceAttributeAction: 'DeviceAttributeAction',
      deviceAttributeId: 'DeviceAttributeId',
      modifyType: 'ModifyType',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      tagIds: 'TagIds',
      triggerTemplateId: 'TriggerTemplateId',
      userGroupIds: 'UserGroupIds',
      userGroupMode: 'UserGroupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': UpdatePrivateAccessPolicyRequestCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
      modifyType: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      triggerTemplateId: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePrivateAccessPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyRequest extends $dara.Model {
  companyLimitCount?: UpdateRegistrationPolicyRequestCompanyLimitCount;
  /**
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  description?: string;
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  personalLimitCount?: UpdateRegistrationPolicyRequestPersonalLimitCount;
  /**
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reg-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      companyLimitCount: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCount: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCount: UpdateRegistrationPolicyRequestCompanyLimitCount,
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCount: UpdateRegistrationPolicyRequestPersonalLimitCount,
      personalLimitType: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.companyLimitCount && typeof (this.companyLimitCount as any).validate === 'function') {
      (this.companyLimitCount as any).validate();
    }
    if(this.personalLimitCount && typeof (this.personalLimitCount as any).validate === 'function') {
      (this.personalLimitCount as any).validate();
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyShrinkRequest extends $dara.Model {
  companyLimitCountShrink?: string;
  /**
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  description?: string;
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  personalLimitCountShrink?: string;
  /**
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reg-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      companyLimitCountShrink: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCountShrink: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCountShrink: 'string',
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCountShrink: 'string',
      personalLimitType: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyResponseBody extends $dara.Model {
  policy?: UpdateRegistrationPolicyResponseBodyPolicy;
  /**
   * @example
   * 27064ECA-0936-59F3-8A98-EC821E5BD08F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: UpdateRegistrationPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRegistrationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRegistrationPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUninstallApplicationsStatusRequest extends $dara.Model {
  applicationIds?: string[];
  /**
   * @example
   * Approved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUninstallApplicationsStatusResponseBody extends $dara.Model {
  applications?: UpdateUninstallApplicationsStatusResponseBodyApplications[];
  /**
   * @example
   * 9B769522-D50C-5978-8981-52BE800D6099
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': UpdateUninstallApplicationsStatusResponseBodyApplications },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUninstallApplicationsStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUninstallApplicationsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUninstallApplicationsStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesSharingStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceTags?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  sharingStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceTags: 'DeviceTags',
      sharingStatus: 'SharingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTags: { 'type': 'array', 'itemType': 'string' },
      sharingStatus: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.deviceTags)) {
      $dara.Model.validateArray(this.deviceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesSharingStatusResponseBody extends $dara.Model {
  devices?: UpdateUserDevicesSharingStatusResponseBodyDevices[];
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': UpdateUserDevicesSharingStatusResponseBodyDevices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesSharingStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserDevicesSharingStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserDevicesSharingStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Unbound
   */
  deviceAction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceTags?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceAction: 'DeviceAction',
      deviceTags: 'DeviceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceAction: 'string',
      deviceTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deviceTags)) {
      $dara.Model.validateArray(this.deviceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesStatusResponseBody extends $dara.Model {
  devices?: UpdateUserDevicesStatusResponseBodyDevices[];
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': UpdateUserDevicesStatusResponseBodyDevices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserDevicesStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserDevicesStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequest extends $dara.Model {
  attributes?: UpdateUserGroupRequestAttributes[];
  /**
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      description: 'Description',
      modifyType: 'ModifyType',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': UpdateUserGroupRequestAttributes },
      description: 'string',
      modifyType: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponseBody extends $dara.Model {
  /**
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUsersStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  saseUserIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserIds: 'SaseUserIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.saseUserIds)) {
      $dara.Model.validateArray(this.saseUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUsersStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 47363C2B-1AAA-5954-8847-0E50FCC54117
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUsersStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUsersStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUsersStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("csas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 挂载connector的应用
   * 
   * @param tmpReq - AttachApplication2ConnectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachApplication2ConnectorResponse
   */
  async attachApplication2ConnectorWithOptions(tmpReq: AttachApplication2ConnectorRequest, runtime: $dara.RuntimeOptions): Promise<AttachApplication2ConnectorResponse> {
    tmpReq.validate();
    let request = new AttachApplication2ConnectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationIds)) {
      request.applicationIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationIds, "ApplicationIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIdsShrink)) {
      body["ApplicationIds"] = request.applicationIdsShrink;
    }

    if (!$dara.isNull(request.connectorId)) {
      body["ConnectorId"] = request.connectorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachApplication2Connector",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachApplication2ConnectorResponse>(await this.callApi(params, req, runtime), new AttachApplication2ConnectorResponse({}));
    } else {
      return $dara.cast<AttachApplication2ConnectorResponse>(await this.execute(params, req, runtime), new AttachApplication2ConnectorResponse({}));
    }

  }

  /**
   * 挂载connector的应用
   * 
   * @param request - AttachApplication2ConnectorRequest
   * @returns AttachApplication2ConnectorResponse
   */
  async attachApplication2Connector(request: AttachApplication2ConnectorRequest): Promise<AttachApplication2ConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachApplication2ConnectorWithOptions(request, runtime);
  }

  /**
   * 挂载业务策略至指定审批流程
   * 
   * @param request - AttachPolicy2ApprovalProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicy2ApprovalProcessResponse
   */
  async attachPolicy2ApprovalProcessWithOptions(request: AttachPolicy2ApprovalProcessRequest, runtime: $dara.RuntimeOptions): Promise<AttachPolicy2ApprovalProcessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.processId)) {
      body["ProcessId"] = request.processId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPolicy2ApprovalProcess",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachPolicy2ApprovalProcessResponse>(await this.callApi(params, req, runtime), new AttachPolicy2ApprovalProcessResponse({}));
    } else {
      return $dara.cast<AttachPolicy2ApprovalProcessResponse>(await this.execute(params, req, runtime), new AttachPolicy2ApprovalProcessResponse({}));
    }

  }

  /**
   * 挂载业务策略至指定审批流程
   * 
   * @param request - AttachPolicy2ApprovalProcessRequest
   * @returns AttachPolicy2ApprovalProcessResponse
   */
  async attachPolicy2ApprovalProcess(request: AttachPolicy2ApprovalProcessRequest): Promise<AttachPolicy2ApprovalProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicy2ApprovalProcessWithOptions(request, runtime);
  }

  /**
   * 创建审批流程
   * 
   * @param tmpReq - CreateApprovalProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApprovalProcessResponse
   */
  async createApprovalProcessWithOptions(tmpReq: CreateApprovalProcessRequest, runtime: $dara.RuntimeOptions): Promise<CreateApprovalProcessResponse> {
    tmpReq.validate();
    let request = new CreateApprovalProcessShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.matchSchemas)) {
      request.matchSchemasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchSchemas, "MatchSchemas", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.matchSchemasShrink)) {
      body["MatchSchemas"] = request.matchSchemasShrink;
    }

    if (!$dara.isNull(request.processName)) {
      body["ProcessName"] = request.processName;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.processNodes)) {
      bodyFlat["ProcessNodes"] = request.processNodes;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApprovalProcess",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateApprovalProcessResponse>(await this.callApi(params, req, runtime), new CreateApprovalProcessResponse({}));
    } else {
      return $dara.cast<CreateApprovalProcessResponse>(await this.execute(params, req, runtime), new CreateApprovalProcessResponse({}));
    }

  }

  /**
   * 创建审批流程
   * 
   * @param request - CreateApprovalProcessRequest
   * @returns CreateApprovalProcessResponse
   */
  async createApprovalProcess(request: CreateApprovalProcessRequest): Promise<CreateApprovalProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApprovalProcessWithOptions(request, runtime);
  }

  /**
   * 创建自定义身份源用户
   * 
   * @param request - CreateClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientUserResponse
   */
  async createClientUserWithOptions(request: CreateClientUserRequest, runtime: $dara.RuntimeOptions): Promise<CreateClientUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    if (!$dara.isNull(request.mobileNumber)) {
      query["MobileNumber"] = request.mobileNumber;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateClientUserResponse>(await this.callApi(params, req, runtime), new CreateClientUserResponse({}));
    } else {
      return $dara.cast<CreateClientUserResponse>(await this.execute(params, req, runtime), new CreateClientUserResponse({}));
    }

  }

  /**
   * 创建自定义身份源用户
   * 
   * @param request - CreateClientUserRequest
   * @returns CreateClientUserResponse
   */
  async createClientUser(request: CreateClientUserRequest): Promise<CreateClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientUserWithOptions(request, runtime);
  }

  /**
   * 创建动态路由
   * 
   * @param request - CreateDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDynamicRouteResponse
   */
  async createDynamicRouteWithOptions(request: CreateDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<CreateDynamicRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dynamicRouteType)) {
      body["DynamicRouteType"] = request.dynamicRouteType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextHop)) {
      body["NextHop"] = request.nextHop;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionIds)) {
      bodyFlat["RegionIds"] = request.regionIds;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDynamicRouteResponse>(await this.callApi(params, req, runtime), new CreateDynamicRouteResponse({}));
    } else {
      return $dara.cast<CreateDynamicRouteResponse>(await this.execute(params, req, runtime), new CreateDynamicRouteResponse({}));
    }

  }

  /**
   * 创建动态路由
   * 
   * @param request - CreateDynamicRouteRequest
   * @returns CreateDynamicRouteResponse
   */
  async createDynamicRoute(request: CreateDynamicRouteRequest): Promise<CreateDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 创建自定义身份源部门
   * 
   * @param request - CreateIdpDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdpDepartmentResponse
   */
  async createIdpDepartmentWithOptions(request: CreateIdpDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<CreateIdpDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!$dara.isNull(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdpDepartment",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateIdpDepartmentResponse>(await this.callApi(params, req, runtime), new CreateIdpDepartmentResponse({}));
    } else {
      return $dara.cast<CreateIdpDepartmentResponse>(await this.execute(params, req, runtime), new CreateIdpDepartmentResponse({}));
    }

  }

  /**
   * 创建自定义身份源部门
   * 
   * @param request - CreateIdpDepartmentRequest
   * @returns CreateIdpDepartmentResponse
   */
  async createIdpDepartment(request: CreateIdpDepartmentRequest): Promise<CreateIdpDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIdpDepartmentWithOptions(request, runtime);
  }

  /**
   * 创建内网访问应用
   * 
   * @param request - CreatePrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivateAccessApplicationResponse
   */
  async createPrivateAccessApplicationWithOptions(request: CreatePrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<CreatePrivateAccessApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addresses)) {
      bodyFlat["Addresses"] = request.addresses;
    }

    if (!$dara.isNull(request.browserAccessStatus)) {
      body["BrowserAccessStatus"] = request.browserAccessStatus;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.l7ProxyDomainAutomaticPrefix)) {
      body["L7ProxyDomainAutomaticPrefix"] = request.l7ProxyDomainAutomaticPrefix;
    }

    if (!$dara.isNull(request.l7ProxyDomainCustom)) {
      body["L7ProxyDomainCustom"] = request.l7ProxyDomainCustom;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.portRanges)) {
      bodyFlat["PortRanges"] = request.portRanges;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new CreatePrivateAccessApplicationResponse({}));
    } else {
      return $dara.cast<CreatePrivateAccessApplicationResponse>(await this.execute(params, req, runtime), new CreatePrivateAccessApplicationResponse({}));
    }

  }

  /**
   * 创建内网访问应用
   * 
   * @param request - CreatePrivateAccessApplicationRequest
   * @returns CreatePrivateAccessApplicationResponse
   */
  async createPrivateAccessApplication(request: CreatePrivateAccessApplicationRequest): Promise<CreatePrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 创建内网访问策略
   * 
   * @param request - CreatePrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivateAccessPolicyResponse
   */
  async createPrivateAccessPolicyWithOptions(request: CreatePrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<CreatePrivateAccessPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.customUserAttributes)) {
      bodyFlat["CustomUserAttributes"] = request.customUserAttributes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.deviceAttributeAction)) {
      body["DeviceAttributeAction"] = request.deviceAttributeAction;
    }

    if (!$dara.isNull(request.deviceAttributeId)) {
      body["DeviceAttributeId"] = request.deviceAttributeId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.policyAction)) {
      body["PolicyAction"] = request.policyAction;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    if (!$dara.isNull(request.triggerTemplateId)) {
      body["TriggerTemplateId"] = request.triggerTemplateId;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userGroupMode)) {
      body["UserGroupMode"] = request.userGroupMode;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new CreatePrivateAccessPolicyResponse({}));
    } else {
      return $dara.cast<CreatePrivateAccessPolicyResponse>(await this.execute(params, req, runtime), new CreatePrivateAccessPolicyResponse({}));
    }

  }

  /**
   * 创建内网访问策略
   * 
   * @param request - CreatePrivateAccessPolicyRequest
   * @returns CreatePrivateAccessPolicyResponse
   */
  async createPrivateAccessPolicy(request: CreatePrivateAccessPolicyRequest): Promise<CreatePrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 创建内网访问标签
   * 
   * @param request - CreatePrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivateAccessTagResponse
   */
  async createPrivateAccessTagWithOptions(request: CreatePrivateAccessTagRequest, runtime: $dara.RuntimeOptions): Promise<CreatePrivateAccessTagResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePrivateAccessTagResponse>(await this.callApi(params, req, runtime), new CreatePrivateAccessTagResponse({}));
    } else {
      return $dara.cast<CreatePrivateAccessTagResponse>(await this.execute(params, req, runtime), new CreatePrivateAccessTagResponse({}));
    }

  }

  /**
   * 创建内网访问标签
   * 
   * @param request - CreatePrivateAccessTagRequest
   * @returns CreatePrivateAccessTagResponse
   */
  async createPrivateAccessTag(request: CreatePrivateAccessTagRequest): Promise<CreatePrivateAccessTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * 创建设备注册策略
   * 
   * @param tmpReq - CreateRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRegistrationPolicyResponse
   */
  async createRegistrationPolicyWithOptions(tmpReq: CreateRegistrationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<CreateRegistrationPolicyResponse> {
    tmpReq.validate();
    let request = new CreateRegistrationPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.companyLimitCount)) {
      request.companyLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.companyLimitCount, "CompanyLimitCount", "json");
    }

    if (!$dara.isNull(tmpReq.personalLimitCount)) {
      request.personalLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.personalLimitCount, "PersonalLimitCount", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyLimitCountShrink)) {
      body["CompanyLimitCount"] = request.companyLimitCountShrink;
    }

    if (!$dara.isNull(request.companyLimitType)) {
      body["CompanyLimitType"] = request.companyLimitType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.matchMode)) {
      body["MatchMode"] = request.matchMode;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.personalLimitCountShrink)) {
      body["PersonalLimitCount"] = request.personalLimitCountShrink;
    }

    if (!$dara.isNull(request.personalLimitType)) {
      body["PersonalLimitType"] = request.personalLimitType;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.whitelist)) {
      bodyFlat["Whitelist"] = request.whitelist;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new CreateRegistrationPolicyResponse({}));
    } else {
      return $dara.cast<CreateRegistrationPolicyResponse>(await this.execute(params, req, runtime), new CreateRegistrationPolicyResponse({}));
    }

  }

  /**
   * 创建设备注册策略
   * 
   * @param request - CreateRegistrationPolicyRequest
   * @returns CreateRegistrationPolicyResponse
   */
  async createRegistrationPolicy(request: CreateRegistrationPolicyRequest): Promise<CreateRegistrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * 创建用户组
   * 
   * @param request - CreateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserGroupResponse
   */
  async createUserGroupWithOptions(request: CreateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateUserGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      bodyFlat["Attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateUserGroupResponse>(await this.callApi(params, req, runtime), new CreateUserGroupResponse({}));
    } else {
      return $dara.cast<CreateUserGroupResponse>(await this.execute(params, req, runtime), new CreateUserGroupResponse({}));
    }

  }

  /**
   * 创建用户组
   * 
   * @param request - CreateUserGroupRequest
   * @returns CreateUserGroupResponse
   */
  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  /**
   * 创建数字水印暗水印透明底图
   * 
   * @param request - CreateWmBaseImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmBaseImageResponse
   */
  async createWmBaseImageWithOptions(request: CreateWmBaseImageRequest, runtime: $dara.RuntimeOptions): Promise<CreateWmBaseImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.height)) {
      body["Height"] = request.height;
    }

    if (!$dara.isNull(request.opacity)) {
      body["Opacity"] = request.opacity;
    }

    if (!$dara.isNull(request.scale)) {
      body["Scale"] = request.scale;
    }

    if (!$dara.isNull(request.width)) {
      body["Width"] = request.width;
    }

    if (!$dara.isNull(request.wmInfoBytesB64)) {
      body["WmInfoBytesB64"] = request.wmInfoBytesB64;
    }

    if (!$dara.isNull(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!$dara.isNull(request.wmInfoUint)) {
      body["WmInfoUint"] = request.wmInfoUint;
    }

    if (!$dara.isNull(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWmBaseImage",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateWmBaseImageResponse>(await this.callApi(params, req, runtime), new CreateWmBaseImageResponse({}));
    } else {
      return $dara.cast<CreateWmBaseImageResponse>(await this.execute(params, req, runtime), new CreateWmBaseImageResponse({}));
    }

  }

  /**
   * 创建数字水印暗水印透明底图
   * 
   * @param request - CreateWmBaseImageRequest
   * @returns CreateWmBaseImageResponse
   */
  async createWmBaseImage(request: CreateWmBaseImageRequest): Promise<CreateWmBaseImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWmBaseImageWithOptions(request, runtime);
  }

  /**
   * 创建嵌入水印任务
   * 
   * @param tmpReq - CreateWmEmbedTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmEmbedTaskResponse
   */
  async createWmEmbedTaskWithOptions(tmpReq: CreateWmEmbedTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateWmEmbedTaskResponse> {
    tmpReq.validate();
    let request = new CreateWmEmbedTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.csvControl)) {
      request.csvControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.csvControl, "CsvControl", "json");
    }

    if (!$dara.isNull(tmpReq.documentControl)) {
      request.documentControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentControl, "DocumentControl", "json");
    }

    let query = { };
    if (!$dara.isNull(request.csvControlShrink)) {
      query["CsvControl"] = request.csvControlShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentControlShrink)) {
      body["DocumentControl"] = request.documentControlShrink;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.filename)) {
      body["Filename"] = request.filename;
    }

    if (!$dara.isNull(request.imageEmbedJpegQuality)) {
      body["ImageEmbedJpegQuality"] = request.imageEmbedJpegQuality;
    }

    if (!$dara.isNull(request.imageEmbedLevel)) {
      body["ImageEmbedLevel"] = request.imageEmbedLevel;
    }

    if (!$dara.isNull(request.videoBitrate)) {
      body["VideoBitrate"] = request.videoBitrate;
    }

    if (!$dara.isNull(request.videoIsLong)) {
      body["VideoIsLong"] = request.videoIsLong;
    }

    if (!$dara.isNull(request.wmInfoBytesB64)) {
      body["WmInfoBytesB64"] = request.wmInfoBytesB64;
    }

    if (!$dara.isNull(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!$dara.isNull(request.wmInfoUint)) {
      body["WmInfoUint"] = request.wmInfoUint;
    }

    if (!$dara.isNull(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWmEmbedTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateWmEmbedTaskResponse>(await this.callApi(params, req, runtime), new CreateWmEmbedTaskResponse({}));
    } else {
      return $dara.cast<CreateWmEmbedTaskResponse>(await this.execute(params, req, runtime), new CreateWmEmbedTaskResponse({}));
    }

  }

  /**
   * 创建嵌入水印任务
   * 
   * @param request - CreateWmEmbedTaskRequest
   * @returns CreateWmEmbedTaskResponse
   */
  async createWmEmbedTask(request: CreateWmEmbedTaskRequest): Promise<CreateWmEmbedTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWmEmbedTaskWithOptions(request, runtime);
  }

  /**
   * 创建文件水印提取任务
   * 
   * @param tmpReq - CreateWmExtractTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmExtractTaskResponse
   */
  async createWmExtractTaskWithOptions(tmpReq: CreateWmExtractTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateWmExtractTaskResponse> {
    tmpReq.validate();
    let request = new CreateWmExtractTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.csvControl)) {
      request.csvControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.csvControl, "CsvControl", "json");
    }

    let query = { };
    if (!$dara.isNull(request.csvControlShrink)) {
      query["CsvControl"] = request.csvControlShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentIsCapture)) {
      body["DocumentIsCapture"] = request.documentIsCapture;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.filename)) {
      body["Filename"] = request.filename;
    }

    if (!$dara.isNull(request.videoIsLong)) {
      body["VideoIsLong"] = request.videoIsLong;
    }

    if (!$dara.isNull(request.videoSpeed)) {
      body["VideoSpeed"] = request.videoSpeed;
    }

    if (!$dara.isNull(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!$dara.isNull(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWmExtractTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateWmExtractTaskResponse>(await this.callApi(params, req, runtime), new CreateWmExtractTaskResponse({}));
    } else {
      return $dara.cast<CreateWmExtractTaskResponse>(await this.execute(params, req, runtime), new CreateWmExtractTaskResponse({}));
    }

  }

  /**
   * 创建文件水印提取任务
   * 
   * @param request - CreateWmExtractTaskRequest
   * @returns CreateWmExtractTaskResponse
   */
  async createWmExtractTask(request: CreateWmExtractTaskRequest): Promise<CreateWmExtractTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWmExtractTaskWithOptions(request, runtime);
  }

  /**
   * 创建一条字符串水印信息到数字水印信息的映射记录
   * 
   * @param request - CreateWmInfoMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmInfoMappingResponse
   */
  async createWmInfoMappingWithOptions(request: CreateWmInfoMappingRequest, runtime: $dara.RuntimeOptions): Promise<CreateWmInfoMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wmInfoBytesB64)) {
      body["WmInfoBytesB64"] = request.wmInfoBytesB64;
    }

    if (!$dara.isNull(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!$dara.isNull(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWmInfoMapping",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateWmInfoMappingResponse>(await this.callApi(params, req, runtime), new CreateWmInfoMappingResponse({}));
    } else {
      return $dara.cast<CreateWmInfoMappingResponse>(await this.execute(params, req, runtime), new CreateWmInfoMappingResponse({}));
    }

  }

  /**
   * 创建一条字符串水印信息到数字水印信息的映射记录
   * 
   * @param request - CreateWmInfoMappingRequest
   * @returns CreateWmInfoMappingResponse
   */
  async createWmInfoMapping(request: CreateWmInfoMappingRequest): Promise<CreateWmInfoMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWmInfoMappingWithOptions(request, runtime);
  }

  /**
   * 批量删除审批流程
   * 
   * @param request - DeleteApprovalProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApprovalProcessesResponse
   */
  async deleteApprovalProcessesWithOptions(request: DeleteApprovalProcessesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteApprovalProcessesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.processIds)) {
      bodyFlat["ProcessIds"] = request.processIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApprovalProcesses",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteApprovalProcessesResponse>(await this.callApi(params, req, runtime), new DeleteApprovalProcessesResponse({}));
    } else {
      return $dara.cast<DeleteApprovalProcessesResponse>(await this.execute(params, req, runtime), new DeleteApprovalProcessesResponse({}));
    }

  }

  /**
   * 批量删除审批流程
   * 
   * @param request - DeleteApprovalProcessesRequest
   * @returns DeleteApprovalProcessesResponse
   */
  async deleteApprovalProcesses(request: DeleteApprovalProcessesRequest): Promise<DeleteApprovalProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApprovalProcessesWithOptions(request, runtime);
  }

  /**
   * 删除自定义身份源指定用户
   * 
   * @param request - DeleteClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientUserResponse
   */
  async deleteClientUserWithOptions(request: DeleteClientUserRequest, runtime: $dara.RuntimeOptions): Promise<DeleteClientUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteClientUserResponse>(await this.callApi(params, req, runtime), new DeleteClientUserResponse({}));
    } else {
      return $dara.cast<DeleteClientUserResponse>(await this.execute(params, req, runtime), new DeleteClientUserResponse({}));
    }

  }

  /**
   * 删除自定义身份源指定用户
   * 
   * @param request - DeleteClientUserRequest
   * @returns DeleteClientUserResponse
   */
  async deleteClientUser(request: DeleteClientUserRequest): Promise<DeleteClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientUserWithOptions(request, runtime);
  }

  /**
   * 删除动态路由
   * 
   * @param request - DeleteDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDynamicRouteResponse
   */
  async deleteDynamicRouteWithOptions(request: DeleteDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDynamicRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dynamicRouteId)) {
      query["DynamicRouteId"] = request.dynamicRouteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDynamicRouteResponse>(await this.callApi(params, req, runtime), new DeleteDynamicRouteResponse({}));
    } else {
      return $dara.cast<DeleteDynamicRouteResponse>(await this.execute(params, req, runtime), new DeleteDynamicRouteResponse({}));
    }

  }

  /**
   * 删除动态路由
   * 
   * @param request - DeleteDynamicRouteRequest
   * @returns DeleteDynamicRouteResponse
   */
  async deleteDynamicRoute(request: DeleteDynamicRouteRequest): Promise<DeleteDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 删除指定自定义身份源部门
   * 
   * @param request - DeleteIdpDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdpDepartmentResponse
   */
  async deleteIdpDepartmentWithOptions(request: DeleteIdpDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<DeleteIdpDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIdpDepartment",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteIdpDepartmentResponse>(await this.callApi(params, req, runtime), new DeleteIdpDepartmentResponse({}));
    } else {
      return $dara.cast<DeleteIdpDepartmentResponse>(await this.execute(params, req, runtime), new DeleteIdpDepartmentResponse({}));
    }

  }

  /**
   * 删除指定自定义身份源部门
   * 
   * @param request - DeleteIdpDepartmentRequest
   * @returns DeleteIdpDepartmentResponse
   */
  async deleteIdpDepartment(request: DeleteIdpDepartmentRequest): Promise<DeleteIdpDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIdpDepartmentWithOptions(request, runtime);
  }

  /**
   * 删除内网访问应用
   * 
   * @param request - DeletePrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateAccessApplicationResponse
   */
  async deletePrivateAccessApplicationWithOptions(request: DeletePrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<DeletePrivateAccessApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new DeletePrivateAccessApplicationResponse({}));
    } else {
      return $dara.cast<DeletePrivateAccessApplicationResponse>(await this.execute(params, req, runtime), new DeletePrivateAccessApplicationResponse({}));
    }

  }

  /**
   * 删除内网访问应用
   * 
   * @param request - DeletePrivateAccessApplicationRequest
   * @returns DeletePrivateAccessApplicationResponse
   */
  async deletePrivateAccessApplication(request: DeletePrivateAccessApplicationRequest): Promise<DeletePrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 删除内网访问策略
   * 
   * @param request - DeletePrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateAccessPolicyResponse
   */
  async deletePrivateAccessPolicyWithOptions(request: DeletePrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DeletePrivateAccessPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new DeletePrivateAccessPolicyResponse({}));
    } else {
      return $dara.cast<DeletePrivateAccessPolicyResponse>(await this.execute(params, req, runtime), new DeletePrivateAccessPolicyResponse({}));
    }

  }

  /**
   * 删除内网访问策略
   * 
   * @param request - DeletePrivateAccessPolicyRequest
   * @returns DeletePrivateAccessPolicyResponse
   */
  async deletePrivateAccessPolicy(request: DeletePrivateAccessPolicyRequest): Promise<DeletePrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 删除内网访问标签
   * 
   * @param request - DeletePrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateAccessTagResponse
   */
  async deletePrivateAccessTagWithOptions(request: DeletePrivateAccessTagRequest, runtime: $dara.RuntimeOptions): Promise<DeletePrivateAccessTagResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagId)) {
      body["TagId"] = request.tagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePrivateAccessTagResponse>(await this.callApi(params, req, runtime), new DeletePrivateAccessTagResponse({}));
    } else {
      return $dara.cast<DeletePrivateAccessTagResponse>(await this.execute(params, req, runtime), new DeletePrivateAccessTagResponse({}));
    }

  }

  /**
   * 删除内网访问标签
   * 
   * @param request - DeletePrivateAccessTagRequest
   * @returns DeletePrivateAccessTagResponse
   */
  async deletePrivateAccessTag(request: DeletePrivateAccessTagRequest): Promise<DeletePrivateAccessTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * 删除设备注册策略
   * 
   * @param request - DeleteRegistrationPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistrationPoliciesResponse
   */
  async deleteRegistrationPoliciesWithOptions(request: DeleteRegistrationPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRegistrationPoliciesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyIds)) {
      bodyFlat["PolicyIds"] = request.policyIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRegistrationPolicies",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRegistrationPoliciesResponse>(await this.callApi(params, req, runtime), new DeleteRegistrationPoliciesResponse({}));
    } else {
      return $dara.cast<DeleteRegistrationPoliciesResponse>(await this.execute(params, req, runtime), new DeleteRegistrationPoliciesResponse({}));
    }

  }

  /**
   * 删除设备注册策略
   * 
   * @param request - DeleteRegistrationPoliciesRequest
   * @returns DeleteRegistrationPoliciesResponse
   */
  async deleteRegistrationPolicies(request: DeleteRegistrationPoliciesRequest): Promise<DeleteRegistrationPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRegistrationPoliciesWithOptions(request, runtime);
  }

  /**
   * 批量删除用户非在线设备
   * 
   * @param request - DeleteUserDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserDevicesResponse
   */
  async deleteUserDevicesWithOptions(request: DeleteUserDevicesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserDevices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUserDevicesResponse>(await this.callApi(params, req, runtime), new DeleteUserDevicesResponse({}));
    } else {
      return $dara.cast<DeleteUserDevicesResponse>(await this.execute(params, req, runtime), new DeleteUserDevicesResponse({}));
    }

  }

  /**
   * 批量删除用户非在线设备
   * 
   * @param request - DeleteUserDevicesRequest
   * @returns DeleteUserDevicesResponse
   */
  async deleteUserDevices(request: DeleteUserDevicesRequest): Promise<DeleteUserDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserDevicesWithOptions(request, runtime);
  }

  /**
   * 删除用户组
   * 
   * @param request - DeleteUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroupWithOptions(request: DeleteUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userGroupId)) {
      body["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUserGroupResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupResponse({}));
    } else {
      return $dara.cast<DeleteUserGroupResponse>(await this.execute(params, req, runtime), new DeleteUserGroupResponse({}));
    }

  }

  /**
   * 删除用户组
   * 
   * @param request - DeleteUserGroupRequest
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  /**
   * 卸载connector的应用
   * 
   * @param tmpReq - DetachApplication2ConnectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachApplication2ConnectorResponse
   */
  async detachApplication2ConnectorWithOptions(tmpReq: DetachApplication2ConnectorRequest, runtime: $dara.RuntimeOptions): Promise<DetachApplication2ConnectorResponse> {
    tmpReq.validate();
    let request = new DetachApplication2ConnectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationIds)) {
      request.applicationIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationIds, "ApplicationIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIdsShrink)) {
      body["ApplicationIds"] = request.applicationIdsShrink;
    }

    if (!$dara.isNull(request.connectorId)) {
      body["ConnectorId"] = request.connectorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachApplication2Connector",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachApplication2ConnectorResponse>(await this.callApi(params, req, runtime), new DetachApplication2ConnectorResponse({}));
    } else {
      return $dara.cast<DetachApplication2ConnectorResponse>(await this.execute(params, req, runtime), new DetachApplication2ConnectorResponse({}));
    }

  }

  /**
   * 卸载connector的应用
   * 
   * @param request - DetachApplication2ConnectorRequest
   * @returns DetachApplication2ConnectorResponse
   */
  async detachApplication2Connector(request: DetachApplication2ConnectorRequest): Promise<DetachApplication2ConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachApplication2ConnectorWithOptions(request, runtime);
  }

  /**
   * 解绑业务策略与审批流程
   * 
   * @param request - DetachPolicy2ApprovalProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicy2ApprovalProcessResponse
   */
  async detachPolicy2ApprovalProcessWithOptions(request: DetachPolicy2ApprovalProcessRequest, runtime: $dara.RuntimeOptions): Promise<DetachPolicy2ApprovalProcessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.processId)) {
      body["ProcessId"] = request.processId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPolicy2ApprovalProcess",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachPolicy2ApprovalProcessResponse>(await this.callApi(params, req, runtime), new DetachPolicy2ApprovalProcessResponse({}));
    } else {
      return $dara.cast<DetachPolicy2ApprovalProcessResponse>(await this.execute(params, req, runtime), new DetachPolicy2ApprovalProcessResponse({}));
    }

  }

  /**
   * 解绑业务策略与审批流程
   * 
   * @param request - DetachPolicy2ApprovalProcessRequest
   * @returns DetachPolicy2ApprovalProcessResponse
   */
  async detachPolicy2ApprovalProcess(request: DetachPolicy2ApprovalProcessRequest): Promise<DetachPolicy2ApprovalProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicy2ApprovalProcessWithOptions(request, runtime);
  }

  /**
   * 批量查询用户设备列表
   * 
   * @param request - ExportUserDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportUserDevicesResponse
   */
  async exportUserDevicesWithOptions(request: ExportUserDevicesRequest, runtime: $dara.RuntimeOptions): Promise<ExportUserDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appStatuses)) {
      bodyFlat["AppStatuses"] = request.appStatuses;
    }

    if (!$dara.isNull(request.department)) {
      body["Department"] = request.department;
    }

    if (!$dara.isNull(request.deviceBelong)) {
      body["DeviceBelong"] = request.deviceBelong;
    }

    if (!$dara.isNull(request.deviceStatuses)) {
      bodyFlat["DeviceStatuses"] = request.deviceStatuses;
    }

    if (!$dara.isNull(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    if (!$dara.isNull(request.deviceTypes)) {
      bodyFlat["DeviceTypes"] = request.deviceTypes;
    }

    if (!$dara.isNull(request.dlpStatuses)) {
      bodyFlat["DlpStatuses"] = request.dlpStatuses;
    }

    if (!$dara.isNull(request.hostname)) {
      body["Hostname"] = request.hostname;
    }

    if (!$dara.isNull(request.iaStatuses)) {
      bodyFlat["IaStatuses"] = request.iaStatuses;
    }

    if (!$dara.isNull(request.mac)) {
      body["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.nacStatuses)) {
      bodyFlat["NacStatuses"] = request.nacStatuses;
    }

    if (!$dara.isNull(request.paStatuses)) {
      bodyFlat["PaStatuses"] = request.paStatuses;
    }

    if (!$dara.isNull(request.saseUserId)) {
      body["SaseUserId"] = request.saseUserId;
    }

    if (!$dara.isNull(request.sharingStatus)) {
      body["SharingStatus"] = request.sharingStatus;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportUserDevices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExportUserDevicesResponse>(await this.callApi(params, req, runtime), new ExportUserDevicesResponse({}));
    } else {
      return $dara.cast<ExportUserDevicesResponse>(await this.execute(params, req, runtime), new ExportUserDevicesResponse({}));
    }

  }

  /**
   * 批量查询用户设备列表
   * 
   * @param request - ExportUserDevicesRequest
   * @returns ExportUserDevicesResponse
   */
  async exportUserDevices(request: ExportUserDevicesRequest): Promise<ExportUserDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportUserDevicesWithOptions(request, runtime);
  }

  /**
   * 查询已启用的身份源配置
   * 
   * @param request - GetActiveIdpConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetActiveIdpConfigResponse
   */
  async getActiveIdpConfigWithOptions(runtime: $dara.RuntimeOptions): Promise<GetActiveIdpConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetActiveIdpConfig",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetActiveIdpConfigResponse>(await this.callApi(params, req, runtime), new GetActiveIdpConfigResponse({}));
    } else {
      return $dara.cast<GetActiveIdpConfigResponse>(await this.execute(params, req, runtime), new GetActiveIdpConfigResponse({}));
    }

  }

  /**
   * 查询已启用的身份源配置
   * @returns GetActiveIdpConfigResponse
   */
  async getActiveIdpConfig(): Promise<GetActiveIdpConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getActiveIdpConfigWithOptions(runtime);
  }

  /**
   * 查询审批
   * 
   * @param request - GetApprovalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApprovalResponse
   */
  async getApprovalWithOptions(request: GetApprovalRequest, runtime: $dara.RuntimeOptions): Promise<GetApprovalResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApproval",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetApprovalResponse>(await this.callApi(params, req, runtime), new GetApprovalResponse({}));
    } else {
      return $dara.cast<GetApprovalResponse>(await this.execute(params, req, runtime), new GetApprovalResponse({}));
    }

  }

  /**
   * 查询审批
   * 
   * @param request - GetApprovalRequest
   * @returns GetApprovalResponse
   */
  async getApproval(request: GetApprovalRequest): Promise<GetApprovalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApprovalWithOptions(request, runtime);
  }

  /**
   * 查询审批流程
   * 
   * @param request - GetApprovalProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApprovalProcessResponse
   */
  async getApprovalProcessWithOptions(request: GetApprovalProcessRequest, runtime: $dara.RuntimeOptions): Promise<GetApprovalProcessResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApprovalProcess",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetApprovalProcessResponse>(await this.callApi(params, req, runtime), new GetApprovalProcessResponse({}));
    } else {
      return $dara.cast<GetApprovalProcessResponse>(await this.execute(params, req, runtime), new GetApprovalProcessResponse({}));
    }

  }

  /**
   * 查询审批流程
   * 
   * @param request - GetApprovalProcessRequest
   * @returns GetApprovalProcessResponse
   */
  async getApprovalProcess(request: GetApprovalProcessRequest): Promise<GetApprovalProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApprovalProcessWithOptions(request, runtime);
  }

  /**
   * 查询审批动态模板
   * 
   * @param request - GetApprovalSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApprovalSchemaResponse
   */
  async getApprovalSchemaWithOptions(request: GetApprovalSchemaRequest, runtime: $dara.RuntimeOptions): Promise<GetApprovalSchemaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApprovalSchema",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetApprovalSchemaResponse>(await this.callApi(params, req, runtime), new GetApprovalSchemaResponse({}));
    } else {
      return $dara.cast<GetApprovalSchemaResponse>(await this.execute(params, req, runtime), new GetApprovalSchemaResponse({}));
    }

  }

  /**
   * 查询审批动态模板
   * 
   * @param request - GetApprovalSchemaRequest
   * @returns GetApprovalSchemaResponse
   */
  async getApprovalSchema(request: GetApprovalSchemaRequest): Promise<GetApprovalSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApprovalSchemaWithOptions(request, runtime);
  }

  /**
   * 查询自启动与防卸载策略配置
   * 
   * @param request - GetBootAndAntiUninstallPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBootAndAntiUninstallPolicyResponse
   */
  async getBootAndAntiUninstallPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<GetBootAndAntiUninstallPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetBootAndAntiUninstallPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetBootAndAntiUninstallPolicyResponse>(await this.callApi(params, req, runtime), new GetBootAndAntiUninstallPolicyResponse({}));
    } else {
      return $dara.cast<GetBootAndAntiUninstallPolicyResponse>(await this.execute(params, req, runtime), new GetBootAndAntiUninstallPolicyResponse({}));
    }

  }

  /**
   * 查询自启动与防卸载策略配置
   * @returns GetBootAndAntiUninstallPolicyResponse
   */
  async getBootAndAntiUninstallPolicy(): Promise<GetBootAndAntiUninstallPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBootAndAntiUninstallPolicyWithOptions(runtime);
  }

  /**
   * 查询自定义身份源指定用户
   * 
   * @param request - GetClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientUserResponse
   */
  async getClientUserWithOptions(request: GetClientUserRequest, runtime: $dara.RuntimeOptions): Promise<GetClientUserResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetClientUserResponse>(await this.callApi(params, req, runtime), new GetClientUserResponse({}));
    } else {
      return $dara.cast<GetClientUserResponse>(await this.execute(params, req, runtime), new GetClientUserResponse({}));
    }

  }

  /**
   * 查询自定义身份源指定用户
   * 
   * @param request - GetClientUserRequest
   * @returns GetClientUserResponse
   */
  async getClientUser(request: GetClientUserRequest): Promise<GetClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientUserWithOptions(request, runtime);
  }

  /**
   * 查询动态路由详情
   * 
   * @param request - GetDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDynamicRouteResponse
   */
  async getDynamicRouteWithOptions(request: GetDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<GetDynamicRouteResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDynamicRouteResponse>(await this.callApi(params, req, runtime), new GetDynamicRouteResponse({}));
    } else {
      return $dara.cast<GetDynamicRouteResponse>(await this.execute(params, req, runtime), new GetDynamicRouteResponse({}));
    }

  }

  /**
   * 查询动态路由详情
   * 
   * @param request - GetDynamicRouteRequest
   * @returns GetDynamicRouteResponse
   */
  async getDynamicRoute(request: GetDynamicRouteRequest): Promise<GetDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 查询身份源配置详情
   * 
   * @param request - GetIdpConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdpConfigResponse
   */
  async getIdpConfigWithOptions(request: GetIdpConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetIdpConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdpConfig",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetIdpConfigResponse>(await this.callApi(params, req, runtime), new GetIdpConfigResponse({}));
    } else {
      return $dara.cast<GetIdpConfigResponse>(await this.execute(params, req, runtime), new GetIdpConfigResponse({}));
    }

  }

  /**
   * 查询身份源配置详情
   * 
   * @param request - GetIdpConfigRequest
   * @returns GetIdpConfigResponse
   */
  async getIdpConfig(request: GetIdpConfigRequest): Promise<GetIdpConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdpConfigWithOptions(request, runtime);
  }

  /**
   * 查询内网访问应用详情
   * 
   * @param request - GetPrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrivateAccessApplicationResponse
   */
  async getPrivateAccessApplicationWithOptions(request: GetPrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<GetPrivateAccessApplicationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new GetPrivateAccessApplicationResponse({}));
    } else {
      return $dara.cast<GetPrivateAccessApplicationResponse>(await this.execute(params, req, runtime), new GetPrivateAccessApplicationResponse({}));
    }

  }

  /**
   * 查询内网访问应用详情
   * 
   * @param request - GetPrivateAccessApplicationRequest
   * @returns GetPrivateAccessApplicationResponse
   */
  async getPrivateAccessApplication(request: GetPrivateAccessApplicationRequest): Promise<GetPrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 查询内网访问策略详情
   * 
   * @param request - GetPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrivateAccessPolicyResponse
   */
  async getPrivateAccessPolicyWithOptions(request: GetPrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<GetPrivateAccessPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new GetPrivateAccessPolicyResponse({}));
    } else {
      return $dara.cast<GetPrivateAccessPolicyResponse>(await this.execute(params, req, runtime), new GetPrivateAccessPolicyResponse({}));
    }

  }

  /**
   * 查询内网访问策略详情
   * 
   * @param request - GetPrivateAccessPolicyRequest
   * @returns GetPrivateAccessPolicyResponse
   */
  async getPrivateAccessPolicy(request: GetPrivateAccessPolicyRequest): Promise<GetPrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 查询设备注册策略详情
   * 
   * @param request - GetRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegistrationPolicyResponse
   */
  async getRegistrationPolicyWithOptions(request: GetRegistrationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<GetRegistrationPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new GetRegistrationPolicyResponse({}));
    } else {
      return $dara.cast<GetRegistrationPolicyResponse>(await this.execute(params, req, runtime), new GetRegistrationPolicyResponse({}));
    }

  }

  /**
   * 查询设备注册策略详情
   * 
   * @param request - GetRegistrationPolicyRequest
   * @returns GetRegistrationPolicyResponse
   */
  async getRegistrationPolicy(request: GetRegistrationPolicyRequest): Promise<GetRegistrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * 查询用户设备详情
   * 
   * @param request - GetUserDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserDeviceResponse
   */
  async getUserDeviceWithOptions(request: GetUserDeviceRequest, runtime: $dara.RuntimeOptions): Promise<GetUserDeviceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserDevice",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUserDeviceResponse>(await this.callApi(params, req, runtime), new GetUserDeviceResponse({}));
    } else {
      return $dara.cast<GetUserDeviceResponse>(await this.execute(params, req, runtime), new GetUserDeviceResponse({}));
    }

  }

  /**
   * 查询用户设备详情
   * 
   * @param request - GetUserDeviceRequest
   * @returns GetUserDeviceResponse
   */
  async getUserDevice(request: GetUserDeviceRequest): Promise<GetUserDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserDeviceWithOptions(request, runtime);
  }

  /**
   * 查询用户组详情
   * 
   * @param request - GetUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserGroupResponse
   */
  async getUserGroupWithOptions(request: GetUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<GetUserGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUserGroupResponse>(await this.callApi(params, req, runtime), new GetUserGroupResponse({}));
    } else {
      return $dara.cast<GetUserGroupResponse>(await this.execute(params, req, runtime), new GetUserGroupResponse({}));
    }

  }

  /**
   * 查询用户组详情
   * 
   * @param request - GetUserGroupRequest
   * @returns GetUserGroupResponse
   */
  async getUserGroup(request: GetUserGroupRequest): Promise<GetUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserGroupWithOptions(request, runtime);
  }

  /**
   * 查询嵌入水印任务
   * 
   * @param request - GetWmEmbedTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWmEmbedTaskResponse
   */
  async getWmEmbedTaskWithOptions(request: GetWmEmbedTaskRequest, runtime: $dara.RuntimeOptions): Promise<GetWmEmbedTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWmEmbedTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetWmEmbedTaskResponse>(await this.callApi(params, req, runtime), new GetWmEmbedTaskResponse({}));
    } else {
      return $dara.cast<GetWmEmbedTaskResponse>(await this.execute(params, req, runtime), new GetWmEmbedTaskResponse({}));
    }

  }

  /**
   * 查询嵌入水印任务
   * 
   * @param request - GetWmEmbedTaskRequest
   * @returns GetWmEmbedTaskResponse
   */
  async getWmEmbedTask(request: GetWmEmbedTaskRequest): Promise<GetWmEmbedTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWmEmbedTaskWithOptions(request, runtime);
  }

  /**
   * 查询文件水印提取任务详情
   * 
   * @param request - GetWmExtractTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWmExtractTaskResponse
   */
  async getWmExtractTaskWithOptions(request: GetWmExtractTaskRequest, runtime: $dara.RuntimeOptions): Promise<GetWmExtractTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWmExtractTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetWmExtractTaskResponse>(await this.callApi(params, req, runtime), new GetWmExtractTaskResponse({}));
    } else {
      return $dara.cast<GetWmExtractTaskResponse>(await this.execute(params, req, runtime), new GetWmExtractTaskResponse({}));
    }

  }

  /**
   * 查询文件水印提取任务详情
   * 
   * @param request - GetWmExtractTaskRequest
   * @returns GetWmExtractTaskResponse
   */
  async getWmExtractTask(request: GetWmExtractTaskRequest): Promise<GetWmExtractTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWmExtractTaskWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问策略的应用
   * 
   * @param request - ListApplicationsForPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForPrivateAccessPolicyResponse
   */
  async listApplicationsForPrivateAccessPolicyWithOptions(request: ListApplicationsForPrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ListApplicationsForPrivateAccessPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListApplicationsForPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new ListApplicationsForPrivateAccessPolicyResponse({}));
    } else {
      return $dara.cast<ListApplicationsForPrivateAccessPolicyResponse>(await this.execute(params, req, runtime), new ListApplicationsForPrivateAccessPolicyResponse({}));
    }

  }

  /**
   * 批量查询内网访问策略的应用
   * 
   * @param request - ListApplicationsForPrivateAccessPolicyRequest
   * @returns ListApplicationsForPrivateAccessPolicyResponse
   */
  async listApplicationsForPrivateAccessPolicy(request: ListApplicationsForPrivateAccessPolicyRequest): Promise<ListApplicationsForPrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问标签的应用
   * 
   * @param request - ListApplicationsForPrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForPrivateAccessTagResponse
   */
  async listApplicationsForPrivateAccessTagWithOptions(request: ListApplicationsForPrivateAccessTagRequest, runtime: $dara.RuntimeOptions): Promise<ListApplicationsForPrivateAccessTagResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForPrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListApplicationsForPrivateAccessTagResponse>(await this.callApi(params, req, runtime), new ListApplicationsForPrivateAccessTagResponse({}));
    } else {
      return $dara.cast<ListApplicationsForPrivateAccessTagResponse>(await this.execute(params, req, runtime), new ListApplicationsForPrivateAccessTagResponse({}));
    }

  }

  /**
   * 批量查询内网访问标签的应用
   * 
   * @param request - ListApplicationsForPrivateAccessTagRequest
   * @returns ListApplicationsForPrivateAccessTagResponse
   */
  async listApplicationsForPrivateAccessTag(request: ListApplicationsForPrivateAccessTagRequest): Promise<ListApplicationsForPrivateAccessTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForPrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * 列表查询审批流程
   * 
   * @param request - ListApprovalProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApprovalProcessesResponse
   */
  async listApprovalProcessesWithOptions(request: ListApprovalProcessesRequest, runtime: $dara.RuntimeOptions): Promise<ListApprovalProcessesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApprovalProcesses",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListApprovalProcessesResponse>(await this.callApi(params, req, runtime), new ListApprovalProcessesResponse({}));
    } else {
      return $dara.cast<ListApprovalProcessesResponse>(await this.execute(params, req, runtime), new ListApprovalProcessesResponse({}));
    }

  }

  /**
   * 列表查询审批流程
   * 
   * @param request - ListApprovalProcessesRequest
   * @returns ListApprovalProcessesResponse
   */
  async listApprovalProcesses(request: ListApprovalProcessesRequest): Promise<ListApprovalProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApprovalProcessesWithOptions(request, runtime);
  }

  /**
   * 查询审批渲染模板关联的流程
   * 
   * @param request - ListApprovalProcessesForApprovalSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApprovalProcessesForApprovalSchemasResponse
   */
  async listApprovalProcessesForApprovalSchemasWithOptions(request: ListApprovalProcessesForApprovalSchemasRequest, runtime: $dara.RuntimeOptions): Promise<ListApprovalProcessesForApprovalSchemasResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApprovalProcessesForApprovalSchemas",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListApprovalProcessesForApprovalSchemasResponse>(await this.callApi(params, req, runtime), new ListApprovalProcessesForApprovalSchemasResponse({}));
    } else {
      return $dara.cast<ListApprovalProcessesForApprovalSchemasResponse>(await this.execute(params, req, runtime), new ListApprovalProcessesForApprovalSchemasResponse({}));
    }

  }

  /**
   * 查询审批渲染模板关联的流程
   * 
   * @param request - ListApprovalProcessesForApprovalSchemasRequest
   * @returns ListApprovalProcessesForApprovalSchemasResponse
   */
  async listApprovalProcessesForApprovalSchemas(request: ListApprovalProcessesForApprovalSchemasRequest): Promise<ListApprovalProcessesForApprovalSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApprovalProcessesForApprovalSchemasWithOptions(request, runtime);
  }

  /**
   * 列表查询审批动态模板
   * 
   * @param request - ListApprovalSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApprovalSchemasResponse
   */
  async listApprovalSchemasWithOptions(request: ListApprovalSchemasRequest, runtime: $dara.RuntimeOptions): Promise<ListApprovalSchemasResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApprovalSchemas",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListApprovalSchemasResponse>(await this.callApi(params, req, runtime), new ListApprovalSchemasResponse({}));
    } else {
      return $dara.cast<ListApprovalSchemasResponse>(await this.execute(params, req, runtime), new ListApprovalSchemasResponse({}));
    }

  }

  /**
   * 列表查询审批动态模板
   * 
   * @param request - ListApprovalSchemasRequest
   * @returns ListApprovalSchemasResponse
   */
  async listApprovalSchemas(request: ListApprovalSchemasRequest): Promise<ListApprovalSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApprovalSchemasWithOptions(request, runtime);
  }

  /**
   * 查询审批流程关联的渲染模板
   * 
   * @param request - ListApprovalSchemasForApprovalProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApprovalSchemasForApprovalProcessesResponse
   */
  async listApprovalSchemasForApprovalProcessesWithOptions(request: ListApprovalSchemasForApprovalProcessesRequest, runtime: $dara.RuntimeOptions): Promise<ListApprovalSchemasForApprovalProcessesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApprovalSchemasForApprovalProcesses",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListApprovalSchemasForApprovalProcessesResponse>(await this.callApi(params, req, runtime), new ListApprovalSchemasForApprovalProcessesResponse({}));
    } else {
      return $dara.cast<ListApprovalSchemasForApprovalProcessesResponse>(await this.execute(params, req, runtime), new ListApprovalSchemasForApprovalProcessesResponse({}));
    }

  }

  /**
   * 查询审批流程关联的渲染模板
   * 
   * @param request - ListApprovalSchemasForApprovalProcessesRequest
   * @returns ListApprovalSchemasForApprovalProcessesResponse
   */
  async listApprovalSchemasForApprovalProcesses(request: ListApprovalSchemasForApprovalProcessesRequest): Promise<ListApprovalSchemasForApprovalProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApprovalSchemasForApprovalProcessesWithOptions(request, runtime);
  }

  /**
   * 批量查询审批
   * 
   * @param request - ListApprovalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApprovalsResponse
   */
  async listApprovalsWithOptions(request: ListApprovalsRequest, runtime: $dara.RuntimeOptions): Promise<ListApprovalsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApprovals",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListApprovalsResponse>(await this.callApi(params, req, runtime), new ListApprovalsResponse({}));
    } else {
      return $dara.cast<ListApprovalsResponse>(await this.execute(params, req, runtime), new ListApprovalsResponse({}));
    }

  }

  /**
   * 批量查询审批
   * 
   * @param request - ListApprovalsRequest
   * @returns ListApprovalsResponse
   */
  async listApprovals(request: ListApprovalsRequest): Promise<ListApprovalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApprovalsWithOptions(request, runtime);
  }

  /**
   * 查询自定义身份源用户
   * 
   * @param request - ListClientUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientUsersResponse
   */
  async listClientUsersWithOptions(request: ListClientUsersRequest, runtime: $dara.RuntimeOptions): Promise<ListClientUsersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClientUsers",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListClientUsersResponse>(await this.callApi(params, req, runtime), new ListClientUsersResponse({}));
    } else {
      return $dara.cast<ListClientUsersResponse>(await this.execute(params, req, runtime), new ListClientUsersResponse({}));
    }

  }

  /**
   * 查询自定义身份源用户
   * 
   * @param request - ListClientUsersRequest
   * @returns ListClientUsersResponse
   */
  async listClientUsers(request: ListClientUsersRequest): Promise<ListClientUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientUsersWithOptions(request, runtime);
  }

  /**
   * 批量查询connector
   * 
   * @param request - ListConnectorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectorsResponse
   */
  async listConnectorsWithOptions(request: ListConnectorsRequest, runtime: $dara.RuntimeOptions): Promise<ListConnectorsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConnectors",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListConnectorsResponse>(await this.callApi(params, req, runtime), new ListConnectorsResponse({}));
    } else {
      return $dara.cast<ListConnectorsResponse>(await this.execute(params, req, runtime), new ListConnectorsResponse({}));
    }

  }

  /**
   * 批量查询connector
   * 
   * @param request - ListConnectorsRequest
   * @returns ListConnectorsResponse
   */
  async listConnectors(request: ListConnectorsRequest): Promise<ListConnectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConnectorsWithOptions(request, runtime);
  }

  /**
   * 批量查询动态路由的地域
   * 
   * @param request - ListDynamicRouteRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDynamicRouteRegionsResponse
   */
  async listDynamicRouteRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<ListDynamicRouteRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListDynamicRouteRegions",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDynamicRouteRegionsResponse>(await this.callApi(params, req, runtime), new ListDynamicRouteRegionsResponse({}));
    } else {
      return $dara.cast<ListDynamicRouteRegionsResponse>(await this.execute(params, req, runtime), new ListDynamicRouteRegionsResponse({}));
    }

  }

  /**
   * 批量查询动态路由的地域
   * @returns ListDynamicRouteRegionsResponse
   */
  async listDynamicRouteRegions(): Promise<ListDynamicRouteRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDynamicRouteRegionsWithOptions(runtime);
  }

  /**
   * 批量查询动态路由
   * 
   * @param request - ListDynamicRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDynamicRoutesResponse
   */
  async listDynamicRoutesWithOptions(request: ListDynamicRoutesRequest, runtime: $dara.RuntimeOptions): Promise<ListDynamicRoutesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDynamicRoutes",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDynamicRoutesResponse>(await this.callApi(params, req, runtime), new ListDynamicRoutesResponse({}));
    } else {
      return $dara.cast<ListDynamicRoutesResponse>(await this.execute(params, req, runtime), new ListDynamicRoutesResponse({}));
    }

  }

  /**
   * 批量查询动态路由
   * 
   * @param request - ListDynamicRoutesRequest
   * @returns ListDynamicRoutesResponse
   */
  async listDynamicRoutes(request: ListDynamicRoutesRequest): Promise<ListDynamicRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDynamicRoutesWithOptions(request, runtime);
  }

  /**
   * 批量查询超额注册申请列表
   * 
   * @param request - ListExcessiveDeviceRegistrationApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExcessiveDeviceRegistrationApplicationsResponse
   */
  async listExcessiveDeviceRegistrationApplicationsWithOptions(request: ListExcessiveDeviceRegistrationApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<ListExcessiveDeviceRegistrationApplicationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExcessiveDeviceRegistrationApplications",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListExcessiveDeviceRegistrationApplicationsResponse>(await this.callApi(params, req, runtime), new ListExcessiveDeviceRegistrationApplicationsResponse({}));
    } else {
      return $dara.cast<ListExcessiveDeviceRegistrationApplicationsResponse>(await this.execute(params, req, runtime), new ListExcessiveDeviceRegistrationApplicationsResponse({}));
    }

  }

  /**
   * 批量查询超额注册申请列表
   * 
   * @param request - ListExcessiveDeviceRegistrationApplicationsRequest
   * @returns ListExcessiveDeviceRegistrationApplicationsResponse
   */
  async listExcessiveDeviceRegistrationApplications(request: ListExcessiveDeviceRegistrationApplicationsRequest): Promise<ListExcessiveDeviceRegistrationApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExcessiveDeviceRegistrationApplicationsWithOptions(request, runtime);
  }

  /**
   * 查询IDP配置
   * 
   * @param request - ListIdpConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdpConfigsResponse
   */
  async listIdpConfigsWithOptions(request: ListIdpConfigsRequest, runtime: $dara.RuntimeOptions): Promise<ListIdpConfigsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdpConfigs",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIdpConfigsResponse>(await this.callApi(params, req, runtime), new ListIdpConfigsResponse({}));
    } else {
      return $dara.cast<ListIdpConfigsResponse>(await this.execute(params, req, runtime), new ListIdpConfigsResponse({}));
    }

  }

  /**
   * 查询IDP配置
   * 
   * @param request - ListIdpConfigsRequest
   * @returns ListIdpConfigsResponse
   */
  async listIdpConfigs(request: ListIdpConfigsRequest): Promise<ListIdpConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdpConfigsWithOptions(request, runtime);
  }

  /**
   * 查询自定义身份源部门
   * 
   * @param request - ListIdpDepartmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdpDepartmentsResponse
   */
  async listIdpDepartmentsWithOptions(request: ListIdpDepartmentsRequest, runtime: $dara.RuntimeOptions): Promise<ListIdpDepartmentsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdpDepartments",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIdpDepartmentsResponse>(await this.callApi(params, req, runtime), new ListIdpDepartmentsResponse({}));
    } else {
      return $dara.cast<ListIdpDepartmentsResponse>(await this.execute(params, req, runtime), new ListIdpDepartmentsResponse({}));
    }

  }

  /**
   * 查询自定义身份源部门
   * 
   * @param request - ListIdpDepartmentsRequest
   * @returns ListIdpDepartmentsResponse
   */
  async listIdpDepartments(request: ListIdpDepartmentsRequest): Promise<ListIdpDepartmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdpDepartmentsWithOptions(request, runtime);
  }

  /**
   * 入网用户列表
   * 
   * @param request - ListNacUserCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNacUserCertResponse
   */
  async listNacUserCertWithOptions(request: ListNacUserCertRequest, runtime: $dara.RuntimeOptions): Promise<ListNacUserCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.department)) {
      query["Department"] = request.department;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNacUserCert",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListNacUserCertResponse>(await this.callApi(params, req, runtime), new ListNacUserCertResponse({}));
    } else {
      return $dara.cast<ListNacUserCertResponse>(await this.execute(params, req, runtime), new ListNacUserCertResponse({}));
    }

  }

  /**
   * 入网用户列表
   * 
   * @param request - ListNacUserCertRequest
   * @returns ListNacUserCertResponse
   */
  async listNacUserCert(request: ListNacUserCertRequest): Promise<ListNacUserCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNacUserCertWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问应用的策略
   * 
   * @param request - ListPolicesForPrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicesForPrivateAccessApplicationResponse
   */
  async listPolicesForPrivateAccessApplicationWithOptions(request: ListPolicesForPrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<ListPolicesForPrivateAccessApplicationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicesForPrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPolicesForPrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new ListPolicesForPrivateAccessApplicationResponse({}));
    } else {
      return $dara.cast<ListPolicesForPrivateAccessApplicationResponse>(await this.execute(params, req, runtime), new ListPolicesForPrivateAccessApplicationResponse({}));
    }

  }

  /**
   * 批量查询内网访问应用的策略
   * 
   * @param request - ListPolicesForPrivateAccessApplicationRequest
   * @returns ListPolicesForPrivateAccessApplicationResponse
   */
  async listPolicesForPrivateAccessApplication(request: ListPolicesForPrivateAccessApplicationRequest): Promise<ListPolicesForPrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicesForPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问标签的策略
   * 
   * @param request - ListPolicesForPrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicesForPrivateAccessTagResponse
   */
  async listPolicesForPrivateAccessTagWithOptions(request: ListPolicesForPrivateAccessTagRequest, runtime: $dara.RuntimeOptions): Promise<ListPolicesForPrivateAccessTagResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicesForPrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPolicesForPrivateAccessTagResponse>(await this.callApi(params, req, runtime), new ListPolicesForPrivateAccessTagResponse({}));
    } else {
      return $dara.cast<ListPolicesForPrivateAccessTagResponse>(await this.execute(params, req, runtime), new ListPolicesForPrivateAccessTagResponse({}));
    }

  }

  /**
   * 批量查询内网访问标签的策略
   * 
   * @param request - ListPolicesForPrivateAccessTagRequest
   * @returns ListPolicesForPrivateAccessTagResponse
   */
  async listPolicesForPrivateAccessTag(request: ListPolicesForPrivateAccessTagRequest): Promise<ListPolicesForPrivateAccessTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicesForPrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * 批量查询用户组的策略
   * 
   * @param request - ListPolicesForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicesForUserGroupResponse
   */
  async listPolicesForUserGroupWithOptions(request: ListPolicesForUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<ListPolicesForUserGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicesForUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPolicesForUserGroupResponse>(await this.callApi(params, req, runtime), new ListPolicesForUserGroupResponse({}));
    } else {
      return $dara.cast<ListPolicesForUserGroupResponse>(await this.execute(params, req, runtime), new ListPolicesForUserGroupResponse({}));
    }

  }

  /**
   * 批量查询用户组的策略
   * 
   * @param request - ListPolicesForUserGroupRequest
   * @returns ListPolicesForUserGroupResponse
   */
  async listPolicesForUserGroup(request: ListPolicesForUserGroupRequest): Promise<ListPolicesForUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicesForUserGroupWithOptions(request, runtime);
  }

  /**
   * pop节点流量统计
   * 
   * @param request - ListPopTrafficStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPopTrafficStatisticsResponse
   */
  async listPopTrafficStatisticsWithOptions(request: ListPopTrafficStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<ListPopTrafficStatisticsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPopTrafficStatistics",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPopTrafficStatisticsResponse>(await this.callApi(params, req, runtime), new ListPopTrafficStatisticsResponse({}));
    } else {
      return $dara.cast<ListPopTrafficStatisticsResponse>(await this.execute(params, req, runtime), new ListPopTrafficStatisticsResponse({}));
    }

  }

  /**
   * pop节点流量统计
   * 
   * @param request - ListPopTrafficStatisticsRequest
   * @returns ListPopTrafficStatisticsResponse
   */
  async listPopTrafficStatistics(request: ListPopTrafficStatisticsRequest): Promise<ListPopTrafficStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPopTrafficStatisticsWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问应用
   * 
   * @param request - ListPrivateAccessApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessApplicationsResponse
   */
  async listPrivateAccessApplicationsWithOptions(request: ListPrivateAccessApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<ListPrivateAccessApplicationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateAccessApplications",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPrivateAccessApplicationsResponse>(await this.callApi(params, req, runtime), new ListPrivateAccessApplicationsResponse({}));
    } else {
      return $dara.cast<ListPrivateAccessApplicationsResponse>(await this.execute(params, req, runtime), new ListPrivateAccessApplicationsResponse({}));
    }

  }

  /**
   * 批量查询内网访问应用
   * 
   * @param request - ListPrivateAccessApplicationsRequest
   * @returns ListPrivateAccessApplicationsResponse
   */
  async listPrivateAccessApplications(request: ListPrivateAccessApplicationsRequest): Promise<ListPrivateAccessApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateAccessApplicationsWithOptions(request, runtime);
  }

  /**
   * 批量查询动态路由的内网访问应用
   * 
   * @param request - ListPrivateAccessApplicationsForDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessApplicationsForDynamicRouteResponse
   */
  async listPrivateAccessApplicationsForDynamicRouteWithOptions(request: ListPrivateAccessApplicationsForDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<ListPrivateAccessApplicationsForDynamicRouteResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateAccessApplicationsForDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPrivateAccessApplicationsForDynamicRouteResponse>(await this.callApi(params, req, runtime), new ListPrivateAccessApplicationsForDynamicRouteResponse({}));
    } else {
      return $dara.cast<ListPrivateAccessApplicationsForDynamicRouteResponse>(await this.execute(params, req, runtime), new ListPrivateAccessApplicationsForDynamicRouteResponse({}));
    }

  }

  /**
   * 批量查询动态路由的内网访问应用
   * 
   * @param request - ListPrivateAccessApplicationsForDynamicRouteRequest
   * @returns ListPrivateAccessApplicationsForDynamicRouteResponse
   */
  async listPrivateAccessApplicationsForDynamicRoute(request: ListPrivateAccessApplicationsForDynamicRouteRequest): Promise<ListPrivateAccessApplicationsForDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateAccessApplicationsForDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问策略
   * 
   * @param request - ListPrivateAccessPolicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessPolicesResponse
   */
  async listPrivateAccessPolicesWithOptions(request: ListPrivateAccessPolicesRequest, runtime: $dara.RuntimeOptions): Promise<ListPrivateAccessPolicesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateAccessPolices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPrivateAccessPolicesResponse>(await this.callApi(params, req, runtime), new ListPrivateAccessPolicesResponse({}));
    } else {
      return $dara.cast<ListPrivateAccessPolicesResponse>(await this.execute(params, req, runtime), new ListPrivateAccessPolicesResponse({}));
    }

  }

  /**
   * 批量查询内网访问策略
   * 
   * @param request - ListPrivateAccessPolicesRequest
   * @returns ListPrivateAccessPolicesResponse
   */
  async listPrivateAccessPolices(request: ListPrivateAccessPolicesRequest): Promise<ListPrivateAccessPolicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateAccessPolicesWithOptions(request, runtime);
  }

  /**
   * Queries the information about all internal access tags within the current Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessTagsResponse
   */
  async listPrivateAccessTagsWithOptions(request: ListPrivateAccessTagsRequest, runtime: $dara.RuntimeOptions): Promise<ListPrivateAccessTagsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateAccessTags",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPrivateAccessTagsResponse>(await this.callApi(params, req, runtime), new ListPrivateAccessTagsResponse({}));
    } else {
      return $dara.cast<ListPrivateAccessTagsResponse>(await this.execute(params, req, runtime), new ListPrivateAccessTagsResponse({}));
    }

  }

  /**
   * Queries the information about all internal access tags within the current Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessTagsRequest
   * @returns ListPrivateAccessTagsResponse
   */
  async listPrivateAccessTags(request: ListPrivateAccessTagsRequest): Promise<ListPrivateAccessTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateAccessTagsWithOptions(request, runtime);
  }

  /**
   * 批量查询动态路由的内网访问标签
   * 
   * @param request - ListPrivateAccessTagsForDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessTagsForDynamicRouteResponse
   */
  async listPrivateAccessTagsForDynamicRouteWithOptions(request: ListPrivateAccessTagsForDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<ListPrivateAccessTagsForDynamicRouteResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateAccessTagsForDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPrivateAccessTagsForDynamicRouteResponse>(await this.callApi(params, req, runtime), new ListPrivateAccessTagsForDynamicRouteResponse({}));
    } else {
      return $dara.cast<ListPrivateAccessTagsForDynamicRouteResponse>(await this.execute(params, req, runtime), new ListPrivateAccessTagsForDynamicRouteResponse({}));
    }

  }

  /**
   * 批量查询动态路由的内网访问标签
   * 
   * @param request - ListPrivateAccessTagsForDynamicRouteRequest
   * @returns ListPrivateAccessTagsForDynamicRouteResponse
   */
  async listPrivateAccessTagsForDynamicRoute(request: ListPrivateAccessTagsForDynamicRouteRequest): Promise<ListPrivateAccessTagsForDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateAccessTagsForDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 查询用户设备注册策略列表
   * 
   * @param request - ListRegistrationPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistrationPoliciesResponse
   */
  async listRegistrationPoliciesWithOptions(request: ListRegistrationPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<ListRegistrationPoliciesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegistrationPolicies",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRegistrationPoliciesResponse>(await this.callApi(params, req, runtime), new ListRegistrationPoliciesResponse({}));
    } else {
      return $dara.cast<ListRegistrationPoliciesResponse>(await this.execute(params, req, runtime), new ListRegistrationPoliciesResponse({}));
    }

  }

  /**
   * 查询用户设备注册策略列表
   * 
   * @param request - ListRegistrationPoliciesRequest
   * @returns ListRegistrationPoliciesResponse
   */
  async listRegistrationPolicies(request: ListRegistrationPoliciesRequest): Promise<ListRegistrationPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegistrationPoliciesWithOptions(request, runtime);
  }

  /**
   * 查询用户组相关的设备注册策略
   * 
   * @param request - ListRegistrationPoliciesForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistrationPoliciesForUserGroupResponse
   */
  async listRegistrationPoliciesForUserGroupWithOptions(request: ListRegistrationPoliciesForUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<ListRegistrationPoliciesForUserGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegistrationPoliciesForUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRegistrationPoliciesForUserGroupResponse>(await this.callApi(params, req, runtime), new ListRegistrationPoliciesForUserGroupResponse({}));
    } else {
      return $dara.cast<ListRegistrationPoliciesForUserGroupResponse>(await this.execute(params, req, runtime), new ListRegistrationPoliciesForUserGroupResponse({}));
    }

  }

  /**
   * 查询用户组相关的设备注册策略
   * 
   * @param request - ListRegistrationPoliciesForUserGroupRequest
   * @returns ListRegistrationPoliciesForUserGroupResponse
   */
  async listRegistrationPoliciesForUserGroup(request: ListRegistrationPoliciesForUserGroupRequest): Promise<ListRegistrationPoliciesForUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegistrationPoliciesForUserGroupWithOptions(request, runtime);
  }

  /**
   * 批量查询终端安装软件列表
   * 
   * @param request - ListSoftwareForUserDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSoftwareForUserDeviceResponse
   */
  async listSoftwareForUserDeviceWithOptions(request: ListSoftwareForUserDeviceRequest, runtime: $dara.RuntimeOptions): Promise<ListSoftwareForUserDeviceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSoftwareForUserDevice",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSoftwareForUserDeviceResponse>(await this.callApi(params, req, runtime), new ListSoftwareForUserDeviceResponse({}));
    } else {
      return $dara.cast<ListSoftwareForUserDeviceResponse>(await this.execute(params, req, runtime), new ListSoftwareForUserDeviceResponse({}));
    }

  }

  /**
   * 批量查询终端安装软件列表
   * 
   * @param request - ListSoftwareForUserDeviceRequest
   * @returns ListSoftwareForUserDeviceResponse
   */
  async listSoftwareForUserDevice(request: ListSoftwareForUserDeviceRequest): Promise<ListSoftwareForUserDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSoftwareForUserDeviceWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问应用的标签
   * 
   * @param request - ListTagsForPrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsForPrivateAccessApplicationResponse
   */
  async listTagsForPrivateAccessApplicationWithOptions(request: ListTagsForPrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<ListTagsForPrivateAccessApplicationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagsForPrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagsForPrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new ListTagsForPrivateAccessApplicationResponse({}));
    } else {
      return $dara.cast<ListTagsForPrivateAccessApplicationResponse>(await this.execute(params, req, runtime), new ListTagsForPrivateAccessApplicationResponse({}));
    }

  }

  /**
   * 批量查询内网访问应用的标签
   * 
   * @param request - ListTagsForPrivateAccessApplicationRequest
   * @returns ListTagsForPrivateAccessApplicationResponse
   */
  async listTagsForPrivateAccessApplication(request: ListTagsForPrivateAccessApplicationRequest): Promise<ListTagsForPrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagsForPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问策略的标签
   * 
   * @param request - ListTagsForPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsForPrivateAccessPolicyResponse
   */
  async listTagsForPrivateAccessPolicyWithOptions(request: ListTagsForPrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ListTagsForPrivateAccessPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagsForPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagsForPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new ListTagsForPrivateAccessPolicyResponse({}));
    } else {
      return $dara.cast<ListTagsForPrivateAccessPolicyResponse>(await this.execute(params, req, runtime), new ListTagsForPrivateAccessPolicyResponse({}));
    }

  }

  /**
   * 批量查询内网访问策略的标签
   * 
   * @param request - ListTagsForPrivateAccessPolicyRequest
   * @returns ListTagsForPrivateAccessPolicyResponse
   */
  async listTagsForPrivateAccessPolicy(request: ListTagsForPrivateAccessPolicyRequest): Promise<ListTagsForPrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagsForPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 列表查询卸载申请列表
   * 
   * @param request - ListUninstallApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUninstallApplicationsResponse
   */
  async listUninstallApplicationsWithOptions(request: ListUninstallApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<ListUninstallApplicationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUninstallApplications",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUninstallApplicationsResponse>(await this.callApi(params, req, runtime), new ListUninstallApplicationsResponse({}));
    } else {
      return $dara.cast<ListUninstallApplicationsResponse>(await this.execute(params, req, runtime), new ListUninstallApplicationsResponse({}));
    }

  }

  /**
   * 列表查询卸载申请列表
   * 
   * @param request - ListUninstallApplicationsRequest
   * @returns ListUninstallApplicationsResponse
   */
  async listUninstallApplications(request: ListUninstallApplicationsRequest): Promise<ListUninstallApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUninstallApplicationsWithOptions(request, runtime);
  }

  /**
   * 列表查询用户应用权限
   * 
   * @param request - ListUserApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserApplicationsResponse
   */
  async listUserApplicationsWithOptions(request: ListUserApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<ListUserApplicationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserApplications",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserApplicationsResponse>(await this.callApi(params, req, runtime), new ListUserApplicationsResponse({}));
    } else {
      return $dara.cast<ListUserApplicationsResponse>(await this.execute(params, req, runtime), new ListUserApplicationsResponse({}));
    }

  }

  /**
   * 列表查询用户应用权限
   * 
   * @param request - ListUserApplicationsRequest
   * @returns ListUserApplicationsResponse
   */
  async listUserApplications(request: ListUserApplicationsRequest): Promise<ListUserApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserApplicationsWithOptions(request, runtime);
  }

  /**
   * 批量查询用户设备列表
   * 
   * @param request - ListUserDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserDevicesResponse
   */
  async listUserDevicesWithOptions(request: ListUserDevicesRequest, runtime: $dara.RuntimeOptions): Promise<ListUserDevicesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserDevices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserDevicesResponse>(await this.callApi(params, req, runtime), new ListUserDevicesResponse({}));
    } else {
      return $dara.cast<ListUserDevicesResponse>(await this.execute(params, req, runtime), new ListUserDevicesResponse({}));
    }

  }

  /**
   * 批量查询用户设备列表
   * 
   * @param request - ListUserDevicesRequest
   * @returns ListUserDevicesResponse
   */
  async listUserDevices(request: ListUserDevicesRequest): Promise<ListUserDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserDevicesWithOptions(request, runtime);
  }

  /**
   * 批量查询用户组
   * 
   * @param request - ListUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsResponse
   */
  async listUserGroupsWithOptions(request: ListUserGroupsRequest, runtime: $dara.RuntimeOptions): Promise<ListUserGroupsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroups",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserGroupsResponse>(await this.callApi(params, req, runtime), new ListUserGroupsResponse({}));
    } else {
      return $dara.cast<ListUserGroupsResponse>(await this.execute(params, req, runtime), new ListUserGroupsResponse({}));
    }

  }

  /**
   * 批量查询用户组
   * 
   * @param request - ListUserGroupsRequest
   * @returns ListUserGroupsResponse
   */
  async listUserGroups(request: ListUserGroupsRequest): Promise<ListUserGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问策略的用户组
   * 
   * @param request - ListUserGroupsForPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsForPrivateAccessPolicyResponse
   */
  async listUserGroupsForPrivateAccessPolicyWithOptions(request: ListUserGroupsForPrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ListUserGroupsForPrivateAccessPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroupsForPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserGroupsForPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new ListUserGroupsForPrivateAccessPolicyResponse({}));
    } else {
      return $dara.cast<ListUserGroupsForPrivateAccessPolicyResponse>(await this.execute(params, req, runtime), new ListUserGroupsForPrivateAccessPolicyResponse({}));
    }

  }

  /**
   * 批量查询内网访问策略的用户组
   * 
   * @param request - ListUserGroupsForPrivateAccessPolicyRequest
   * @returns ListUserGroupsForPrivateAccessPolicyResponse
   */
  async listUserGroupsForPrivateAccessPolicy(request: ListUserGroupsForPrivateAccessPolicyRequest): Promise<ListUserGroupsForPrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsForPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 查询设备注册策略相关用户组
   * 
   * @param request - ListUserGroupsForRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsForRegistrationPolicyResponse
   */
  async listUserGroupsForRegistrationPolicyWithOptions(request: ListUserGroupsForRegistrationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ListUserGroupsForRegistrationPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroupsForRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserGroupsForRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new ListUserGroupsForRegistrationPolicyResponse({}));
    } else {
      return $dara.cast<ListUserGroupsForRegistrationPolicyResponse>(await this.execute(params, req, runtime), new ListUserGroupsForRegistrationPolicyResponse({}));
    }

  }

  /**
   * 查询设备注册策略相关用户组
   * 
   * @param request - ListUserGroupsForRegistrationPolicyRequest
   * @returns ListUserGroupsForRegistrationPolicyResponse
   */
  async listUserGroupsForRegistrationPolicy(request: ListUserGroupsForRegistrationPolicyRequest): Promise<ListUserGroupsForRegistrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsForRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * 列表查询用户零信任策略
   * 
   * @param request - ListUserPrivateAccessPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserPrivateAccessPoliciesResponse
   */
  async listUserPrivateAccessPoliciesWithOptions(request: ListUserPrivateAccessPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<ListUserPrivateAccessPoliciesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserPrivateAccessPolicies",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserPrivateAccessPoliciesResponse>(await this.callApi(params, req, runtime), new ListUserPrivateAccessPoliciesResponse({}));
    } else {
      return $dara.cast<ListUserPrivateAccessPoliciesResponse>(await this.execute(params, req, runtime), new ListUserPrivateAccessPoliciesResponse({}));
    }

  }

  /**
   * 列表查询用户零信任策略
   * 
   * @param request - ListUserPrivateAccessPoliciesRequest
   * @returns ListUserPrivateAccessPoliciesResponse
   */
  async listUserPrivateAccessPolicies(request: ListUserPrivateAccessPoliciesRequest): Promise<ListUserPrivateAccessPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserPrivateAccessPoliciesWithOptions(request, runtime);
  }

  /**
   * 列表查询登陆用户
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<ListUsersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
    } else {
      return $dara.cast<ListUsersResponse>(await this.execute(params, req, runtime), new ListUsersResponse({}));
    }

  }

  /**
   * 列表查询登陆用户
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * 根据数字水印信息查询字符串水印信息
   * 
   * @param request - LookupWmInfoMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LookupWmInfoMappingResponse
   */
  async lookupWmInfoMappingWithOptions(request: LookupWmInfoMappingRequest, runtime: $dara.RuntimeOptions): Promise<LookupWmInfoMappingResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LookupWmInfoMapping",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<LookupWmInfoMappingResponse>(await this.callApi(params, req, runtime), new LookupWmInfoMappingResponse({}));
    } else {
      return $dara.cast<LookupWmInfoMappingResponse>(await this.execute(params, req, runtime), new LookupWmInfoMappingResponse({}));
    }

  }

  /**
   * 根据数字水印信息查询字符串水印信息
   * 
   * @param request - LookupWmInfoMappingRequest
   * @returns LookupWmInfoMappingResponse
   */
  async lookupWmInfoMapping(request: LookupWmInfoMappingRequest): Promise<LookupWmInfoMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lookupWmInfoMappingWithOptions(request, runtime);
  }

  /**
   * 吊销用户登录会话
   * 
   * @param request - RevokeUserSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeUserSessionResponse
   */
  async revokeUserSessionWithOptions(request: RevokeUserSessionRequest, runtime: $dara.RuntimeOptions): Promise<RevokeUserSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.externalIds)) {
      query["ExternalIds"] = request.externalIds;
    }

    if (!$dara.isNull(request.idpId)) {
      query["IdpId"] = request.idpId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeUserSession",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RevokeUserSessionResponse>(await this.callApi(params, req, runtime), new RevokeUserSessionResponse({}));
    } else {
      return $dara.cast<RevokeUserSessionResponse>(await this.execute(params, req, runtime), new RevokeUserSessionResponse({}));
    }

  }

  /**
   * 吊销用户登录会话
   * 
   * @param request - RevokeUserSessionRequest
   * @returns RevokeUserSessionResponse
   */
  async revokeUserSession(request: RevokeUserSessionRequest): Promise<RevokeUserSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeUserSessionWithOptions(request, runtime);
  }

  /**
   * 更新审批流程
   * 
   * @param tmpReq - UpdateApprovalProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApprovalProcessResponse
   */
  async updateApprovalProcessWithOptions(tmpReq: UpdateApprovalProcessRequest, runtime: $dara.RuntimeOptions): Promise<UpdateApprovalProcessResponse> {
    tmpReq.validate();
    let request = new UpdateApprovalProcessShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.matchSchemas)) {
      request.matchSchemasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchSchemas, "MatchSchemas", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.matchSchemasShrink)) {
      body["MatchSchemas"] = request.matchSchemasShrink;
    }

    if (!$dara.isNull(request.processId)) {
      body["ProcessId"] = request.processId;
    }

    if (!$dara.isNull(request.processName)) {
      body["ProcessName"] = request.processName;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.processNodes)) {
      bodyFlat["ProcessNodes"] = request.processNodes;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApprovalProcess",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateApprovalProcessResponse>(await this.callApi(params, req, runtime), new UpdateApprovalProcessResponse({}));
    } else {
      return $dara.cast<UpdateApprovalProcessResponse>(await this.execute(params, req, runtime), new UpdateApprovalProcessResponse({}));
    }

  }

  /**
   * 更新审批流程
   * 
   * @param request - UpdateApprovalProcessRequest
   * @returns UpdateApprovalProcessResponse
   */
  async updateApprovalProcess(request: UpdateApprovalProcessRequest): Promise<UpdateApprovalProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApprovalProcessWithOptions(request, runtime);
  }

  /**
   * 修改审批状态
   * 
   * @param request - UpdateApprovalStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApprovalStatusResponse
   */
  async updateApprovalStatusWithOptions(request: UpdateApprovalStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateApprovalStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.approvalId)) {
      query["ApprovalId"] = request.approvalId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApprovalStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateApprovalStatusResponse>(await this.callApi(params, req, runtime), new UpdateApprovalStatusResponse({}));
    } else {
      return $dara.cast<UpdateApprovalStatusResponse>(await this.execute(params, req, runtime), new UpdateApprovalStatusResponse({}));
    }

  }

  /**
   * 修改审批状态
   * 
   * @param request - UpdateApprovalStatusRequest
   * @returns UpdateApprovalStatusResponse
   */
  async updateApprovalStatus(request: UpdateApprovalStatusRequest): Promise<UpdateApprovalStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApprovalStatusWithOptions(request, runtime);
  }

  /**
   * 更新自启动与防卸载策略配置
   * 
   * @param tmpReq - UpdateBootAndAntiUninstallPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBootAndAntiUninstallPolicyResponse
   */
  async updateBootAndAntiUninstallPolicyWithOptions(tmpReq: UpdateBootAndAntiUninstallPolicyRequest, runtime: $dara.RuntimeOptions): Promise<UpdateBootAndAntiUninstallPolicyResponse> {
    tmpReq.validate();
    let request = new UpdateBootAndAntiUninstallPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.blockContent)) {
      request.blockContentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.blockContent, "BlockContent", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowReport)) {
      body["AllowReport"] = request.allowReport;
    }

    if (!$dara.isNull(request.blockContentShrink)) {
      body["BlockContent"] = request.blockContentShrink;
    }

    if (!$dara.isNull(request.isAntiUninstall)) {
      body["IsAntiUninstall"] = request.isAntiUninstall;
    }

    if (!$dara.isNull(request.isBoot)) {
      body["IsBoot"] = request.isBoot;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.whitelistUsers)) {
      bodyFlat["WhitelistUsers"] = request.whitelistUsers;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBootAndAntiUninstallPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateBootAndAntiUninstallPolicyResponse>(await this.callApi(params, req, runtime), new UpdateBootAndAntiUninstallPolicyResponse({}));
    } else {
      return $dara.cast<UpdateBootAndAntiUninstallPolicyResponse>(await this.execute(params, req, runtime), new UpdateBootAndAntiUninstallPolicyResponse({}));
    }

  }

  /**
   * 更新自启动与防卸载策略配置
   * 
   * @param request - UpdateBootAndAntiUninstallPolicyRequest
   * @returns UpdateBootAndAntiUninstallPolicyResponse
   */
  async updateBootAndAntiUninstallPolicy(request: UpdateBootAndAntiUninstallPolicyRequest): Promise<UpdateBootAndAntiUninstallPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBootAndAntiUninstallPolicyWithOptions(request, runtime);
  }

  /**
   * 修改自定义身份源指定用户
   * 
   * @param request - UpdateClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientUserResponse
   */
  async updateClientUserWithOptions(request: UpdateClientUserRequest, runtime: $dara.RuntimeOptions): Promise<UpdateClientUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mobileNumber)) {
      query["MobileNumber"] = request.mobileNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateClientUserResponse>(await this.callApi(params, req, runtime), new UpdateClientUserResponse({}));
    } else {
      return $dara.cast<UpdateClientUserResponse>(await this.execute(params, req, runtime), new UpdateClientUserResponse({}));
    }

  }

  /**
   * 修改自定义身份源指定用户
   * 
   * @param request - UpdateClientUserRequest
   * @returns UpdateClientUserResponse
   */
  async updateClientUser(request: UpdateClientUserRequest): Promise<UpdateClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClientUserWithOptions(request, runtime);
  }

  /**
   * 修改自定义身份源指定用户密码
   * 
   * @param request - UpdateClientUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientUserPasswordResponse
   */
  async updateClientUserPasswordWithOptions(request: UpdateClientUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<UpdateClientUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClientUserPassword",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateClientUserPasswordResponse>(await this.callApi(params, req, runtime), new UpdateClientUserPasswordResponse({}));
    } else {
      return $dara.cast<UpdateClientUserPasswordResponse>(await this.execute(params, req, runtime), new UpdateClientUserPasswordResponse({}));
    }

  }

  /**
   * 修改自定义身份源指定用户密码
   * 
   * @param request - UpdateClientUserPasswordRequest
   * @returns UpdateClientUserPasswordResponse
   */
  async updateClientUserPassword(request: UpdateClientUserPasswordRequest): Promise<UpdateClientUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClientUserPasswordWithOptions(request, runtime);
  }

  /**
   * 修改自定义身份源指定用户启用状态
   * 
   * @param request - UpdateClientUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientUserStatusResponse
   */
  async updateClientUserStatusWithOptions(request: UpdateClientUserStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateClientUserStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClientUserStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateClientUserStatusResponse>(await this.callApi(params, req, runtime), new UpdateClientUserStatusResponse({}));
    } else {
      return $dara.cast<UpdateClientUserStatusResponse>(await this.execute(params, req, runtime), new UpdateClientUserStatusResponse({}));
    }

  }

  /**
   * 修改自定义身份源指定用户启用状态
   * 
   * @param request - UpdateClientUserStatusRequest
   * @returns UpdateClientUserStatusResponse
   */
  async updateClientUserStatus(request: UpdateClientUserStatusRequest): Promise<UpdateClientUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClientUserStatusWithOptions(request, runtime);
  }

  /**
   * 修改动态路由
   * 
   * @param request - UpdateDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDynamicRouteResponse
   */
  async updateDynamicRouteWithOptions(request: UpdateDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<UpdateDynamicRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dynamicRouteId)) {
      body["DynamicRouteId"] = request.dynamicRouteId;
    }

    if (!$dara.isNull(request.dynamicRouteType)) {
      body["DynamicRouteType"] = request.dynamicRouteType;
    }

    if (!$dara.isNull(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextHop)) {
      body["NextHop"] = request.nextHop;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionIds)) {
      bodyFlat["RegionIds"] = request.regionIds;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDynamicRouteResponse>(await this.callApi(params, req, runtime), new UpdateDynamicRouteResponse({}));
    } else {
      return $dara.cast<UpdateDynamicRouteResponse>(await this.execute(params, req, runtime), new UpdateDynamicRouteResponse({}));
    }

  }

  /**
   * 修改动态路由
   * 
   * @param request - UpdateDynamicRouteRequest
   * @returns UpdateDynamicRouteResponse
   */
  async updateDynamicRoute(request: UpdateDynamicRouteRequest): Promise<UpdateDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 批量更新超额注册申请状态
   * 
   * @param request - UpdateExcessiveDeviceRegistrationApplicationsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExcessiveDeviceRegistrationApplicationsStatusResponse
   */
  async updateExcessiveDeviceRegistrationApplicationsStatusWithOptions(request: UpdateExcessiveDeviceRegistrationApplicationsStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateExcessiveDeviceRegistrationApplicationsStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExcessiveDeviceRegistrationApplicationsStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateExcessiveDeviceRegistrationApplicationsStatusResponse>(await this.callApi(params, req, runtime), new UpdateExcessiveDeviceRegistrationApplicationsStatusResponse({}));
    } else {
      return $dara.cast<UpdateExcessiveDeviceRegistrationApplicationsStatusResponse>(await this.execute(params, req, runtime), new UpdateExcessiveDeviceRegistrationApplicationsStatusResponse({}));
    }

  }

  /**
   * 批量更新超额注册申请状态
   * 
   * @param request - UpdateExcessiveDeviceRegistrationApplicationsStatusRequest
   * @returns UpdateExcessiveDeviceRegistrationApplicationsStatusResponse
   */
  async updateExcessiveDeviceRegistrationApplicationsStatus(request: UpdateExcessiveDeviceRegistrationApplicationsStatusRequest): Promise<UpdateExcessiveDeviceRegistrationApplicationsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateExcessiveDeviceRegistrationApplicationsStatusWithOptions(request, runtime);
  }

  /**
   * 修改指定自定义身份源部门
   * 
   * @param request - UpdateIdpDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdpDepartmentResponse
   */
  async updateIdpDepartmentWithOptions(request: UpdateIdpDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<UpdateIdpDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!$dara.isNull(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIdpDepartment",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateIdpDepartmentResponse>(await this.callApi(params, req, runtime), new UpdateIdpDepartmentResponse({}));
    } else {
      return $dara.cast<UpdateIdpDepartmentResponse>(await this.execute(params, req, runtime), new UpdateIdpDepartmentResponse({}));
    }

  }

  /**
   * 修改指定自定义身份源部门
   * 
   * @param request - UpdateIdpDepartmentRequest
   * @returns UpdateIdpDepartmentResponse
   */
  async updateIdpDepartment(request: UpdateIdpDepartmentRequest): Promise<UpdateIdpDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIdpDepartmentWithOptions(request, runtime);
  }

  /**
   * 更新NAC User 状态
   * 
   * @param request - UpdateNacUserCertStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNacUserCertStatusResponse
   */
  async updateNacUserCertStatusWithOptions(request: UpdateNacUserCertStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateNacUserCertStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idList)) {
      bodyFlat["IdList"] = request.idList;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNacUserCertStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateNacUserCertStatusResponse>(await this.callApi(params, req, runtime), new UpdateNacUserCertStatusResponse({}));
    } else {
      return $dara.cast<UpdateNacUserCertStatusResponse>(await this.execute(params, req, runtime), new UpdateNacUserCertStatusResponse({}));
    }

  }

  /**
   * 更新NAC User 状态
   * 
   * @param request - UpdateNacUserCertStatusRequest
   * @returns UpdateNacUserCertStatusResponse
   */
  async updateNacUserCertStatus(request: UpdateNacUserCertStatusRequest): Promise<UpdateNacUserCertStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNacUserCertStatusWithOptions(request, runtime);
  }

  /**
   * 修改内网访问应用
   * 
   * @param request - UpdatePrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateAccessApplicationResponse
   */
  async updatePrivateAccessApplicationWithOptions(request: UpdatePrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<UpdatePrivateAccessApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addresses)) {
      bodyFlat["Addresses"] = request.addresses;
    }

    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.l7ProxyDomainAutomaticPrefix)) {
      body["L7ProxyDomainAutomaticPrefix"] = request.l7ProxyDomainAutomaticPrefix;
    }

    if (!$dara.isNull(request.l7ProxyDomainCustom)) {
      body["L7ProxyDomainCustom"] = request.l7ProxyDomainCustom;
    }

    if (!$dara.isNull(request.l7ProxyDomainPrivate)) {
      body["L7ProxyDomainPrivate"] = request.l7ProxyDomainPrivate;
    }

    if (!$dara.isNull(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.portRanges)) {
      bodyFlat["PortRanges"] = request.portRanges;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new UpdatePrivateAccessApplicationResponse({}));
    } else {
      return $dara.cast<UpdatePrivateAccessApplicationResponse>(await this.execute(params, req, runtime), new UpdatePrivateAccessApplicationResponse({}));
    }

  }

  /**
   * 修改内网访问应用
   * 
   * @param request - UpdatePrivateAccessApplicationRequest
   * @returns UpdatePrivateAccessApplicationResponse
   */
  async updatePrivateAccessApplication(request: UpdatePrivateAccessApplicationRequest): Promise<UpdatePrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 修改内网访问策略
   * 
   * @param request - UpdatePrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateAccessPolicyResponse
   */
  async updatePrivateAccessPolicyWithOptions(request: UpdatePrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<UpdatePrivateAccessPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.customUserAttributes)) {
      bodyFlat["CustomUserAttributes"] = request.customUserAttributes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.deviceAttributeAction)) {
      body["DeviceAttributeAction"] = request.deviceAttributeAction;
    }

    if (!$dara.isNull(request.deviceAttributeId)) {
      body["DeviceAttributeId"] = request.deviceAttributeId;
    }

    if (!$dara.isNull(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.policyAction)) {
      body["PolicyAction"] = request.policyAction;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    if (!$dara.isNull(request.triggerTemplateId)) {
      body["TriggerTemplateId"] = request.triggerTemplateId;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userGroupMode)) {
      body["UserGroupMode"] = request.userGroupMode;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new UpdatePrivateAccessPolicyResponse({}));
    } else {
      return $dara.cast<UpdatePrivateAccessPolicyResponse>(await this.execute(params, req, runtime), new UpdatePrivateAccessPolicyResponse({}));
    }

  }

  /**
   * 修改内网访问策略
   * 
   * @param request - UpdatePrivateAccessPolicyRequest
   * @returns UpdatePrivateAccessPolicyResponse
   */
  async updatePrivateAccessPolicy(request: UpdatePrivateAccessPolicyRequest): Promise<UpdatePrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 修改设备注册策略
   * 
   * @param tmpReq - UpdateRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRegistrationPolicyResponse
   */
  async updateRegistrationPolicyWithOptions(tmpReq: UpdateRegistrationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRegistrationPolicyResponse> {
    tmpReq.validate();
    let request = new UpdateRegistrationPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.companyLimitCount)) {
      request.companyLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.companyLimitCount, "CompanyLimitCount", "json");
    }

    if (!$dara.isNull(tmpReq.personalLimitCount)) {
      request.personalLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.personalLimitCount, "PersonalLimitCount", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyLimitCountShrink)) {
      body["CompanyLimitCount"] = request.companyLimitCountShrink;
    }

    if (!$dara.isNull(request.companyLimitType)) {
      body["CompanyLimitType"] = request.companyLimitType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.matchMode)) {
      body["MatchMode"] = request.matchMode;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.personalLimitCountShrink)) {
      body["PersonalLimitCount"] = request.personalLimitCountShrink;
    }

    if (!$dara.isNull(request.personalLimitType)) {
      body["PersonalLimitType"] = request.personalLimitType;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.whitelist)) {
      bodyFlat["Whitelist"] = request.whitelist;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new UpdateRegistrationPolicyResponse({}));
    } else {
      return $dara.cast<UpdateRegistrationPolicyResponse>(await this.execute(params, req, runtime), new UpdateRegistrationPolicyResponse({}));
    }

  }

  /**
   * 修改设备注册策略
   * 
   * @param request - UpdateRegistrationPolicyRequest
   * @returns UpdateRegistrationPolicyResponse
   */
  async updateRegistrationPolicy(request: UpdateRegistrationPolicyRequest): Promise<UpdateRegistrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * 批量修改卸载申请状态
   * 
   * @param request - UpdateUninstallApplicationsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUninstallApplicationsStatusResponse
   */
  async updateUninstallApplicationsStatusWithOptions(request: UpdateUninstallApplicationsStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUninstallApplicationsStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUninstallApplicationsStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUninstallApplicationsStatusResponse>(await this.callApi(params, req, runtime), new UpdateUninstallApplicationsStatusResponse({}));
    } else {
      return $dara.cast<UpdateUninstallApplicationsStatusResponse>(await this.execute(params, req, runtime), new UpdateUninstallApplicationsStatusResponse({}));
    }

  }

  /**
   * 批量修改卸载申请状态
   * 
   * @param request - UpdateUninstallApplicationsStatusRequest
   * @returns UpdateUninstallApplicationsStatusResponse
   */
  async updateUninstallApplicationsStatus(request: UpdateUninstallApplicationsStatusRequest): Promise<UpdateUninstallApplicationsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUninstallApplicationsStatusWithOptions(request, runtime);
  }

  /**
   * 批量更新用户设备共享状态
   * 
   * @param request - UpdateUserDevicesSharingStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDevicesSharingStatusResponse
   */
  async updateUserDevicesSharingStatusWithOptions(request: UpdateUserDevicesSharingStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserDevicesSharingStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    if (!$dara.isNull(request.sharingStatus)) {
      body["SharingStatus"] = request.sharingStatus;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserDevicesSharingStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUserDevicesSharingStatusResponse>(await this.callApi(params, req, runtime), new UpdateUserDevicesSharingStatusResponse({}));
    } else {
      return $dara.cast<UpdateUserDevicesSharingStatusResponse>(await this.execute(params, req, runtime), new UpdateUserDevicesSharingStatusResponse({}));
    }

  }

  /**
   * 批量更新用户设备共享状态
   * 
   * @param request - UpdateUserDevicesSharingStatusRequest
   * @returns UpdateUserDevicesSharingStatusResponse
   */
  async updateUserDevicesSharingStatus(request: UpdateUserDevicesSharingStatusRequest): Promise<UpdateUserDevicesSharingStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserDevicesSharingStatusWithOptions(request, runtime);
  }

  /**
   * 批量更新用户设备状态
   * 
   * @param request - UpdateUserDevicesStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDevicesStatusResponse
   */
  async updateUserDevicesStatusWithOptions(request: UpdateUserDevicesStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserDevicesStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceAction)) {
      body["DeviceAction"] = request.deviceAction;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserDevicesStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUserDevicesStatusResponse>(await this.callApi(params, req, runtime), new UpdateUserDevicesStatusResponse({}));
    } else {
      return $dara.cast<UpdateUserDevicesStatusResponse>(await this.execute(params, req, runtime), new UpdateUserDevicesStatusResponse({}));
    }

  }

  /**
   * 批量更新用户设备状态
   * 
   * @param request - UpdateUserDevicesStatusRequest
   * @returns UpdateUserDevicesStatusResponse
   */
  async updateUserDevicesStatus(request: UpdateUserDevicesStatusRequest): Promise<UpdateUserDevicesStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserDevicesStatusWithOptions(request, runtime);
  }

  /**
   * 修改用户组
   * 
   * @param request - UpdateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroupWithOptions(request: UpdateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      bodyFlat["Attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.userGroupId)) {
      body["UserGroupId"] = request.userGroupId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUserGroupResponse>(await this.callApi(params, req, runtime), new UpdateUserGroupResponse({}));
    } else {
      return $dara.cast<UpdateUserGroupResponse>(await this.execute(params, req, runtime), new UpdateUserGroupResponse({}));
    }

  }

  /**
   * 修改用户组
   * 
   * @param request - UpdateUserGroupRequest
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroup(request: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  /**
   * 批量修改登陆用户状态
   * 
   * @param request - UpdateUsersStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUsersStatusResponse
   */
  async updateUsersStatusWithOptions(request: UpdateUsersStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUsersStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.saseUserIds)) {
      query["SaseUserIds"] = request.saseUserIds;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUsersStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUsersStatusResponse>(await this.callApi(params, req, runtime), new UpdateUsersStatusResponse({}));
    } else {
      return $dara.cast<UpdateUsersStatusResponse>(await this.execute(params, req, runtime), new UpdateUsersStatusResponse({}));
    }

  }

  /**
   * 批量修改登陆用户状态
   * 
   * @param request - UpdateUsersStatusRequest
   * @returns UpdateUsersStatusResponse
   */
  async updateUsersStatus(request: UpdateUsersStatusRequest): Promise<UpdateUsersStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUsersStatusWithOptions(request, runtime);
  }

}
