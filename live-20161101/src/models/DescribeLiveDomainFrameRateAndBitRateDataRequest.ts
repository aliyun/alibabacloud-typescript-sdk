// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainFrameRateAndBitRateDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest domain.
   * 
   * > Make sure that the domain name added to ApsaraVideo Live and that you have the permissions to manage the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The time to query. The time is in UTC. Format: *yyyy-MM-dd*T*HH:mm:ss*Z.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-21T08:00:00Z
   */
  queryTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      queryTime: 'QueryTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      queryTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

