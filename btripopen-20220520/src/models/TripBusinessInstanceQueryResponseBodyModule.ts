// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TripBusinessInstanceQueryResponseBodyModule extends $dara.Model {
  creator?: string;
  /**
   * @example
   * 1525104000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1525104000
   */
  gmtModified?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

