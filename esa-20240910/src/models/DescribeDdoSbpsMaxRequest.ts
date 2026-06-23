// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSBpsMaxRequest extends $dara.Model {
  /**
   * @example
   * global
   */
  coverage?: string;
  /**
   * @example
   * 2023-04-07T02:34:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 709662109****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-02-14T17:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      endTime: 'EndTime',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      endTime: 'string',
      siteId: 'number',
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

