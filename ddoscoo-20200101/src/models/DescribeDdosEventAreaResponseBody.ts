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

export class DescribeDDosEventAreaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the source region from which the volumetric attack was initiated.
   */
  areas?: DescribeDDosEventAreaResponseBodyAreas[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 11710C9F-BC5E-481A-BEC5-C6D8FBFCA827
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areas: 'Areas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areas: { 'type': 'array', 'itemType': DescribeDDosEventAreaResponseBodyAreas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.areas)) {
      $dara.Model.validateArray(this.areas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

