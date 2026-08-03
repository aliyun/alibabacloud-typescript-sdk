// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceStatusDetailResponseBodyResultPlayer extends $dara.Model {
  /**
   * @remarks
   * Song Album
   */
  audioAlbum?: string;
  /**
   * @remarks
   * Artist
   * 
   * @example
   * 刘德华
   */
  audioAnchor?: string;
  /**
   * @remarks
   * Extension Information
   * 
   * @example
   * ""
   */
  audioExt?: string;
  /**
   * @remarks
   * Audio ID
   * 
   * @example
   * 123
   */
  audioId?: string;
  /**
   * @remarks
   * Song length, in seconds
   * 
   * @example
   * 253
   */
  audioLength?: string;
  /**
   * @remarks
   * Song Name
   */
  audioName?: string;
  /**
   * @remarks
   * Song Source (xiami)
   * 
   * @example
   * xiami
   */
  audioSource?: string;
  /**
   * @remarks
   * Song URL
   * 
   * @example
   * https://xxx
   */
  audioUrl?: string;
  /**
   * @remarks
   * Song Type (mp3)
   * 
   * @example
   * mp3
   */
  format?: string;
  /**
   * @remarks
   * Playback progress
   * 
   * @example
   * 30
   */
  progress?: string;
  /**
   * @remarks
   * Playback Source (cloud)
   * 
   * @example
   * cloud
   */
  source?: string;
  /**
   * @remarks
   * Playback status, pause
   * 
   * @example
   * pause
   */
  status?: string;
  /**
   * @remarks
   * Reporting Time
   */
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
   * @remarks
   * Battery value
   * 
   * @example
   * 30
   */
  quantity?: number;
  /**
   * @remarks
   * Power status
   */
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
  /**
   * @remarks
   * Is muted
   */
  muted?: boolean;
  /**
   * @remarks
   * Current volume value
   * 
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
  /**
   * @remarks
   * Player information
   */
  player?: GetDeviceStatusDetailResponseBodyResultPlayer;
  /**
   * @remarks
   * Battery information
   */
  power?: GetDeviceStatusDetailResponseBodyResultPower;
  /**
   * @remarks
   * Volume information
   */
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
   * @remarks
   * Returned error code. 200 indicates that the invocation succeeded.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Return Result of invoking this API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @remarks
   * Returned detailed information.
   */
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

