// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * c627c157-560d*******
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the elastic compute container (ECC) that corresponds to the Elastic Compute Service (ECS) instance on which you want to stop the application. You can call the QueryApplicationStatus operation to query the ECC ID. For more information, see [QueryApplicationStatus](https://help.aliyun.com/document_detail/149394.html).
   * 
   * *   If you want to stop the application on multiple ECS instances, separate the ECC IDs with commas (,).
   * *   If you leave this parameter empty, the application will be stopped on all ECS instances.
   * 
   * @example
   * 74ee9166-****1f6-bcb60e5b****
   */
  eccInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

