// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachCheatDetectionResponseBodyImageCheatList extends $dara.Model {
  time?: string;
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
  desc?: string;
  list?: GetAICoachCheatDetectionResponseBodyImageCheatList[];
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
  time?: string;
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
  desc?: string;
  originalList?: GetAICoachCheatDetectionResponseBodyVoiceCheatOriginalList[];
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
  cheatId?: string;
  errorCode?: string;
  errorMessage?: string;
  gmtCreate?: string;
  imageCheat?: GetAICoachCheatDetectionResponseBodyImageCheat;
  requestId?: string;
  status?: number;
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

