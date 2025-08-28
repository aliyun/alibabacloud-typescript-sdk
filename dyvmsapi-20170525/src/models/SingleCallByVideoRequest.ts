// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleCallByVideoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1590****000
   */
  calledNumber?: string;
  /**
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @example
   * abcdefgh
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 3
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 100
   */
  speed?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  videoCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  voiceCode?: string;
  /**
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      speed: 'Speed',
      videoCode: 'VideoCode',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      speed: 'number',
      videoCode: 'string',
      voiceCode: 'string',
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

