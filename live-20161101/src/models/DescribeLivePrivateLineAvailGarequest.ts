// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePrivateLineAvailGARequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration channel.
   * 
   * @example
   * ap-southeast-1
   */
  accelerationArea?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * live
   */
  appName?: string;
  /**
   * @remarks
   * The streamer\\"s streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to query the Alibaba Cloud Global Accelerator (GA) instance. Valid values:
   * - yes: Queries the GA instance status.
   * - no: Queries the attachment details between the GA instance and the live streaming link.
   * 
   * This parameter is required.
   * 
   * @example
   * no
   */
  isGaInstance?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The live stream name.
   * 
   * @example
   * testStream
   */
  streamName?: string;
  /**
   * @remarks
   * The live center. Valid values: cn-beijing, cn-shanghai, cn-shenzhen, cn-qingdao, ap-northeast-1, ap-southeast-5, eu-central-1, and ap-southeast-1, ap-south-1, which represent the live centers located in Beijing, Shanghai, Shenzhen, Qingdao, Japan, Indonesia, Germany, and Singapore.
   * 
   * @example
   * cn-shanghai
   */
  videoCenter?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationArea: 'AccelerationArea',
      appName: 'AppName',
      domainName: 'DomainName',
      isGaInstance: 'IsGaInstance',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      streamName: 'StreamName',
      videoCenter: 'VideoCenter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationArea: 'string',
      appName: 'string',
      domainName: 'string',
      isGaInstance: 'string',
      ownerId: 'number',
      regionId: 'string',
      streamName: 'string',
      videoCenter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

