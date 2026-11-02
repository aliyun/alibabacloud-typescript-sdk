// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMiniGameQualificationByAppResponseBodyContentCopyrightAuthorizationFiles extends $dara.Model {
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMiniGameQualificationByAppResponseBodyContentIpAuthorizationFiles extends $dara.Model {
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMiniGameQualificationByAppResponseBodyContent extends $dara.Model {
  businessLicenseName?: string;
  businessLicenseUrl?: string;
  copyrightAuthorizationFiles?: QueryMiniGameQualificationByAppResponseBodyContentCopyrightAuthorizationFiles[];
  copyrightFileName?: string;
  copyrightRegistrationNumber?: string;
  copyrightUrl?: string;
  developer?: string;
  gameType?: string;
  gameVersionId?: string;
  gmtModified?: number;
  icpFileName?: string;
  icpUrl?: string;
  idCode?: string;
  ipAuthorizationFiles?: QueryMiniGameQualificationByAppResponseBodyContentIpAuthorizationFiles[];
  miniProgramCode?: string;
  miniProgramId?: number;
  onlineGamePubReFileName?: string;
  onlineGamePubReUrl?: string;
  privacyPolicyUrl?: string;
  publisher?: string;
  reviewStatus?: string;
  static names(): { [key: string]: string } {
    return {
      businessLicenseName: 'BusinessLicenseName',
      businessLicenseUrl: 'BusinessLicenseUrl',
      copyrightAuthorizationFiles: 'CopyrightAuthorizationFiles',
      copyrightFileName: 'CopyrightFileName',
      copyrightRegistrationNumber: 'CopyrightRegistrationNumber',
      copyrightUrl: 'CopyrightUrl',
      developer: 'Developer',
      gameType: 'GameType',
      gameVersionId: 'GameVersionId',
      gmtModified: 'GmtModified',
      icpFileName: 'IcpFileName',
      icpUrl: 'IcpUrl',
      idCode: 'IdCode',
      ipAuthorizationFiles: 'IpAuthorizationFiles',
      miniProgramCode: 'MiniProgramCode',
      miniProgramId: 'MiniProgramId',
      onlineGamePubReFileName: 'OnlineGamePubReFileName',
      onlineGamePubReUrl: 'OnlineGamePubReUrl',
      privacyPolicyUrl: 'PrivacyPolicyUrl',
      publisher: 'Publisher',
      reviewStatus: 'ReviewStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessLicenseName: 'string',
      businessLicenseUrl: 'string',
      copyrightAuthorizationFiles: { 'type': 'array', 'itemType': QueryMiniGameQualificationByAppResponseBodyContentCopyrightAuthorizationFiles },
      copyrightFileName: 'string',
      copyrightRegistrationNumber: 'string',
      copyrightUrl: 'string',
      developer: 'string',
      gameType: 'string',
      gameVersionId: 'string',
      gmtModified: 'number',
      icpFileName: 'string',
      icpUrl: 'string',
      idCode: 'string',
      ipAuthorizationFiles: { 'type': 'array', 'itemType': QueryMiniGameQualificationByAppResponseBodyContentIpAuthorizationFiles },
      miniProgramCode: 'string',
      miniProgramId: 'number',
      onlineGamePubReFileName: 'string',
      onlineGamePubReUrl: 'string',
      privacyPolicyUrl: 'string',
      publisher: 'string',
      reviewStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.copyrightAuthorizationFiles)) {
      $dara.Model.validateArray(this.copyrightAuthorizationFiles);
    }
    if(Array.isArray(this.ipAuthorizationFiles)) {
      $dara.Model.validateArray(this.ipAuthorizationFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMiniGameQualificationByAppResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  content?: QueryMiniGameQualificationByAppResponseBodyContent[];
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      content: { 'type': 'array', 'itemType': QueryMiniGameQualificationByAppResponseBodyContent },
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

