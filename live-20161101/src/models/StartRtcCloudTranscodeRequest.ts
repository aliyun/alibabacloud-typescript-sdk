// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcCloudTranscodeRequestInputParamSingleSubUserParam extends $dara.Model {
  /**
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * userA
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceType: 'SourceType',
      streamType: 'StreamType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceType: 'number',
      streamType: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudTranscodeRequestInputParam extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  singleSubUserParam?: StartRtcCloudTranscodeRequestInputParamSingleSubUserParam;
  static names(): { [key: string]: string } {
    return {
      singleSubUserParam: 'SingleSubUserParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      singleSubUserParam: StartRtcCloudTranscodeRequestInputParamSingleSubUserParam,
    };
  }

  validate() {
    if(this.singleSubUserParam && typeof (this.singleSubUserParam as any).validate === 'function') {
      (this.singleSubUserParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudTranscodeRequestOutputParams extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myChannel
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lhd
   */
  transcodeTemplate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * userA_360p
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eyJhcHBpZCI********
   */
  userToken?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      transcodeTemplate: 'TranscodeTemplate',
      userId: 'UserId',
      userToken: 'UserToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      transcodeTemplate: 'string',
      userId: 'string',
      userToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myChannel
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputParam?: StartRtcCloudTranscodeRequestInputParam;
  /**
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  outputParams?: StartRtcCloudTranscodeRequestOutputParams[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      inputParam: 'InputParam',
      maxIdleTime: 'MaxIdleTime',
      outputParams: 'OutputParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      inputParam: StartRtcCloudTranscodeRequestInputParam,
      maxIdleTime: 'number',
      outputParams: { 'type': 'array', 'itemType': StartRtcCloudTranscodeRequestOutputParams },
    };
  }

  validate() {
    if(this.inputParam && typeof (this.inputParam as any).validate === 'function') {
      (this.inputParam as any).validate();
    }
    if(Array.isArray(this.outputParams)) {
      $dara.Model.validateArray(this.outputParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

