// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBlacklistCallTaggingsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"number":"1521083xxxx","jobId":"job-481841171213393920"}]
   */
  numberList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      numberList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

