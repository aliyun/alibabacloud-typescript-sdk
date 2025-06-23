// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortViewSourceIspsResponseBodyIsps extends $dara.Model {
  /**
   * @remarks
   * The total number of requests that are sent from the ISP.
   * 
   * > This parameter does not indicate the accurate number of requests. You can use this parameter to calculate the proportion of requests from different ISPs.
   * 
   * @example
   * 3390671
   */
  count?: number;
  /**
   * @remarks
   * The ID of the ISP. For more information, see the ISP codes table.
   * 
   * @example
   * 100017
   */
  ispId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ispId: 'IspId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ispId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

