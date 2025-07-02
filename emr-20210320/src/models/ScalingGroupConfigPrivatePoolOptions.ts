// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingGroupConfigPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * 私有池id。
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * 实例启动的私有池容量选项。。
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

