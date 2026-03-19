// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * dramatest
   */
  description?: string;
  /**
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dramauser
   */
  serviceAccount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456Aa!
   */
  serviceAccountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * drama
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      securityIPList: 'SecurityIPList',
      serviceAccount: 'ServiceAccount',
      serviceAccountPassword: 'ServiceAccountPassword',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      description: 'string',
      securityIPList: 'string',
      serviceAccount: 'string',
      serviceAccountPassword: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

