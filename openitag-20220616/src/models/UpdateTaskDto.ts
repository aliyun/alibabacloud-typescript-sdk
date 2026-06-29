// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskDTO extends $dara.Model {
  /**
   * @remarks
   * Extended field
   */
  exif?: { [key: string]: string };
  /**
   * @remarks
   * Remark information
   * 
   * @example
   * demo
   */
  remark?: string;
  /**
   * @remarks
   * List of labels
   */
  tags?: string[];
  /**
   * @remarks
   * Task Name
   * 
   * @example
   * demo
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      exif: 'Exif',
      remark: 'Remark',
      tags: 'Tags',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      remark: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskName: 'string',
    };
  }

  validate() {
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

