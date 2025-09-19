// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulNumStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the request.
   * 
   * *   If you want to query Security Center-related data, set the value to **sas**.
   * *   If you want to query Server Guard-related data, you do not need to specify this parameter.
   * 
   * @example
   * sas
   */
  from?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

