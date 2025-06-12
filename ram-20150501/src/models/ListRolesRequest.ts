// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRolesRequestTag } from "./ListRolesRequestTag";


export class ListRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries to return. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be `true`.
   * 
   * Valid values: 1 to 1000. Default value: 100.
   * 
   * @example
   * 100
   */
  maxItems?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListRolesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      tag: { 'type': 'array', 'itemType': ListRolesRequestTag },
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

