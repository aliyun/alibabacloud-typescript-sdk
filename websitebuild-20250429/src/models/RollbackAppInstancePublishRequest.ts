// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackAppInstancePublishRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Deployment channel
   * 
   * @example
   * PC
   */
  deployChannel?: string;
  /**
   * @remarks
   * Publish number
   * 
   * @example
   * 123
   */
  publishNumber?: string;
  /**
   * @remarks
   * Quick rollback.
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

