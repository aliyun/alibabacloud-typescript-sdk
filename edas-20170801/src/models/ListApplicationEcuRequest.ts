// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationEcuRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application whose ECUs you want to query. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * @example
   * e809****-43d7-4c6b-8e01-b0d9d1db****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the microservices namespace.
   * 
   * @example
   * cn-hangzhou:***wei
   */
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      logicalRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

