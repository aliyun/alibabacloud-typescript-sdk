// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * Image format.
   * 
   * @example
   * jpg
   */
  format?: string;
  /**
   * @remarks
   * Image height.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * Stream ID.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The OSS bucket of the snapshot file.
   * 
   * @example
   * examplebucket
   */
  ossBucket?: string;
  /**
   * @remarks
   * The OSS endpoint of the snapshot file.
   * 
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The OSS object of the snapshot file.
   * 
   * @example
   * photos/live/340200*****100049/ondemand-1639126601767.jpg
   */
  ossObject?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot timestamp.
   * 
   * @example
   * 1639126601767
   */
  timestamp?: number;
  /**
   * @remarks
   * The URL of the snapshot file.
   * 
   * @example
   * http://examplebucket.oss-*****.aliyuncs.com/photos/live/340200*****100049/ondemand-1639126601767.jpg
   */
  url?: string;
  /**
   * @remarks
   * Image width.
   * 
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      height: 'Height',
      id: 'Id',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
      url: 'Url',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      height: 'number',
      id: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      requestId: 'string',
      timestamp: 'number',
      url: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

