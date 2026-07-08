// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceURLRequest extends $dara.Model {
  auth?: boolean;
  /**
   * @remarks
   * Authentication validity period, in seconds.
   * 
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * Device ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Stream mode. Valid values:
   * 
   * - play
   * 
   * - push
   * 
   * @example
   * push
   */
  mode?: string;
  /**
   * @remarks
   * Stream protocol. Valid values:
   * 
   * - rtmp
   * 
   * - flv
   * 
   * - hls
   * 
   * > When Mode is set to push, only rtmp is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @remarks
   * Stream name.
   * 
   * This parameter is required.
   * 
   * @example
   * live001
   */
  stream?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      expire: 'Expire',
      id: 'Id',
      mode: 'Mode',
      outProtocol: 'OutProtocol',
      ownerId: 'OwnerId',
      stream: 'Stream',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'boolean',
      expire: 'number',
      id: 'string',
      mode: 'string',
      outProtocol: 'string',
      ownerId: 'number',
      stream: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

