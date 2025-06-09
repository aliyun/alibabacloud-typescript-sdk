// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppResponseBodyResult extends $dara.Model {
  appId?: string;
  /**
   * @example
   * es-serverless-cn-xxx
   */
  instaneId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      instaneId: 'instaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instaneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

