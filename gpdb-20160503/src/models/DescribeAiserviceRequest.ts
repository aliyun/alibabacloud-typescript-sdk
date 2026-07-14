// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in a region, including instance IDs.
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

