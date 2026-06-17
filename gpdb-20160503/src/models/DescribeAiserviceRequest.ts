// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > To view details of all instances in a region, including their IDs, call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * drama-123456
   */
  serviceId?: string;
  /**
   * @remarks
   * The type of service. Only drama is supported.
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

