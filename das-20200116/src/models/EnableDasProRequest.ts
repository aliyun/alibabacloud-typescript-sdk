// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableDasProRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The storage duration of SQL Explorer data. Unit: days. Default value: **30**. Valid values:
   * 
   * - **30**
   * - **180**
   * - **365**
   * - **1095**
   * - **1825**
   * 
   * @example
   * 30
   */
  sqlRetention?: number;
  /**
   * @remarks
   * The instance ID, which is the ID of the Alibaba Cloud account that created the database instance.
   * 
   * > This parameter is optional. After you specify the ID of the target database instance, the system automatically obtains the instance ID when you call the API operation.
   * 
   * @example
   * 196278346919****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sqlRetention: 'SqlRetention',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sqlRetention: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

