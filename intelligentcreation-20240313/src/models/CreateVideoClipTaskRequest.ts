// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoClipTaskRequest extends $dara.Model {
  /**
   * @example
   * 1314445556
   */
  aliyunMainId?: string;
  description?: string;
  ossKeys?: string[];
  requirement?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunMainId: 'aliyunMainId',
      description: 'description',
      ossKeys: 'ossKeys',
      requirement: 'requirement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunMainId: 'string',
      description: 'string',
      ossKeys: { 'type': 'array', 'itemType': 'string' },
      requirement: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ossKeys)) {
      $dara.Model.validateArray(this.ossKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

