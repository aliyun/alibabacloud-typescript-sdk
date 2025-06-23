// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventAreaResponseBodyAreas extends $dara.Model {
  /**
   * @remarks
   * The code or ID of the source region. For more information, see [Codes of administrative regions in China and codes of countries and areas](https://help.aliyun.com/document_detail/167926.html). For example, **110000** indicates Beijing, China, and **us** indicates the United States.
   * 
   * @example
   * 110000
   */
  area?: string;
  /**
   * @remarks
   * The number of request packets that were sent from the source region.
   * 
   * @example
   * 228
   */
  inPkts?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      inPkts: 'InPkts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      inPkts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

