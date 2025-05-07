// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebStaticsInfo } from "./WebStaticsInfo";


export class DescribeWebAppStaticsOutput extends $dara.Model {
  length?: number;
  webAppStatics?: WebStaticsInfo[];
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      webAppStatics: 'WebAppStatics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      webAppStatics: { 'type': 'array', 'itemType': WebStaticsInfo },
    };
  }

  validate() {
    if(Array.isArray(this.webAppStatics)) {
      $dara.Model.validateArray(this.webAppStatics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

