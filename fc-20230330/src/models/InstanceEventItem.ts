// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceEventItem extends $dara.Model {
  children?: InstanceEventItem[];
  level?: string;
  message?: string;
  time?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      level: 'level',
      message: 'message',
      time: 'time',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': InstanceEventItem },
      level: 'string',
      message: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

