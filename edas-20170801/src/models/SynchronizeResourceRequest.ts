// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SynchronizeResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource. This parameter is required only when you set the Type parameter to `ecs`. If you specify multiple IDs, separate them with commas (,). You can synchronize up to 50 resources at a time.
   * 
   * @example
   * i-bp17c***5q8x,i-bp1**5q8x
   */
  resourceIds?: string;
  /**
   * @remarks
   * The type of the resource to be synchronized. Valid values: `ecs, slb, vpc, and all`. These values are case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: 'string',
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

