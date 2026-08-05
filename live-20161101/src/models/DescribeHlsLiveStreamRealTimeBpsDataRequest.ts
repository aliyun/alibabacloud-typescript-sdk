// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHlsLiveStreamRealTimeBpsDataRequest extends $dara.Model {
  domainName?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
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

