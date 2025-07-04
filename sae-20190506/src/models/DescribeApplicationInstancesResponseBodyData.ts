// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationInstancesResponseBodyDataInstances } from "./DescribeApplicationInstancesResponseBodyDataInstances";


export class DescribeApplicationInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The application instances.
   */
  instances?: DescribeApplicationInstancesResponseBodyDataInstances[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned instances.
   * 
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instances: 'Instances',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instances: { 'type': 'array', 'itemType': DescribeApplicationInstancesResponseBodyDataInstances },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

