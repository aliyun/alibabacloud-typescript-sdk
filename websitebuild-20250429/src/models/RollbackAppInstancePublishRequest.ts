// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackAppInstancePublishRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The deployment channel.
   * 
   * @example
   * PC
   */
  deployChannel?: string;
  /**
   * @remarks
   * The publish number.
   * 
   * @example
   * 123
   */
  publishNumber?: string;
  /**
   * @remarks
   * Specifies whether to perform a quick rollback.
   * 
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

