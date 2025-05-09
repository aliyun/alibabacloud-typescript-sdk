// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOpsItemRequest extends $dara.Model {
  /**
   * @remarks
   * The token that is used to ensure the idempotency.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration ID of the O\\&M item.
   * 
   * @example
   * oic-ae4f******2c682e3
   */
  configurationId?: string;
  /**
   * @remarks
   * The source system data.
   * 
   * This parameter is required.
   * 
   * @example
   * /aliyun/ecs
   */
  data?: string;
  /**
   * @remarks
   * The data source system.
   * 
   * @example
   * /aliyun/eventbridge/event
   */
  dataSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configurationId: 'ConfigurationId',
      data: 'Data',
      dataSource: 'DataSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configurationId: 'string',
      data: 'string',
      dataSource: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

