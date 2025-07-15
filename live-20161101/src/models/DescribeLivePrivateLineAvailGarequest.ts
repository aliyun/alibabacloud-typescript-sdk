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
   * The name of the application.
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
   * Specifies whether to query Global Accelerator (GA) instances. Valid values:
   * 
   * *   yes: queries the status of GA instances.
   * *   no: queries the binding information between GA instances and acceleration circuits.
   * 
   * This parameter is required.
   * 
   * @example
   * no
   */
  isGaInstance?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * testStream
   */
  streamName?: string;
  /**
   * @remarks
   * The live center. Valid values: cn-beijing, cn-shanghai, cn-shenzhen, cn-qingdao, ap-northeast-1, ap-southeast-5, eu-central-1, ap-southeast-1, and ap-south-1. cn-beijing indicates China (Beijing). cn-shanghai indicates China (Shanghai). cn-shenzhen indicates China (Shenzhen). cn-qingdao indicates China (Qingdao). ap-northeast-1 indicates Japan (Tokyo). ap-southeast-5 indicates Indonesia (Jakarta). eu-central-1 indicates Germany (Frankfurt). ap-southeast-1 indicates Singapore.
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

