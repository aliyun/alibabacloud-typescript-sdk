// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataSourceDeployRequestSwift extends $dara.Model {
  /**
   * @remarks
   * The topic.
   * 
   * @example
   * ha-cn-0ju2rps6c08_api
   */
  topic?: string;
  /**
   * @remarks
   * zk
   * 
   * @example
   * zk
   */
  zk?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'topic',
      zk: 'zk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      zk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

