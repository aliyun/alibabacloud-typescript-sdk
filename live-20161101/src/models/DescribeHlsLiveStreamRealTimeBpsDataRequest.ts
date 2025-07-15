// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHlsLiveStreamRealTimeBpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names to query. Separate them with commas (,). A domain name cannot contain double-byte characters.
   * 
   * @example
   * live.aiyun.com
   */
  domainName?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-08-08T00:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      regionId: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

