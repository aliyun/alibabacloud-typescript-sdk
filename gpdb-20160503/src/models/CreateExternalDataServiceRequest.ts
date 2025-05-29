// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExternalDataServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp10g78o9807yv9h3
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Region ID, you can view available region IDs through the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) interface.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Service description.
   * 
   * @example
   * pxf test
   */
  serviceDescription?: string;
  /**
   * @remarks
   * Service name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-adbpgss
   */
  serviceName?: string;
  /**
   * @remarks
   * Service specification (in CU), value:
   * 
   * - 8
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  serviceSpec?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      serviceDescription: 'ServiceDescription',
      serviceName: 'ServiceName',
      serviceSpec: 'ServiceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      serviceDescription: 'string',
      serviceName: 'string',
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

