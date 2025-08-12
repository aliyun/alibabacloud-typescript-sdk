// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The tags. Tags are used to filter services.
   * 
   * You can filter services only by the tag whose `name` is `product`. Example: {"name":"product","value":"ECS"}.
   * 
   * > We recommend that you do not use the special tags in the CloudMonitor console.
   * 
   * @example
   * [{"name":"product","value":"ECS"}]
   */
  labels?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 10000.
   * 
   * Default value: 30.
   * 
   * > The value of this parameter is not limited. You can view a large number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

