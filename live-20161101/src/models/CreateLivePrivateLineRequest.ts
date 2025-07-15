// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePrivateLineRequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration channel.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-1
   */
  accelerationArea?: string;
  /**
   * @remarks
   * The acceleration type. Valid values:
   * 
   * *   play: streaming acceleration
   * *   publish: stream ingest acceleration
   * 
   * This parameter is required.
   * 
   * @example
   * play
   */
  accelerationType?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * live
   */
  appName?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The acceleration channel that you want to reuse. This parameter is required if Reuse is set to yes.
   * 
   * @example
   * ga-bp1iovsdpf01ym9su****
   */
  instanceId?: string;
  /**
   * @remarks
   * The accelerated bandwidth. Unit: Mbit/s. This parameter is required if Reuse is set to no.
   * 
   * @example
   * 200
   */
  maxBandwidth?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to reuse an existing acceleration channel. Valid values:
   * 
   * *   yes: reuses an existing acceleration channel.
   * *   no: creates a new acceleration channel.
   * 
   * This parameter is required.
   * 
   * @example
   * no
   */
  reuse?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * This parameter is required.
   * 
   * @example
   * testStream
   */
  streamName?: string;
  /**
   * @remarks
   * The live center. Valid values: cn-beijing, cn-shanghai, cn-shenzhen, cn-qingdao, ap-northeast-1, ap-southeast-5, eu-central-1, and ap-southeast-1, which indicate China (Beijing), China (Shanghai), China (Shenzhen), China (Qingdao), Japan (Tokyo), Indonesia (Jakarta), Germany (Frankfurt), and Singapore, respectively.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  videoCenter?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationArea: 'AccelerationArea',
      accelerationType: 'AccelerationType',
      appName: 'AppName',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      maxBandwidth: 'MaxBandwidth',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reuse: 'Reuse',
      streamName: 'StreamName',
      videoCenter: 'VideoCenter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationArea: 'string',
      accelerationType: 'string',
      appName: 'string',
      domainName: 'string',
      instanceId: 'string',
      maxBandwidth: 'string',
      ownerId: 'number',
      regionId: 'string',
      reuse: 'string',
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

