// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackAppInstancePublishRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * PC
   */
  deployChannel?: string;
  /**
   * @example
   * 123
   */
  publishNumber?: string;
  /**
   * @example
   * true
   */
  quickRollback?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deployChannel: 'DeployChannel',
      publishNumber: 'PublishNumber',
      quickRollback: 'QuickRollback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deployChannel: 'string',
      publishNumber: 'string',
      quickRollback: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

