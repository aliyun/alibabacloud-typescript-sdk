// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value.
   * 
   * @example
   * 52119553
   */
  bps?: number;
  /**
   * @remarks
   * The name of the ISP.
   * 
   * @example
   * unicom
   */
  ispName?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * Liaoning
   */
  locationName?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ispName: 'IspName',
      locationName: 'LocationName',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ispName: 'string',
      locationName: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

