// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventAreaResponseBodyAreas extends $dara.Model {
  area?: string;
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
  areas?: DescribeDDosEventAreaResponseBodyAreas[];
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

