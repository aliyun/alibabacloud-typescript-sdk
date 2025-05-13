// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The size of the node storage space. Unit: GB.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The storage type of the node. Only ultra disks (cloud_efficiency) are supported.
   * 
   * @example
   * dev
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

