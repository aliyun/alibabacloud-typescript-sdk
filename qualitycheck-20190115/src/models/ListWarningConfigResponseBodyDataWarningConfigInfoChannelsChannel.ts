// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel extends $dara.Model {
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * oapi.dingtalk.com/robot/send?access_token=c55628f700eb9ad2a3ca
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

