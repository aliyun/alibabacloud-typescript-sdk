// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The region description
   */
  description?: string;
  /**
   * @remarks
   * The region name
   * 
   * @example
   * cn-hangzhou
   */
  name?: string;
  /**
   * @remarks
   * The region show name
   */
  showName?: string;
  /**
   * @remarks
   * The region type
   * 
   * @example
   * region
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      showName: 'showName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      showName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      regions: 'regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
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

