// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceStatusDetailResponseBodyResultPlayer extends $dara.Model {
  audioAlbum?: string;
  /**
   * @example
   * 刘德华
   */
  audioAnchor?: string;
  /**
   * @example
   * ""
   */
  audioExt?: string;
  /**
   * @example
   * 123
   */
  audioId?: string;
  /**
   * @example
   * 253
   */
  audioLength?: string;
  audioName?: string;
  /**
   * @example
   * xiami
   */
  audioSource?: string;
  /**
   * @example
   * https://xxx
   */
  audioUrl?: string;
  /**
   * @example
   * mp3
   */
  format?: string;
  /**
   * @example
   * 30
   */
  progress?: string;
  /**
   * @example
   * cloud
   */
  source?: string;
  /**
   * @example
   * pause
   */
  status?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      audioAlbum: 'AudioAlbum',
      audioAnchor: 'AudioAnchor',
      audioExt: 'AudioExt',
      audioId: 'AudioId',
      audioLength: 'AudioLength',
      audioName: 'AudioName',
      audioSource: 'AudioSource',
      audioUrl: 'AudioUrl',
      format: 'Format',
      progress: 'Progress',
      source: 'Source',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioAlbum: 'string',
      audioAnchor: 'string',
      audioExt: 'string',
      audioId: 'string',
      audioLength: 'string',
      audioName: 'string',
      audioSource: 'string',
      audioUrl: 'string',
      format: 'string',
      progress: 'string',
      source: 'string',
      status: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailResponseBodyResultPower extends $dara.Model {
  /**
   * @example
   * 30
   */
  quantity?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      quantity: 'Quantity',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quantity: 'number',
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

export class GetDeviceStatusDetailResponseBodyResultSpeaker extends $dara.Model {
  muted?: boolean;
  /**
   * @example
   * 10
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      muted: 'Muted',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      muted: 'boolean',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailResponseBodyResult extends $dara.Model {
  player?: GetDeviceStatusDetailResponseBodyResultPlayer;
  power?: GetDeviceStatusDetailResponseBodyResultPower;
  speaker?: GetDeviceStatusDetailResponseBodyResultSpeaker;
  static names(): { [key: string]: string } {
    return {
      player: 'Player',
      power: 'Power',
      speaker: 'Speaker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      player: GetDeviceStatusDetailResponseBodyResultPlayer,
      power: GetDeviceStatusDetailResponseBodyResultPower,
      speaker: GetDeviceStatusDetailResponseBodyResultSpeaker,
    };
  }

  validate() {
    if(this.player && typeof (this.player as any).validate === 'function') {
      (this.player as any).validate();
    }
    if(this.power && typeof (this.power as any).validate === 'function') {
      (this.power as any).validate();
    }
    if(this.speaker && typeof (this.speaker as any).validate === 'function') {
      (this.speaker as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetDeviceStatusDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetDeviceStatusDetailResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

