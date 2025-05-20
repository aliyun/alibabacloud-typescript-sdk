// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataResultValue extends $dara.Model {
  sqlId?: string;
  instanceId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      sqlId: 'sqlId',
      instanceId: 'instanceId',
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlId: 'string',
      instanceId: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

