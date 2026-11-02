// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMiniGameInfoByAppResponseBodyContentUserProfileData extends $dara.Model {
  activeRegionCodes?: string;
  activeRegions?: string;
  ageSegment?: string;
  androidActiveModels?: string;
  androidRatio?: number;
  femaleRatio?: number;
  harmonyRatio?: number;
  iosActiveModels?: string;
  iosRatio?: number;
  maleRatio?: number;
  profileRemark?: string;
  static names(): { [key: string]: string } {
    return {
      activeRegionCodes: 'ActiveRegionCodes',
      activeRegions: 'ActiveRegions',
      ageSegment: 'AgeSegment',
      androidActiveModels: 'AndroidActiveModels',
      androidRatio: 'AndroidRatio',
      femaleRatio: 'FemaleRatio',
      harmonyRatio: 'HarmonyRatio',
      iosActiveModels: 'IosActiveModels',
      iosRatio: 'IosRatio',
      maleRatio: 'MaleRatio',
      profileRemark: 'ProfileRemark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeRegionCodes: 'string',
      activeRegions: 'string',
      ageSegment: 'string',
      androidActiveModels: 'string',
      androidRatio: 'number',
      femaleRatio: 'number',
      harmonyRatio: 'number',
      iosActiveModels: 'string',
      iosRatio: 'number',
      maleRatio: 'number',
      profileRemark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMiniGameInfoByAppResponseBodyContent extends $dara.Model {
  gameEngine?: string;
  gameMaker?: string;
  gameTypeLevel1?: string;
  gameTypeLevel2?: string;
  gameTypeLevel3?: string;
  gameVersionId?: string;
  gmtModified?: number;
  icon?: string;
  introduction?: string;
  miniProgramCode?: string;
  miniProgramId?: number;
  miniProgramName?: string;
  slogan?: string;
  userProfileData?: QueryMiniGameInfoByAppResponseBodyContentUserProfileData;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      gameEngine: 'GameEngine',
      gameMaker: 'GameMaker',
      gameTypeLevel1: 'GameTypeLevel1',
      gameTypeLevel2: 'GameTypeLevel2',
      gameTypeLevel3: 'GameTypeLevel3',
      gameVersionId: 'GameVersionId',
      gmtModified: 'GmtModified',
      icon: 'Icon',
      introduction: 'Introduction',
      miniProgramCode: 'MiniProgramCode',
      miniProgramId: 'MiniProgramId',
      miniProgramName: 'MiniProgramName',
      slogan: 'Slogan',
      userProfileData: 'UserProfileData',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameEngine: 'string',
      gameMaker: 'string',
      gameTypeLevel1: 'string',
      gameTypeLevel2: 'string',
      gameTypeLevel3: 'string',
      gameVersionId: 'string',
      gmtModified: 'number',
      icon: 'string',
      introduction: 'string',
      miniProgramCode: 'string',
      miniProgramId: 'number',
      miniProgramName: 'string',
      slogan: 'string',
      userProfileData: QueryMiniGameInfoByAppResponseBodyContentUserProfileData,
      version: 'string',
    };
  }

  validate() {
    if(this.userProfileData && typeof (this.userProfileData as any).validate === 'function') {
      (this.userProfileData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMiniGameInfoByAppResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  content?: QueryMiniGameInfoByAppResponseBodyContent[];
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
      content: { 'type': 'array', 'itemType': QueryMiniGameInfoByAppResponseBodyContent },
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

