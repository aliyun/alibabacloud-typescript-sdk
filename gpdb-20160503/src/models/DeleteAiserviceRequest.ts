// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * drama-123456
   */
  serviceId?: string;
  /**
   * @remarks
   * The service type. Currently, only drama is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * drama
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      serviceId: 'ServiceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      serviceId: 'string',
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

