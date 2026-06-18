// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQuotaRequest extends $dara.Model {
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

