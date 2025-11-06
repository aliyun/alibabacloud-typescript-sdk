// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RtcSipMuteRequestOperationsValue extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * inactive
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class RtcSipMuteRequestOperations extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * replace
   */
  op?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12122121
   */
  operationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /media/audio/status
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: RtcSipMuteRequestOperationsValue;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      op: 'Op',
      operationId: 'OperationId',
      path: 'Path',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      op: 'string',
      operationId: 'string',
      path: 'string',
      value: RtcSipMuteRequestOperationsValue,
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RtcSipMuteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operations?: RtcSipMuteRequestOperations[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      operations: 'Operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      operations: { 'type': 'array', 'itemType': RtcSipMuteRequestOperations },
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

