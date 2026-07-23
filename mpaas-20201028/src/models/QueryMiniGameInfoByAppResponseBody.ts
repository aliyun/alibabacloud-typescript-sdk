// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
      version: 'string',
    };
  }

  validate() {
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

