// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBlockEventResponseBodyDataDataInfoLevelType extends $dara.Model {
  label?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

