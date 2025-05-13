// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataStreamsResponseBodyResultIndices } from "./ListDataStreamsResponseBodyResultIndices";


export class ListDataStreamsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Green
   */
  health?: string;
  /**
   * @example
   * rollver1
   */
  ilmPolicyName?: string;
  /**
   * @example
   * template1
   */
  indexTemplateName?: string;
  indices?: ListDataStreamsResponseBodyResultIndices[];
  /**
   * @example
   * 1788239393298
   */
  managedStorageSize?: number;
  /**
   * @example
   * my-index-0001
   */
  name?: string;
  /**
   * @example
   * 1788239393298
   */
  totalStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      health: 'health',
      ilmPolicyName: 'ilmPolicyName',
      indexTemplateName: 'indexTemplateName',
      indices: 'indices',
      managedStorageSize: 'managedStorageSize',
      name: 'name',
      totalStorageSize: 'totalStorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      health: 'string',
      ilmPolicyName: 'string',
      indexTemplateName: 'string',
      indices: { 'type': 'array', 'itemType': ListDataStreamsResponseBodyResultIndices },
      managedStorageSize: 'number',
      name: 'string',
      totalStorageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.indices)) {
      $dara.Model.validateArray(this.indices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

