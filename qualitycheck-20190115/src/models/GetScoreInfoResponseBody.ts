// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam extends $dara.Model {
  /**
   * @example
   * 32
   */
  scoreNum?: number;
  /**
   * @example
   * 3422
   */
  scoreSubId?: number;
  scoreSubName?: string;
  /**
   * @example
   * 1
   */
  scoreType?: number;
  static names(): { [key: string]: string } {
    return {
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      scoreType: 'ScoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
      scoreType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePoScoreInfos extends $dara.Model {
  scoreParam?: GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam[];
  static names(): { [key: string]: string } {
    return {
      scoreParam: 'ScoreParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreParam: { 'type': 'array', 'itemType': GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam },
    };
  }

  validate() {
    if(Array.isArray(this.scoreParam)) {
      $dara.Model.validateArray(this.scoreParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePo extends $dara.Model {
  /**
   * @example
   * 34
   */
  scoreId?: number;
  scoreInfos?: GetScoreInfoResponseBodyDataScorePoScoreInfos;
  scoreName?: string;
  static names(): { [key: string]: string } {
    return {
      scoreId: 'ScoreId',
      scoreInfos: 'ScoreInfos',
      scoreName: 'ScoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreId: 'number',
      scoreInfos: GetScoreInfoResponseBodyDataScorePoScoreInfos,
      scoreName: 'string',
    };
  }

  validate() {
    if(this.scoreInfos && typeof (this.scoreInfos as any).validate === 'function') {
      (this.scoreInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyData extends $dara.Model {
  scorePo?: GetScoreInfoResponseBodyDataScorePo[];
  static names(): { [key: string]: string } {
    return {
      scorePo: 'ScorePo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scorePo: { 'type': 'array', 'itemType': GetScoreInfoResponseBodyDataScorePo },
    };
  }

  validate() {
    if(Array.isArray(this.scorePo)) {
      $dara.Model.validateArray(this.scorePo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetScoreInfoResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetScoreInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

