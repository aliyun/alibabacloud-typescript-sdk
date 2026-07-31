// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudServerRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * aliyun
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudServerRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of region information.
   */
  regions?: DescribeHybridCloudServerRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FBBDE11-C35F-531B-96BA-64CA****C875
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeHybridCloudServerRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

