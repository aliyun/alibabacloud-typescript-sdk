// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableDasProRequest extends $dara.Model {
  /**
   * @remarks
   * The database instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The storage duration of SQL Explorer data. Unit: day. Default value: **30**. Valid values:
   * 
   * *   **30**
   * *   **180**
   * *   **365**
   * *   **1095**
   * *   **1825**
   * 
   * @example
   * 30
   */
  sqlRetention?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the database instance.
   * 
   * >  This parameter is optional. The system can automatically obtain the account ID based on the value of InstanceId when you call this operation.
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

