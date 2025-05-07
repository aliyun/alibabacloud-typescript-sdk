// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebStaticsInfo } from "./WebStaticsInfo";


export class DescribeWebStaticsQueryOutput extends $dara.Model {
  length?: number;
  webStatics?: WebStaticsInfo[];
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      webStatics: 'WebStatics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      webStatics: { 'type': 'array', 'itemType': WebStaticsInfo },
    };
  }

  validate() {
    if(Array.isArray(this.webStatics)) {
      $dara.Model.validateArray(this.webStatics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

