// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of ECS instance IDs.
   * 
   * @example
   * i-bp1ei8ysh7orb6eq****
   */
  ecsInstanceIds?: string;
  /**
   * @remarks
   * The ECS instance name.
   * 
   * @example
   * test
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The page number of the returned results.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of results per page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The tag information of the ECS instance. The tag key (tagKey) and tag value (tagValue) must be included.
   * 
   * @example
   * [{"tagKey":"abc","tagValue":"xyz"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceIds: 'ecsInstanceIds',
      ecsInstanceName: 'ecsInstanceName',
      page: 'page',
      size: 'size',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceIds: 'string',
      ecsInstanceName: 'string',
      page: 'number',
      size: 'number',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

