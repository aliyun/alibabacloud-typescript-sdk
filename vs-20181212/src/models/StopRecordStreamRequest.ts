// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRecordStreamRequest extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * test
   */
  name?: string;
  ownerId?: number;
  /**
   * @example
   * example.com
   */
  playDomain?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'number',
      playDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

