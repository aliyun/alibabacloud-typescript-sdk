// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScenegroupResponseBodyManagementOptions extends $dara.Model {
  chatBannedType?: string;
  managementType?: string;
  mentionAllAuthority?: string;
  searchable?: string;
  showHistoryType?: string;
  validationType?: string;
  static names(): { [key: string]: string } {
    return {
      chatBannedType: 'ChatBannedType',
      managementType: 'ManagementType',
      mentionAllAuthority: 'MentionAllAuthority',
      searchable: 'Searchable',
      showHistoryType: 'ShowHistoryType',
      validationType: 'ValidationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatBannedType: 'string',
      managementType: 'string',
      mentionAllAuthority: 'string',
      searchable: 'string',
      showHistoryType: 'string',
      validationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenegroupResponseBody extends $dara.Model {
  groupUrl?: string;
  icon?: string;
  managementOptions?: GetScenegroupResponseBodyManagementOptions;
  openConversationId?: string;
  ownerStaffId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  subAdminStaffIds?: string[];
  templateId?: string;
  title?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      groupUrl: 'groupUrl',
      icon: 'icon',
      managementOptions: 'managementOptions',
      openConversationId: 'openConversationId',
      ownerStaffId: 'ownerStaffId',
      requestId: 'requestId',
      subAdminStaffIds: 'subAdminStaffIds',
      templateId: 'templateId',
      title: 'title',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupUrl: 'string',
      icon: 'string',
      managementOptions: GetScenegroupResponseBodyManagementOptions,
      openConversationId: 'string',
      ownerStaffId: 'string',
      requestId: 'string',
      subAdminStaffIds: { 'type': 'array', 'itemType': 'string' },
      templateId: 'string',
      title: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.managementOptions && typeof (this.managementOptions as any).validate === 'function') {
      (this.managementOptions as any).validate();
    }
    if(Array.isArray(this.subAdminStaffIds)) {
      $dara.Model.validateArray(this.subAdminStaffIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

