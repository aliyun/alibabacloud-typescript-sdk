// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventPayloadRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the asset where the intrusion event occurred.
   * 
   * @example
   * i-uf6faknmuby7ezht****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The end time of the time range during which the event occurred. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1731551104
   */
  endTime?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 92498578-7c42-4845-8c73-7e824782****
   */
  eventUuid?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values: - **zh**: Chinese. - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The private IP address of the asset where the intrusion event occurred.
   * 
   * @example
   * 10.200.33.XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The public IP address of the asset where the intrusion event occurred.
   * 
   * @example
   * 192.0.XX.XX
   */
  publicIP?: string;
  /**
   * @remarks
   * The source IP address of the caller.
   * 
   * @example
   * 58.34.174.194
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time of the time range during which the event occurred. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656837360
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      endTime: 'EndTime',
      eventUuid: 'EventUuid',
      lang: 'Lang',
      privateIP: 'PrivateIP',
      publicIP: 'PublicIP',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      endTime: 'string',
      eventUuid: 'string',
      lang: 'string',
      privateIP: 'string',
      publicIP: 'string',
      sourceIp: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

