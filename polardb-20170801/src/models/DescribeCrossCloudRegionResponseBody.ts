// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossCloudRegionResponseBodyCrossCloudRegionListCrossCloudZoneList extends $dara.Model {
  /**
   * @example
   * cn-east-3-1
   */
  crossCloudZoneId?: string;
  /**
   * @example
   * cn-east-3-1
   */
  crossCloudZoneName?: string;
  static names(): { [key: string]: string } {
    return {
      crossCloudZoneId: 'CrossCloudZoneId',
      crossCloudZoneName: 'CrossCloudZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossCloudZoneId: 'string',
      crossCloudZoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossCloudRegionResponseBodyCrossCloudRegionList extends $dara.Model {
  /**
   * @example
   * cn-east-3
   */
  crossCloudRegionId?: string;
  /**
   * @example
   * cn-east-3
   */
  crossCloudRegionName?: string;
  crossCloudZoneList?: DescribeCrossCloudRegionResponseBodyCrossCloudRegionListCrossCloudZoneList[];
  /**
   * @example
   * pj-87681rbcef6******
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      crossCloudRegionId: 'CrossCloudRegionId',
      crossCloudRegionName: 'CrossCloudRegionName',
      crossCloudZoneList: 'CrossCloudZoneList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossCloudRegionId: 'string',
      crossCloudRegionName: 'string',
      crossCloudZoneList: { 'type': 'array', 'itemType': DescribeCrossCloudRegionResponseBodyCrossCloudRegionListCrossCloudZoneList },
      projectId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.crossCloudZoneList)) {
      $dara.Model.validateArray(this.crossCloudZoneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossCloudRegionResponseBody extends $dara.Model {
  crossCloudRegionList?: DescribeCrossCloudRegionResponseBodyCrossCloudRegionList[];
  /**
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      crossCloudRegionList: 'CrossCloudRegionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossCloudRegionList: { 'type': 'array', 'itemType': DescribeCrossCloudRegionResponseBodyCrossCloudRegionList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.crossCloudRegionList)) {
      $dara.Model.validateArray(this.crossCloudRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

