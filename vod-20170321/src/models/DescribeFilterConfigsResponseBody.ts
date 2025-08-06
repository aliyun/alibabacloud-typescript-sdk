// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilterConfigsResponseBodyFilterConfigs extends $dara.Model {
  filterName?: string;
  itemConfigs?: string;
  type?: string;
  uuId?: string;
  static names(): { [key: string]: string } {
    return {
      filterName: 'FilterName',
      itemConfigs: 'ItemConfigs',
      type: 'Type',
      uuId: 'UuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterName: 'string',
      itemConfigs: 'string',
      type: 'string',
      uuId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilterConfigsResponseBody extends $dara.Model {
  filterConfigs?: DescribeFilterConfigsResponseBodyFilterConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filterConfigs: 'FilterConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterConfigs: { 'type': 'array', 'itemType': DescribeFilterConfigsResponseBodyFilterConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filterConfigs)) {
      $dara.Model.validateArray(this.filterConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

