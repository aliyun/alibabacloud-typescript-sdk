// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExternalDataServiceRequest extends $dara.Model {
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
   * Region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) API to view available region IDs.
   * 
   * @example
   * cn-hangzhou
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
   * Service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: string;
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

