// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ECS instances.
   * 
   * @example
   * i-bp1ei8ysh7orb6eq****
   */
  ecsInstanceIds?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * test
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The tags of the ECS instance. You must configure tagKey and tagValue.
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

