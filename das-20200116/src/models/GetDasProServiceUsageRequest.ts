// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasProServiceUsageRequest extends $dara.Model {
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
   * The user ID, which is the ID of the Alibaba Cloud account that is used to create the database instance.
   * 
   * > This parameter is optional. If you specify the instance ID of the database instance, the system automatically obtains the user ID when you invoke the API operation.
   * 
   * @example
   * 196278346919****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

