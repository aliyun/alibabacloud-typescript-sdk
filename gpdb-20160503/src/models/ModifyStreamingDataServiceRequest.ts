// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStreamingDataServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp10g78o9807yv9h3
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * test-adbpgss
   */
  serviceDescription?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: string;
  /**
   * @remarks
   * The specifications of the service. Unit: capacity units (CUs). Valid values:
   * 
   * *   2
   * *   4
   * *   8
   * *   16
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  serviceSpec?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      serviceDescription: 'ServiceDescription',
      serviceId: 'ServiceId',
      serviceSpec: 'ServiceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      serviceDescription: 'string',
      serviceId: 'string',
      serviceSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

