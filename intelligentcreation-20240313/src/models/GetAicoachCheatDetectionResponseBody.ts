// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachCheatDetectionResponseBodyImageCheatList extends $dara.Model {
  /**
   * @example
   * 2025-03-22 10:05:07
   */
  time?: string;
  /**
   * @example
   * https://demo.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'time',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
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

export class GetAICoachCheatDetectionResponseBodyImageCheat extends $dara.Model {
  /**
   * @example
   * demo
   */
  desc?: string;
  list?: GetAICoachCheatDetectionResponseBodyImageCheatList[];
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      list: 'list',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      list: { 'type': 'array', 'itemType': GetAICoachCheatDetectionResponseBodyImageCheatList },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachCheatDetectionResponseBodyVoiceCheatComparisonList extends $dara.Model {
  /**
   * @example
   * 2024-12-11 10:07:23
   */
  time?: string;
  /**
   * @example
   * https://demo.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'time',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
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

export class GetAICoachCheatDetectionResponseBodyVoiceCheatOriginalList extends $dara.Model {
  /**
   * @example
   * https://demo.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetAICoachCheatDetectionResponseBodyVoiceCheat extends $dara.Model {
  comparisonList?: GetAICoachCheatDetectionResponseBodyVoiceCheatComparisonList[];
  /**
   * @example
   * demo
   */
  desc?: string;
  originalList?: GetAICoachCheatDetectionResponseBodyVoiceCheatOriginalList[];
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonList: 'comparisonList',
      desc: 'desc',
      originalList: 'originalList',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonList: { 'type': 'array', 'itemType': GetAICoachCheatDetectionResponseBodyVoiceCheatComparisonList },
      desc: 'string',
      originalList: { 'type': 'array', 'itemType': GetAICoachCheatDetectionResponseBodyVoiceCheatOriginalList },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.comparisonList)) {
      $dara.Model.validateArray(this.comparisonList);
    }
    if(Array.isArray(this.originalList)) {
      $dara.Model.validateArray(this.originalList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachCheatDetectionResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  cheatId?: string;
  /**
   * @example
   * success
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 2025-02-24 12:00:00
   */
  gmtCreate?: string;
  imageCheat?: GetAICoachCheatDetectionResponseBodyImageCheat;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * true
   * 
   * @example
   * True
   */
  success?: boolean;
  voiceCheat?: GetAICoachCheatDetectionResponseBodyVoiceCheat;
  static names(): { [key: string]: string } {
    return {
      cheatId: 'cheatId',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      gmtCreate: 'gmtCreate',
      imageCheat: 'imageCheat',
      requestId: 'requestId',
      status: 'status',
      success: 'success',
      voiceCheat: 'voiceCheat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheatId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      gmtCreate: 'string',
      imageCheat: GetAICoachCheatDetectionResponseBodyImageCheat,
      requestId: 'string',
      status: 'number',
      success: 'boolean',
      voiceCheat: GetAICoachCheatDetectionResponseBodyVoiceCheat,
    };
  }

  validate() {
    if(this.imageCheat && typeof (this.imageCheat as any).validate === 'function') {
      (this.imageCheat as any).validate();
    }
    if(this.voiceCheat && typeof (this.voiceCheat as any).validate === 'function') {
      (this.voiceCheat as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

