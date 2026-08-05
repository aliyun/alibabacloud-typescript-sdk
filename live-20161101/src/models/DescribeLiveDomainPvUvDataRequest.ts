// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainPvUvDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain.
   * 
   * > - Make sure that the specified domain name is a streaming domain and that you have the required permissions to operate on it.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The time must be later than the start time. The format is *yyyy-MM-dd*T*HH:mm:ssZ* (UTC).
   * 
   * @example
   * 2018-03-20T16:00:00Z
   */
  endTime?: string;
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
   * The start time. The format is *yyyy-MM-dd*T*HH:mm:ssZ* (UTC).
   * 
   * @example
   * 2018-03-17T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      regionId: 'string',
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

