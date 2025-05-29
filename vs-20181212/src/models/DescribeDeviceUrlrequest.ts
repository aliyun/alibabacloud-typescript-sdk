// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceURLRequest extends $dara.Model {
  auth?: boolean;
  /**
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * push
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @remarks
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

