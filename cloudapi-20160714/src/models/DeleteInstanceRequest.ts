// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteInstanceRequestTag } from "./DeleteInstanceRequestTag";


export class DeleteInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * apigateway-sh-ae502ee79ef8
   */
  instanceId?: string;
  /**
   * @remarks
   * The tag of objects that match the lifecycle rule. You can specify multiple tags.
   * 
   * @example
   * Key， Value
   */
  tag?: DeleteInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': DeleteInstanceRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

