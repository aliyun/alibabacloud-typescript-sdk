// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamURLRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  auth?: boolean;
  /**
   * @example
   * ocs*****ace
   */
  authKey?: string;
  /**
   * @example
   * 1571649499
   */
  endTime?: number;
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
   * 323*****997-cn-qingdao
   */
  id?: string;
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
   * @example
   * 1571639499
   */
  startTime?: number;
  /**
   * @example
   * sd
   */
  transcode?: string;
  /**
   * @example
   * live
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      authKey: 'AuthKey',
      endTime: 'EndTime',
      expire: 'Expire',
      id: 'Id',
      outProtocol: 'OutProtocol',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      transcode: 'Transcode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'boolean',
      authKey: 'string',
      endTime: 'number',
      expire: 'number',
      id: 'string',
      outProtocol: 'string',
      ownerId: 'number',
      startTime: 'number',
      transcode: 'string',
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

